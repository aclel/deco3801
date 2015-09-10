//
//  DataModel.m
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import "DataModel.h"

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
    
}

@end
