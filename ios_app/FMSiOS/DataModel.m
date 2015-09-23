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
        _coordinate = CLLocationCoordinate2DMake(0, 0);
        _title = @"Unknown";
        _subtitle = [NSString stringWithFormat:@"%f lat, %f long", _coordinate.latitude, _coordinate.longitude];
    }
    return self;
}

- (instancetype)initWithCoord:(CLLocationCoordinate2D)coord {
    self = [super init];
    if (self) {
        _coordinate = coord;
        _title = @"Unknown";
        _subtitle = [NSString stringWithFormat:@"%f lat, %f long", _coordinate.latitude, _coordinate.longitude];
    }
    return self;
}

@end

@interface DataModel ()

@property (strong, nonatomic) NSString *jwt;

@end

@implementation DataModel

- (instancetype)init {
    self = [super init];
    if (self) {
        _jwt = nil;
    }
    return self;
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
             //TODO: parser methods to handle this cooler
             NSDictionary *res = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
             NSArray *buoys = [res objectForKey:@"buoyInstances"];
             
             [self.dataDelegate performSelectorOnMainThread:@selector(didGetBuoyListFromServer:) withObject:buoys waitUntilDone:NO];
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
