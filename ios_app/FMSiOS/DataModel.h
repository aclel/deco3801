//
//  DataModel.h
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>

// Data model for a buoy - really simple for the moment
@interface Buoy : NSObject <MKAnnotation>

@property (nonatomic, readonly) CLLocationCoordinate2D coordinate;
@property (nonatomic, copy) NSString *title;
@property (nonatomic, copy) NSString *subtitle;

- (instancetype)initWithCoord:(CLLocationCoordinate2D)coord;

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
