//
//  DataModel.m
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import "DataModel.h"

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

@implementation DataModel

- (instancetype)init {
    self = [super init];
    if (self) {
        _serverAddr = @"google.com";
        _serverPort = 80;
    }
    return self;
}

- (void)connectToServerWithEmail:(NSString *)email andPass:(NSString *)password {
    // For now, just test if valid values
    if ([email isEqualToString:@"e@mail.com"] && [password isEqualToString:@"pass"]) {
        [NSTimer scheduledTimerWithTimeInterval:2.0 target:self selector:@selector(dummyConnect) userInfo:nil repeats:NO];
    } else {
        [NSTimer scheduledTimerWithTimeInterval:2.0 target:self selector:@selector(dummyNoConnect) userInfo:nil repeats:NO];
    }
}

- (void)dummyConnect {
    [self.delegate didConnectToServer];
}

- (void)dummyNoConnect {
    [self.delegate didFailToConnectBadDetails];
}

- (void)updateBuoyListingFromServer {
    // For now just generate random buoys
    [NSTimer scheduledTimerWithTimeInterval:2.0 target:self selector:@selector(dummyMakeBuoys) userInfo:nil repeats:NO];
}

- (void)dummyMakeBuoys {
    NSMutableArray *a = [[NSMutableArray alloc] init];
    NSLog(@"Getting buoy info...");
    
    for (NSUInteger i = 0; i < 15; i++) {
        int rand = arc4random_uniform(100);
        int rand2 = arc4random_uniform(100);
        CLLocationDegrees lon = 153.033 + rand/1000.0;
        CLLocationDegrees lat = -27.466 + rand2/1000.0;
        Buoy *new = [[Buoy alloc] initWithCoord:CLLocationCoordinate2DMake(lat, lon)];
        new.title = [NSString stringWithFormat:@"Buoy %d", i + 1];
        [a addObject:new];
    }
    
    [self.dataDelegate didGetBuoyListFromServer:a];
}

@end
