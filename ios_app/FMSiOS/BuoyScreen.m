//
//  BuoyScreenViewController.m
//  FMSiOS
//
//  Created by Sean M on 3/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

// TODO: back/logout button
// TODO: change between map and satellite

#import "BuoyScreen.h"

@interface BuoyScreen () <CLLocationManagerDelegate>

@property (strong, nonatomic) MKMapView *map;
@property (strong, nonatomic) CLLocationManager *l;

@end

@implementation BuoyScreen

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Use location manager to ensure they have current location enabled
    self.l = [[CLLocationManager alloc] init];
    self.l.delegate = self;
    if ([self.l respondsToSelector:@selector(requestWhenInUseAuthorization)]) {
        [self.l requestWhenInUseAuthorization];
    }
    
    // Create map and fit to screen
    self.map = [[MKMapView alloc] initWithFrame:self.view.frame];
    self.map.mapType = MKMapTypeStandard;
    self.map.zoomEnabled = YES;
    self.map.scrollEnabled = YES;
    self.map.pitchEnabled = NO;
    self.map.rotateEnabled = NO;
    self.map.delegate = self;
    
    // Fin
    [self.view addSubview:self.map];
}

- (void)viewWillLayoutSubviews {
    [super viewWillLayoutSubviews];
    
    self.map.frame = self.view.frame;
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    [self.navigationController setNavigationBarHidden:NO animated:YES];
    self.d.dataDelegate = self;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

#pragma mark - location updates
- (void)locationManager:(CLLocationManager *)manager didChangeAuthorizationStatus:(CLAuthorizationStatus)status {
    if (status == kCLAuthorizationStatusAuthorizedWhenInUse) {
        self.map.showsUserLocation = YES;
        self.map.userTrackingMode = MKUserTrackingModeFollow;
    }
}

@end
