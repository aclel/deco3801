//
//  DataModel.m
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import "DataModel.h"

//TODO: handle first-time login
//TODO: get info from user for later use

@implementation Buoy

- (instancetype)init {
    self = [super init];
    if (self) {
        _group = nil;
        _coordinate = CLLocationCoordinate2DMake(0, 0);
        _title = @"Unknown";
        _subtitle = [NSString stringWithFormat:@"%f lat, %f long", _coordinate.latitude, _coordinate.longitude];
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
        _coordinate = coord;
    }
    return self;
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

@property (strong, nonatomic) NSString *jwt;
@property (strong, nonatomic) NSDateFormatter *dateFormatter;

@end


@implementation DataModel

- (instancetype)init {
    self = [super init];
    if (self) {
        _jwt = nil;
        _dateFormatter = [[NSDateFormatter alloc] init];
        [_dateFormatter setLocale:[NSLocale localeWithLocaleIdentifier:@"en_US_POSIX"]];
        [_dateFormatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ssZZZZZZ"];
    }
    return self;
}

#pragma mark - parsing/data methods

- (NSArray *)parseJSONForCurrentBuoys:(NSArray *)buoyDictList {
    // Given a list of buoy dictionaries retrieved from the server, generates buoy and buoy group objects and returns an array of these buoy group objects
    // Buoys and BuoyGroups are mixed in the results; any buoys not in a group are by themselves, while those which are are inserted into the buoy groups arrays.
    
    NSMutableArray *parsed = [[NSMutableArray alloc] initWithCapacity:buoyDictList.count];
    NSSet *curGroups = [[NSSet alloc] init];
    for (NSDictionary *buoyInfo in buoyDictList) {
        // Get lat, long
        NSNumber *lat = [buoyInfo objectForKey:@"latitude"];
        NSNumber *lon = [buoyInfo objectForKey:@"longitude"];
        
        // Create buoy
        Buoy *b;
        if (lat != nil && lon != nil) {
            b = [[Buoy alloc] initWithCoord:CLLocationCoordinate2DMake(lat.doubleValue, lon.doubleValue)];
        } else {
            b = [[Buoy alloc] init];
        }
        
        // Set properties
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
        
        // Handle groups
        NSNumber *groupId = [buoyInfo objectForKey:@"buoyGroupId"];
        NSString *groupName = [buoyInfo objectForKey:@"buoyGroupInfo"];
        if (groupId != nil || groupId.integerValue == -1) { // Add to group
            // Find group for this
            BuoyGroup *groupForBuoy = nil;
            for (BuoyGroup *g in curGroups) {
                if (g.groupId == groupId.integerValue) {
                    groupForBuoy = g;
                }
            }
            
            // If not there, create it and add to list of all groups
            if (groupForBuoy == nil) {
                groupForBuoy = [[BuoyGroup alloc] init];
                groupForBuoy.groupId = groupId.integerValue;
                if (groupName != nil) groupForBuoy.title = groupName;
                [parsed addObject:groupForBuoy];
            }
            
            // Add to this group
            b.group = groupForBuoy;
            [groupForBuoy.buoys addObject:b];
        } else { // Add individually
            b.group = nil;
            [parsed addObject:b];
        }
    }
    
    return parsed;
}

#pragma mark - server connection

- (NSURL *)getServerUrl {
    // Return the server url specified by the current settings
    NSString *address = [[NSUserDefaults standardUserDefaults] objectForKey:@"ServerAddress"];
    if (address == nil) {
        NSLog(@"Saved server address could not be found; using default");
        address = DEFAULT_SERVER_ADDRESS;
    }
    return [NSURL URLWithString:[NSString stringWithFormat:@"http://%@", address]];
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
             
             self.jwt = [user objectForKey:@"token"];
             
             [self.delegate performSelectorOnMainThread:@selector(didConnectToServer) withObject:nil waitUntilDone:NO];
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
             NSArray *buoyGroups = [self parseJSONForCurrentBuoys:[res objectForKey:@"buoyInstances"]];
             
             [self.dataDelegate performSelectorOnMainThread:@selector(didGetBuoyListFromServer:) withObject:buoyGroups waitUntilDone:NO];
         } else { //Server failure
             [self.dataDelegate performSelectorOnMainThread:@selector(didFailServerComms) withObject:nil waitUntilDone:NO];
         }
     }];
}

- (void)disconnect {
    self.jwt = nil;
}



#pragma mark - static methods
+ (BOOL)NSStringIsValidEmail:(NSString *)s {
    NSString *regex = @"^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$";
    NSPredicate *test = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", regex];
    return [test evaluateWithObject:s];
}

@end
