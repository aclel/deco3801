//
//  BuoyScreenViewController.m
//  FMSiOS
//
//  Created by Sean M on 3/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

// TODO: add options like map/satellite to popover


#import "BuoyScreen.h"

@interface BuoyScreen () <CLLocationManagerDelegate>

@property (strong, nonatomic) MKMapView *map;
@property (strong, nonatomic) CLLocationManager *l;
@property (strong, nonatomic) UIBarButtonItem *pButton;
@property (strong, nonatomic) UIPopoverController *p;

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
    
    // Navigation bar settings
    self.navigationItem.backBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"Logout" style:UIBarButtonItemStylePlain target:nil action:nil];
    UIBarButtonItem *posIcon = [[MKUserTrackingBarButtonItem alloc] initWithMapView:self.map];
    UIButton *tempInfoB = [UIButton buttonWithType:UIButtonTypeInfoLight];
    UIBarButtonItem *infoIcon = [[UIBarButtonItem alloc] initWithImage:tempInfoB.currentImage style:UIBarButtonItemStylePlain target:self action:@selector(infoButtonPressed)];
    
    self.navigationItem.rightBarButtonItems = [NSArray arrayWithObjects:infoIcon, posIcon, nil];
    
    // Popover for options
    UIViewController *pContents = [[UIViewController alloc] init];
    pContents.view.backgroundColor = [UIColor blackColor];
    self.p = [[UIPopoverController alloc] initWithContentViewController:pContents];
    self.pButton = infoIcon;
    
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
    if ([self.view window] == nil) {
        self.map = nil;
        self.view = nil;
    }
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

#pragma mark - UI changes
- (void)infoButtonPressed {
    [self.p presentPopoverFromBarButtonItem:self.pButton permittedArrowDirections:UIPopoverArrowDirectionUp animated:YES];
}

@end
