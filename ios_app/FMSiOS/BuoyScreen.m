//
//  BuoyScreenViewController.m
//  FMSiOS
//
//  Created by Sean M on 3/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

// TODO: good buoy icon
// TODO: show name/email at top
// TODO: buoy groupings
// TODO: buoy distance from self


#import "BuoyScreen.h"

@interface BuoyScreen () <UIPopoverPresentationControllerDelegate, CLLocationManagerDelegate, MKMapViewDelegate>

@property (strong, nonatomic) MKMapView *map;
@property (strong, nonatomic) CLLocationManager *l;
@property (strong, nonatomic) UIBarButtonItem *pButton; //info popup
@property (strong, nonatomic) UIBarButtonItem *rButton; //refresh button
@property (strong, nonatomic) UIActivityIndicatorView *rInd;
@property (strong, nonatomic) UIBarButtonItem *rIndButton;
@property (strong, nonatomic) UIViewController *popup;

@property (strong, nonatomic) NSArray *allBuoys; // List of all buoys to display
@property (strong, nonatomic) NSArray *buoyGroups; // List of buoy groups, containing the above

- (void)mapTypeButtonPressed:(UIControl *)c;

@end


// Popup controller used for the info button options settings
@interface BuoySettingsPopup : UIViewController <UITableViewDataSource, UITableViewDelegate>

@property (strong, nonatomic) UITableView *t;
@property (weak, nonatomic) BuoyScreen *delegate;

@end

@implementation BuoySettingsPopup

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.preferredContentSize = CGSizeMake(320, 80);
    
    self.t = [[UITableView alloc] initWithFrame:self.view.frame style:UITableViewStyleGrouped];
    self.t.delegate = self;
    self.t.dataSource = self;
    self.t.allowsSelection = NO;
    self.t.tintColor = [UIColor blackColor];
    
    [self.view addSubview:self.t];
}

- (void)viewDidLayoutSubviews {
    self.t.frame = self.view.frame;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return 1;
}

- (CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section {
    return 30;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
    return @"Settings";
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    UITableViewCell *c = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"Cell"];
    c.textLabel.text = @"Map type:";
    
    UISegmentedControl *typeChooser = [[UISegmentedControl alloc] initWithItems:[NSArray arrayWithObjects:@"Map", @"Satellite", nil]];
    typeChooser.frame = CGRectMake(c.frame.size.width/2, 5, c.frame.size.width/2 - 10, c.frame.size.height - 10);
    typeChooser.selectedSegmentIndex = 0;
    [typeChooser addTarget:self.delegate action:@selector(mapTypeButtonPressed:) forControlEvents:UIControlEventValueChanged];
    [c addSubview:typeChooser];
    
    return c;
}

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
    self.map.showsPointsOfInterest = NO;
    self.map.showsBuildings = NO;
    self.map.zoomEnabled = YES;
    self.map.scrollEnabled = YES;
    self.map.pitchEnabled = NO;
    self.map.rotateEnabled = NO;
    self.map.delegate = self;
    
    // Navigation bar settings
    UIBarButtonItem *posIcon = [[MKUserTrackingBarButtonItem alloc] initWithMapView:self.map];
    UIButton *tempInfoB = [UIButton buttonWithType:UIButtonTypeInfoLight];
    UIBarButtonItem *infoIcon = [[UIBarButtonItem alloc] initWithImage:tempInfoB.currentImage style:UIBarButtonItemStylePlain target:self action:@selector(infoButtonPressed)];
    UIBarButtonItem *refreshIcon = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemRefresh target:self action:@selector(refreshButtonPressed)];
    UIActivityIndicatorView *refreshInd = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleGray];
    [refreshInd sizeToFit];
    [refreshInd startAnimating];
    refreshInd.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
    UIBarButtonItem *refreshIndIcon = [[UIBarButtonItem alloc] initWithCustomView:refreshInd];
    
    self.navigationItem.rightBarButtonItems = [NSArray arrayWithObjects:infoIcon, posIcon, refreshIcon, nil];
    
    // Popover for options
    BuoySettingsPopup *pContents = [[BuoySettingsPopup alloc] init];
    pContents.delegate = self;
    self.pButton = infoIcon;
    self.popup = pContents;
    
    // Refresh settings
    self.rButton = refreshIcon;
    self.rInd = refreshInd;
    self.rIndButton = refreshIndIcon;
    
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
    
    self.title = [self.d userDisplayName];
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
    
    // Disconnect from server after leaving this screen
    [self.d disconnect];
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

