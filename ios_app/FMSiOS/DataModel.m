//
//  DataModel.m
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import "DataModel.h"

//TODO: handle first-time login

@implementation Buoy

- (instancetype)init {
    self = [super init];
    if (self) {
        _group = nil;
        _coordinate = CLLocationCoordinate2DMake(0, 0);
        _trueCoord = CLLocationCoordinate2DMake(0, 0);
        _validCoordinate = NO;
        _title = @"Unknown";
        _subtitle = @"Unknown";
        _dateCreated = [NSDate dateWithTimeIntervalSince1970:0];
        _buoyName = @"N/A";
        _buoyGuid = @"N/A";
        _buoyId = -1;
        _databaseId = -1;
    }
    return self;
}

- (instancetype)initWithCoord:(CLLocationCoordinate2D)coord {
    self = [self init];
    if (self) {
        _coordinate = CLLocationCoordinate2DMake([DataModel addJitter:coord.latitude withMax:0.005], [DataModel addJitter:coord.longitude withMax:0.005]);
        _trueCoord = coord;
        _validCoordinate = YES;
    }
    return self;
}

- (void)setGroup:(BuoyGroup *)group {
    _group = group;
    
    if (group != nil) {
        self.subtitle = group.title;
    } else {
        self.subtitle = @"Ungrouped";
    }
}

@end


@implementation BuoyGroup

- (instancetype)init {
    self = [super init];
    if (self) {
        _buoys = [[NSMutableArray alloc] init];
        _title = @"Unknown Group";
        _groupId = -1;
        
    }
    return self;
}
@end

@interface DataModel ()

// Login info
@property (strong, nonatomic) NSString *jwt;
@property (strong, nonatomic) NSString *email;
@property (strong, nonatomic) NSString *firstName;
@property (strong, nonatomic) NSString *lastName;
@property (strong, nonatomic) NSString *role;

// Misc
@property (strong, nonatomic) NSDateFormatter *dateFormatter;

@end


@implementation DataModel

