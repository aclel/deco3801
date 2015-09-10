//
//  DataModel.h
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import <Foundation/Foundation.h>

// Data model for a buoy - really simple for the moment
@protocol Buoy <NSObject>

//Coords

@end

// Delegates for communication with the data model and VCs
@protocol DataModelInitDelegate <NSObject>

- (void)didConnectToServer;
- (void)didFailToConnectBadDetails;
- (void)didFailToConnectServerLoss;

@end

@protocol DataModelDataDelegate <NSObject>

- (void)didGetBuoyListFromServer:(NSArray *)buoys;

@end

// Core server communication data model
@interface DataModel : NSObject

@property (nonatomic, weak) id<DataModelInitDelegate> delegate;
@property (nonatomic, weak) id<DataModelDataDelegate> dataDelegate;

@property (nonatomic, strong) NSString *serverAddr;
@property NSUInteger serverPort;

- (void)connectToServerWithEmail:(NSString *)email andPass:(NSString *)password;
- (void)updateBuoyListingFromServer;

@end