#pragma mark - UI changes
- (void)setRefreshIconLoading {
    NSMutableArray *a = [[NSMutableArray alloc] init];
    for (UIBarButtonItem *b in self.navigationItem.rightBarButtonItems) {
        if (b == self.rButton) {
            [a addObject:self.rIndButton];
        } else {
            [a addObject:b];
        }
    }
    
    self.navigationItem.rightBarButtonItems = a;
}

- (void)setRefreshIconRefresh {
    NSMutableArray *a = [[NSMutableArray alloc] init];
    for (UIBarButtonItem *b in self.navigationItem.rightBarButtonItems) {
        if (b == self.rIndButton) {
            [a addObject:self.rButton];
        } else {
            [a addObject:b];
        }
    }
    
    self.navigationItem.rightBarButtonItems = a;
}

#pragma mark - location updates
- (void)locationManager:(CLLocationManager *)manager didChangeAuthorizationStatus:(CLAuthorizationStatus)status {
    if (status == kCLAuthorizationStatusAuthorizedWhenInUse) {
        self.map.showsUserLocation = YES;
        self.map.userTrackingMode = MKUserTrackingModeFollow;
    }
}

- (void)mapViewDidFailLoadingMap:(MKMapView *)mapView withError:(NSError *)error {
    NSLog(@"Map loading error: %@", error);
    
    // Create alert box informing user
    UIAlertController *a = [UIAlertController alertControllerWithTitle:@"Couldn't load map" message:@"Loading map data requires an active internet connection." preferredStyle:UIAlertControllerStyleAlert];
    
    // Add buttons for logging out and cancelling (cancelling should just repeat until it's fixed or they logout)
    [a addAction:[UIAlertAction actionWithTitle:@"Logout" style:UIAlertActionStyleDefault handler:^(UIAlertAction *a) {
        [self.navigationController popViewControllerAnimated:YES];
    }]];
    [a addAction:[UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleCancel handler:nil]];
    
    [self presentViewController:a animated:YES completion:nil];
}

- (void)mapView:(MKMapView *)mapView didFailToLocateUserWithError:(NSError *)error {
    NSLog(@"Locating user error: %@", error);
    
    // Create alert box informing user
    UIAlertController *a;
    if ([CLLocationManager locationServicesEnabled]) { // Depends on type of error
        if (error.code == 0) {
            return; //Don't give a fuck about those damn error 0 messages.
        }
        a = [UIAlertController alertControllerWithTitle:@"Locate failed" message:error.localizedDescription preferredStyle:UIAlertControllerStyleAlert];
        
        // Logout button
        [a addAction:[UIAlertAction actionWithTitle:@"Logout" style:UIAlertActionStyleDefault handler:^(UIAlertAction *a) {
            [self.navigationController popViewControllerAnimated:YES];
        }]];
    } else {
        a = [UIAlertController alertControllerWithTitle:@"Locate failed" message:@"Location services must be enabled in order to locate your position." preferredStyle:UIAlertControllerStyleAlert];
        
        // Settings button
        [a addAction:[UIAlertAction actionWithTitle:@"Settings" style:UIAlertActionStyleDefault handler:^(UIAlertAction *a) {
            [[UIApplication sharedApplication] openURL:[NSURL URLWithString:UIApplicationOpenSettingsURLString]];
        }]];
    }
    
    // Cancel button
    [a addAction:[UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleCancel handler:nil]];
    
    [self presentViewController:a animated:YES completion:nil];
}