- (instancetype)init {
    self = [super init];
    if (self) {
        _jwt = _email = _firstName = _lastName = _role = nil;
        _dateFormatter = [[NSDateFormatter alloc] init];
        [_dateFormatter setLocale:[NSLocale localeWithLocaleIdentifier:@"en_US_POSIX"]];
        [_dateFormatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ssZZZZZZ"];
    }
    return self;
}

#pragma mark - parsing/data methods

- (BOOL)parseJSONForUserLogin:(NSDictionary *)userInfo {
    // Given a dictionary response to a user login, sets all class properties for a user login as necessary, returning false for a bad login (one without a token)
    self.jwt = [userInfo objectForKey:@"token"];
    if (self.jwt == nil) {
        return NO;
    }
    
    self.email = [userInfo objectForKey:@"email"];
    self.firstName = [userInfo objectForKey:@"firstName"];
    self.lastName = [userInfo objectForKey:@"lastName"];
    self.role = [userInfo objectForKey:@"role"];
    
    return YES;
}

- (NSArray *)parseJSONForCurrentBuoys:(NSArray *)buoyDictList {
    // Given a list of buoy dictionaries retrieved from the server, generates buoy and buoy group objects and returns an array of these buoy group objects
    // Buoys and BuoyGroups are mixed in the results; any buoys not in a group are by themselves, while those which are are inserted into the buoy groups arrays.
    NSMutableArray *parsed = [[NSMutableArray alloc] initWithCapacity:buoyDictList.count];
    for (NSDictionary *buoyInfo in buoyDictList) {
        // Get lat, long
        NSObject *latInfo = [buoyInfo objectForKey:@"latitude"];
        NSObject *lonInfo = [buoyInfo objectForKey:@"longitude"];
        
        // Create buoy
        Buoy *b;
        if ([latInfo isKindOfClass:[NSNumber class]] && [lonInfo isKindOfClass:[NSNumber class]]) {
            NSNumber *lat = (NSNumber *)latInfo;
            NSNumber *lon = (NSNumber *)lonInfo;
            b = [[Buoy alloc] initWithCoord:CLLocationCoordinate2DMake(lat.doubleValue, lon.doubleValue)];
        } else if ([latInfo isKindOfClass:[NSDictionary class]] && [lonInfo isKindOfClass:[NSDictionary class]]) {
            NSDictionary *latDict = (NSDictionary *)latInfo;
            NSDictionary *lonDict = (NSDictionary *)lonInfo;
            NSNumber *lat = [latDict objectForKey:@"Float64"];
            NSNumber *lon = [lonDict objectForKey:@"Float64"];
            NSNumber *latValid = [latDict objectForKey:@"Valid"];
            NSNumber *lonValid = [lonDict objectForKey:@"Valid"];
            if (lat != nil && lon != nil && latValid != nil && lonValid != nil && latValid.intValue == 1 && lonValid.intValue == 1) {
                b = [[Buoy alloc] initWithCoord:CLLocationCoordinate2DMake(lat.doubleValue, lon.doubleValue)];
            } else {
                b = [[Buoy alloc] init];
            }
        } else {
            b = [[Buoy alloc] init];
        }
        
        // Set indiv. properties
        NSString *buoyGuid = [buoyInfo objectForKey:@"buoyGuid"];
        NSNumber *buoyId = [buoyInfo objectForKey:@"buoyID"];
        NSString *buoyName = [buoyInfo objectForKey:@"buoyName"];
        NSString *dateCreated = [buoyInfo objectForKey:@"dateCreated"];
        NSNumber *databaseId = [buoyInfo objectForKey:@"id"];
        NSString *name = [buoyInfo objectForKey:@"name"];
        if (buoyGuid != nil) b.buoyGuid = buoyGuid;
        if (buoyId != nil) b.buoyId = buoyId.integerValue;
        if (buoyName != nil) b.buoyName = buoyName;
        if (dateCreated != nil) b.dateCreated = [_dateFormatter dateFromString:dateCreated];
        if (databaseId != nil) b.databaseId = databaseId.integerValue;
        if (name != nil) b.title = name;
        
        // Get group id to put under
        NSNumber *groupId = [buoyInfo objectForKey:@"buoyGroupId"];
        if (groupId == nil) groupId = [NSNumber numberWithInteger:0];
        
        // Find group for this id
        BuoyGroup *groupForBuoy = nil;
        for (BuoyGroup *g in parsed) {
            if (g.groupId == groupId.integerValue) {
                groupForBuoy = g;
            }
        }
        
        // If not there, create it and add to list of all groups
        if (groupForBuoy == nil) {
            groupForBuoy = [[BuoyGroup alloc] init];
            groupForBuoy.groupId = groupId.integerValue;
            if (groupId.integerValue == 0) {
                groupForBuoy.title = @"-";
            } else {
                NSString *groupName = [buoyInfo objectForKey:@"buoyGroupName"];
                if (groupName != nil) groupForBuoy.title = groupName;
            }
            [parsed addObject:groupForBuoy];
        }
        
        // Add buoy to this group
        b.group = groupForBuoy;
        [groupForBuoy.buoys addObject:b];
    }
    
    return parsed;
}

#pragma mark - server connection

- (NSURL *)getServerUrl {
    // Return the server url specified by the current settings
    NSString *address = [[NSUserDefaults standardUserDefaults] objectForKey:@"ServerAddress"];
    if (address == nil) {
        NSLog(@"Saved server address could not be found; using default");
        address = FMS_DEFAULT_SERVER_ADDRESS;
    }
    return [NSURL URLWithString:[NSString stringWithFormat:@"https://%@", address]];
}

- (void)sendRequestToServerUrl:(NSString *)relPath textData:(NSString *)requestString method:(NSString *)method authorization:(BOOL)authorization handler:(void (^)(NSData *data, NSURLResponse *response, NSError *error))handler {
    
    // Get request info
    NSURL *postUrl = [NSURL URLWithString:relPath relativeToURL:[self getServerUrl]];
    NSLog(@"Connecting to url: %@", postUrl);
    NSData *postData = [requestString dataUsingEncoding:NSASCIIStringEncoding allowLossyConversion:YES];
    NSString *postLen = [NSString stringWithFormat:@"%lu", (unsigned long)requestString.length];
    
    // Create request
    NSMutableURLRequest *request = [[NSMutableURLRequest alloc] initWithURL:postUrl];
    request.allowsCellularAccess = YES;
    request.HTTPMethod = method;
    request.HTTPBody = postData;
    if (authorization && self.jwt != nil) {
        [request setValue:[NSString stringWithFormat:@"Bearer %@", self.jwt] forHTTPHeaderField:@"Authorization"];
    } else {
        [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
        [request setValue:postLen forHTTPHeaderField:@"Content-Length"];
    }
    
    // Send request
    /*NSLog(@"Sending request: %@", request);
    for (NSString *header in [[request allHTTPHeaderFields] allKeys]) {
        NSLog(@"header %@: %@", header, [request allHTTPHeaderFields][header]);
    }*/
    [[[NSURLSession sharedSession] dataTaskWithRequest:request completionHandler:handler] resume];
}


#pragma mark - external methods

- (void)connectToServerWithEmail:(NSString *)email andPass:(NSString *)password {
    NSString *dataToSend = [NSString stringWithFormat:@" { \"email\" : \"%@\", \"password\" : \"%@\" } ",email, password];
    
    // Send a server api request to logon
    [self sendRequestToServerUrl:@"api/login" textData:dataToSend method:@"POST" authorization:NO handler:
     ^(NSData *data, NSURLResponse *response, NSError *error){
         if (error) {
             [self.delegate performSelectorOnMainThread:@selector(didFailToConnectServerNotFound) withObject:nil waitUntilDone:NO];
             return;
         }
         
         // Interpret their response
         NSHTTPURLResponse *httpRes = (NSHTTPURLResponse *)response;
         NSLog(@"Got login response: %d", httpRes.statusCode);
         if (httpRes.statusCode == 401 || httpRes.statusCode == 403) { //Unauthorised
             [self.delegate performSelectorOnMainThread:@selector(didFailToConnectBadDetails) withObject:nil waitUntilDone:NO];
         } else if (httpRes.statusCode == 200) { //Success
             // Get user info
             NSDictionary *user = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
             if ([self parseJSONForUserLogin:user]) {
                 [self.delegate performSelectorOnMainThread:@selector(didConnectToServer) withObject:nil waitUntilDone:NO];
             } else {
                 [self.delegate performSelectorOnMainThread:@selector(didFailToConnectServerFail) withObject:nil waitUntilDone:NO];
             }
         } else { //Server failure
             [self.delegate performSelectorOnMainThread:@selector(didFailToConnectServerFail) withObject:nil waitUntilDone:NO];
         }
     }];
}

- (void)updateBuoyListingFromServer {
    // Send a server api request to logon
    [self sendRequestToServerUrl:@"api/buoy_instances?active=true" textData:@"" method:@"GET" authorization:YES handler:
     ^(NSData *data, NSURLResponse *response, NSError *error){
         // Interpret their response
         NSHTTPURLResponse *httpRes = (NSHTTPURLResponse *)response;
         if (!error && httpRes.statusCode == 200) { //Success
             // Get buoy info
             NSDictionary *res = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
             
             NSLog(@"%@", res);
             NSArray *buoyGroups = [self parseJSONForCurrentBuoys:[res objectForKey:@"buoyInstances"]];
             
             [self.dataDelegate performSelectorOnMainThread:@selector(didGetBuoyListFromServer:) withObject:buoyGroups waitUntilDone:NO];
         } else { //Server failure
             [self.dataDelegate performSelectorOnMainThread:@selector(didFailServerComms) withObject:nil waitUntilDone:NO];
         }
     }];
}

- (void)requestBuoyInfo:(Buoy *)buoy {
    //For now, just use dummy data
    //TODO
    
    [NSTimer scheduledTimerWithTimeInterval:2.0 target:self selector:@selector(dummybuoyinfo) userInfo:nil repeats:NO];
}

- (void)dummybuoyinfo {
    [self.dataDelegate didGetBuoyInfoFromServer:@{
       @"Temperature" : @"20°C",
       @"Turbidity" : @"33 NTU",
       @"Battery" : @"85\%",
    }];
}

- (void)disconnect {
    self.jwt = self.email = self.firstName = self.lastName = self.role = nil;
}

- (NSString *)userDisplayName {
    // First name exists
    if (self.firstName != nil && self.firstName.length > 0) {
        if (self.lastName != nil && self.lastName.length > 0) {
            return [NSString stringWithFormat:@"%@ %@", self.firstName, self.lastName];
        } else {
            return self.firstName;
        }
    }
    
    // Last name only
    if (self.lastName != nil && self.lastName.length > 0) {
        return self.lastName;
    }
    
    // Use email otherwise, if it exists
    if (self.email != nil && self.email.length > 0) {
        return self.email;
    }
    
    // Else unknown way to display name
    return @"User";
}

#pragma mark - static methods
+ (BOOL)NSStringIsValidEmail:(NSString *)s {
    NSString *regex = @"^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$";
    NSPredicate *test = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", regex];
    return [test evaluateWithObject:s];
}

+ (NSString *)stringForLatitude:(CLLocationDegrees)latitude {
    if (latitude > 0) { // North of equator
        return [NSString stringWithFormat:@"%.2f°N", latitude];
    } else if (latitude < 0) { // South
        return [NSString stringWithFormat:@"%.2f°S", -latitude];
    } else {
        return @"0°";
    }
}

+ (NSString *)stringForLongitude:(CLLocationDegrees)longitude {
    if (longitude > 0) { // East of london
        return [NSString stringWithFormat:@"%.2f°E", longitude];
    } else if (longitude < 0) { // West
        return [NSString stringWithFormat:@"%.2f°W", -longitude];
    } else {
        return @"0°";
    }
}

+ (double)addJitter:(double)val withMax:(double)maxVal{
    NSInteger jitter = arc4random() % 10000;
    return val + (jitter - 5000)/10000.0*maxVal;
}

@end
