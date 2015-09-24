//
//  DataModel.h
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>
#import "Interface.h"

#define DEFAULT_SERVER_ADDRESS @"teamneptune.co"

// Data model for a buoy and the groups containing them
@interface BuoyGroup : NSObject

@property (nonatomic, strong, readonly) NSMutableArray *buoys;

@property (nonatomic, strong) NSString *title; //Name of this group of buoys
@property NSUInteger groupId; //ID for this group

@end

@interface Buoy : NSObject <MKAnnotation>

@property (nonatomic, weak) BuoyGroup *group; //nil for no group

@property (nonatomic, copy) NSString *title;
@property (nonatomic, copy) NSString *subtitle;
@property (nonatomic, readonly) CLLocationCoordinate2D coordinate;
@property (nonatomic, strong) NSDate *dateCreated;
@property (nonatomic, strong) NSString *buoyName;
@property (nonatomic, strong) NSString *buoyGuid; //ids for different purposes
@property NSUInteger buoyId;
@property NSUInteger databaseId;


- (instancetype)initWithCoord:(CLLocationCoordinate2D)coord;

@end

// Delegates for communication with the data model and VCs
@protocol DataModelInitDelegate <NSObject>

- (void)didConnectToServer;
- (void)didFailToConnectBadDetails;
- (void)didFailToConnectServerFail;
- (void)didFailToConnectServerNotFound;

@end

@protocol DataModelDataDelegate <NSObject>

- (void)didFailServerComms;

- (void)didGetBuoyListFromServer:(NSArray *)buoys;

@end

// Core server communication data model
@interface DataModel : NSObject

@property (nonatomic, weak) NSObject<DataModelInitDelegate> *delegate;
@property (nonatomic, weak) NSObject<DataModelDataDelegate> *dataDelegate;

- (void)connectToServerWithEmail:(NSString *)email andPass:(NSString *)password;
- (void)updateBuoyListingFromServer;

- (void)disconnect;

// Static helper methods
+ (BOOL)NSStringIsValidEmail:(NSString *)s; // Returns whether the given string is a valid email

@end
