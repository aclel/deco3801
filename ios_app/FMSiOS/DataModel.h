//
//  DataModel.h
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol DataModelInitDelegate <NSObject>

- (void)didConnectToServer;
- (void)didFailToConnectBadDetails;
- (void)didFailToConnectServerLoss;

@end

@protocol DataModelDataDelegate <NSObject>

- (void)didGetBuoyListFromServer:(NSArray *)buoys;

@end

@interface DataModel : NSObject

@property (nonatomic, weak) id<DataModelInitDelegate> delegate;
@property (nonatomic, weak) id<DataModelDataDelegate> dataDelegate;

@property (nonatomic, strong) NSString *serverAddr;
@property NSUInteger serverPort;

- (void)connectToServerWithEmail:(NSString *)email andPass:(NSString *)password;
- (void)updateBuoyListingFromServer;

@end