- (MKAnnotationView *)mapView:(MKMapView *)mapView viewForAnnotation:(id<MKAnnotation>)annotation {
    if ([annotation isKindOfClass:[MKUserLocation class]]) {
        return nil;
    }
    
    DiamondMarker *v = (DiamondMarker *)[self.map dequeueReusableAnnotationViewWithIdentifier:@"BuoyIcon"];
    if (v == nil) {
        // Initial only properties
        v = [[DiamondMarker alloc] initWithAnnotation:annotation reuseIdentifier:@"BuoyIcon"];
        v.canShowCallout = YES;
    } else {
        // Reuse only properties
        v.annotation = annotation;
    }
    
    // General properties
    Buoy *b = (Buoy *)annotation;
    
    // Marker colours
    if (b.group == nil) { // Ungrouped buoy
        [v changeEdgeColour:[UIColor grayColor]];
    } else { // Grouped buoy
        NSUInteger colourIndex = [self.buoyGroups indexOfObject:b.group];
        double spacingForColour = 1.0/self.buoyGroups.count;
        
        NSLog(@"%@", self.buoyGroups);
        NSLog(@"colour index %u, spacing %f hue %f", colourIndex, spacingForColour, colourIndex * spacingForColour);
        [v changeEdgeColour:[UIColor colorWithHue:(colourIndex * spacingForColour) saturation:0.9 brightness:0.9 alpha:1.0]];
    }
    
    return v;
}

#pragma mark - server comms

- (void)didGetBuoyListFromServer:(NSArray *)buoyGroups {
    // Stop loading icon
    [self setRefreshIconRefresh];
    
    // Remove all current map annotations
    if (self.allBuoys != nil) {
        [self.map removeAnnotations:self.allBuoys];
    }
    
    // Get buoy information from list of buoys/groups
    NSMutableArray *allBuoys = [[NSMutableArray alloc] init];
    for (BuoyGroup *g in buoyGroups) {
        // Get all buoys
        [allBuoys addObjectsFromArray:g.buoys];
    }
    
    // Add annotations for these buoys
    [self.map addAnnotations:allBuoys];
    
    // Update globals
    self.allBuoys = allBuoys;
    self.buoyGroups = [buoyGroups sortedArrayUsingComparator:^NSComparisonResult(id a, id b) {
        BuoyGroup *a2 = (BuoyGroup *)a;
        BuoyGroup *b2 = (BuoyGroup *)b;
        if (a2.groupId < b2.groupId) {
            return NSOrderedAscending;
        } else if (a2.groupId > b2.groupId) {
            return NSOrderedDescending;
        } else {
            return NSOrderedSame;
        }
    }];
}

- (void)didFailServerComms {
    [self setRefreshIconRefresh];
    
    // Create alert box informing user
    UIAlertController *a = [UIAlertController alertControllerWithTitle:@"Couldn't load buoy locations" message:@"Could not establish connection with server" preferredStyle:UIAlertControllerStyleAlert];
    
    // Add buttons for logging out or cancelling
    [a addAction:[UIAlertAction actionWithTitle:@"Logout" style:UIAlertActionStyleDefault handler:^(UIAlertAction *a) {
        [self.navigationController popViewControllerAnimated:YES];
    }]];
    [a addAction:[UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleCancel handler:nil]];
    
    [self presentViewController:a animated:YES completion:nil];
}

#pragma mark - UI events
- (UIModalPresentationStyle)adaptivePresentationStyleForPresentationController:(UIPresentationController *)controller {
    return UIModalPresentationNone;
}

- (void)infoButtonPressed {
    self.popup.modalPresentationStyle = UIModalPresentationPopover;
    self.popup.popoverPresentationController.delegate = self;
    self.popup.popoverPresentationController.barButtonItem = self.pButton;
    self.popup.popoverPresentationController.sourceView = self.popup.view;
    [self presentViewController:self.popup animated:YES completion:nil];
}

- (void)refreshButtonPressed {
    [self setRefreshIconLoading];
    [self.d updateBuoyListingFromServer];
}

- (void)mapTypeButtonPressed:(UIControl *)c {
    UISegmentedControl *typeChooser = (UISegmentedControl *)c;
    
    if (typeChooser.selectedSegmentIndex == 0) {
        self.map.mapType = MKMapTypeStandard;
    } else if (typeChooser.selectedSegmentIndex == 1) {
        self.map.mapType = MKMapTypeSatellite;
    }
}

@end
