//
//  BuoyScreenViewController.m
//  FMSiOS
//
//  Created by Sean M on 3/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

// TODO: more info popup
// TODO: buoy distance from self

#import "BuoyScreen.h"

@interface BuoyScreen () <UIPopoverPresentationControllerDelegate, CLLocationManagerDelegate, MKMapViewDelegate>

// Core UI elements
@property (strong, nonatomic) MKMapView *map;
@property (strong, nonatomic) CLLocationManager *l;
@property (strong, nonatomic) UIBarButtonItem *pButton; //info popup
@property (strong, nonatomic) UIBarButtonItem *rButton; //refresh button
@property (strong, nonatomic) UIActivityIndicatorView *rInd;
@property (strong, nonatomic) UIBarButtonItem *rIndButton;
@property (strong, nonatomic) UIViewController *popup;

// Hidden elements
@property (strong, nonatomic) UIButton *moreInfoDialogContainer; //More info dialog is in the content view for this
@property (strong, nonatomic) UIView *moreInfoDialog;
@property (strong, nonatomic) UIView *moreInfoContent;
@property (strong, nonatomic) ShadowButton *moreInfoPingButton;
@property (strong, nonatomic) UIActivityIndicatorView *moreInfoPingInd;

// Data structures
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
    
    // Overall colours
    self.view.backgroundColor = [UIColor whiteColor];
    
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
    // Info gear button
    UIButton *infoView = [UIButton buttonWithType:UIButtonTypeSystem];
    infoView.frame = CGRectMake(0, 0, 40, 32);
    [infoView setTitle:@"\u2699" forState:UIControlStateNormal];
    infoView.titleLabel.font = [UIFont systemFontOfSize:33];
    [infoView setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [infoView addTarget:self action:@selector(infoButtonPressed) forControlEvents:UIControlEventTouchUpInside];
    UIBarButtonItem *infoIcon = [[UIBarButtonItem alloc] initWithCustomView:infoView];
    
    // Position icon
    UIBarButtonItem *posIcon = [[MKUserTrackingBarButtonItem alloc] initWithMapView:self.map];
    
    // Refresh icon
    UIBarButtonItem *refreshIcon = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemRefresh target:self action:@selector(refreshButtonPressed)];
    UIActivityIndicatorView *refreshInd = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhite];
    [refreshInd sizeToFit];
    [refreshInd startAnimating];
    refreshInd.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
    UIBarButtonItem *refreshIndIcon = [[UIBarButtonItem alloc] initWithCustomView:refreshInd];
    refreshIndIcon.width = refreshIcon.width;
    
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
    
    // More info dialog container
    self.moreInfoDialogContainer = [UIButton buttonWithType:UIButtonTypeCustom];
    self.moreInfoDialogContainer.backgroundColor = [UIColor colorWithWhite:0 alpha:0.3];
    self.moreInfoDialogContainer.frame = self.view.bounds;
    [self.moreInfoDialogContainer addTarget:self action:@selector(outsideMoreInfoPressed) forControlEvents:UIControlEventTouchUpInside];
    
    // More info dialog
    self.moreInfoDialog = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 310, 310)];
    self.moreInfoDialog.backgroundColor = [UIColor colorWithWhite:0.85 alpha:0.95];
    self.moreInfoDialog.layer.cornerRadius = 10;
    self.moreInfoDialog.center = self.moreInfoDialogContainer.center;
    
    // More info content section
    
    // More info ping button
    self.moreInfoPingButton = [ShadowButton buttonWithType:UIButtonTypeCustom];
    self.moreInfoPingButton.backgroundColor = FMS_COLOUR_BUTTON;
    self.moreInfoPingButton.normalColour = FMS_COLOUR_BUTTON;
    self.moreInfoPingButton.highlightColour = FMS_COLOUR_BUTTON_SEL;
    self.moreInfoPingButton.selectedColour = FMS_COLOUR_BUTTON;
    [self.moreInfoPingButton setTitle:@"Ping" forState:UIControlStateNormal];
    [self.moreInfoPingButton setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [self.moreInfoPingButton setTitle:@"" forState:UIControlStateDisabled];
    self.moreInfoPingButton.titleLabel.font = [UIFont systemFontOfSize:20];
    self.moreInfoPingButton.frame = CGRectMake(0, 0, 150, 50);
    self.moreInfoPingButton.center = CGPointMake(90, 265);
    [self.moreInfoDialog addSubview:self.moreInfoPingButton];
    
    // More info ping indicator
    self.moreInfoPingInd = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhite];
    self.moreInfoPingInd.hidesWhenStopped = YES;
    [self.moreInfoPingInd stopAnimating];
    self.moreInfoPingInd.frame = self.moreInfoPingButton.bounds;
    self.moreInfoPingInd.center = self.moreInfoPingButton.center;
    [self.moreInfoDialog addSubview:self.moreInfoPingInd];
    
    // Fin
    [self.view addSubview:self.map];
    [self.view addSubview:self.moreInfoDialogContainer];
    [self.moreInfoDialogContainer addSubview:self.moreInfoDialog];
    [self.moreInfoDialogContainer setHidden:YES];
}

- (void)viewWillLayoutSubviews {
    [super viewWillLayoutSubviews];
    self.map.frame = self.view.frame;
    self.moreInfoDialogContainer.frame = self.view.frame;
    self.moreInfoDialog.center = self.moreInfoDialogContainer.center;
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    [self.navigationController setNavigationBarHidden:NO animated:YES];
    self.d.dataDelegate = self;
    [self.moreInfoDialog setHidden:YES];
    
    self.title = [self.d userDisplayName];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    NSLog(@"%f", self.moreInfoDialog.center.x);
    NSLog(@"%f", self.moreInfoDialog.center.y);
    [self.moreInfoDialog setHidden:NO];
    NSLog(@"%@", self.moreInfoDialog.isHidden ? @"yes" : @"no");
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

#pragma mark - location updates and animations
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
        
        // Label containing lat/long
        UILabel *leftViewLabel = [[UILabel alloc] init];
        leftViewLabel.font = [UIFont systemFontOfSize:12];
        leftViewLabel.numberOfLines = 0;
        leftViewLabel.textAlignment = NSTextAlignmentRight;
        v.leftCalloutAccessoryView = leftViewLabel;
        
        // Buttons for more info and stuff
        UIButton *rightButton = [UIButton buttonWithType:UIButtonTypeDetailDisclosure];
        [rightButton addTarget:self action:@selector(moreInfoButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
        v.rightCalloutAccessoryView = rightButton;
    } else {
        // Reuse only properties
        v.annotation = annotation;
    }
    
    // General properties
    Buoy *b = (Buoy *)annotation;
    UILabel *leftViewLabel = (UILabel *)v.leftCalloutAccessoryView;
    leftViewLabel.text = [NSString stringWithFormat:@"%@\n%@", [DataModel stringForLatitude:b.coordinate.latitude], [DataModel stringForLongitude:b.coordinate.longitude]];
    [leftViewLabel sizeToFit];
    UIButton *rightButton = (UIButton *)v.rightCalloutAccessoryView;
    rightButton.tag = [self.allBuoys indexOfObject:b];
    
    // Marker colours
    if (b.group == nil || b.group.groupId == 0) { // Ungrouped
        v.edgeColour = [UIColor lightGrayColor];
    } else { // Grouped buoy
        NSUInteger shift = ((BuoyGroup *)[self.buoyGroups objectAtIndex:0]).groupId == 0 ? 1 : 0;
        double spacingForColour = 1.0/(self.buoyGroups.count - shift);
        NSUInteger colourIndex = [self.buoyGroups indexOfObject:b.group];
        v.edgeColour = [UIColor colorWithHue:(colourIndex * spacingForColour) saturation:0.9 brightness:0.9 alpha:1.0];
    }
    
    return v;
}

- (void)mapView:(MKMapView *)mapView didAddAnnotationViews:(NSArray<MKAnnotationView *> *)views {
    for (NSUInteger i = 0; i < views.count; i++) {
        MKAnnotationView *av = [views objectAtIndex:i];
        
        // Ignore user location
        if (![av.annotation isKindOfClass:[Buoy class]]) {
            continue;
        }
        
        // Ensure contained within visible map rect
        MKMapPoint p = MKMapPointForCoordinate(av.annotation.coordinate);
        if (!MKMapRectContainsPoint(self.map.visibleMapRect, p)) {
            continue;
        }
        
        // Otherwise, animate bounce
        av.transform = CGAffineTransformMakeScale(0, 0);
        [UIView animateWithDuration:0.3 delay:0.1*i options:UIViewAnimationOptionCurveLinear
                         animations:^{
                             av.transform = CGAffineTransformMakeScale(0.8, 1.2);
                         }
                         completion:^(BOOL finished){
                             [UIView animateWithDuration:0.05 animations:^{
                                 av.transform = CGAffineTransformIdentity;
                             }];
                         }
         ];
    }
}

- (void)mapView:(MKMapView *)mapView didSelectAnnotationView:(MKAnnotationView *)view {
    // Ignore user location
    if ([view.annotation isKindOfClass:[MKUserLocation class]]) {
        return;
    }
    
    // Select
    DiamondMarker *d = (DiamondMarker *)view;
    d.coreColour = [UIColor colorWithWhite:0.9 alpha:1.0];
}

- (void)mapView:(MKMapView *)mapView didDeselectAnnotationView:(MKAnnotationView *)view {
    // Ignore user location
    if ([view.annotation isKindOfClass:[MKUserLocation class]]) {
        return;
    }
    
    // Deselect
    DiamondMarker *d = (DiamondMarker *)view;
    d.coreColour = [UIColor whiteColor];
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

- (void)moreInfoButtonPressed:(UIControl *)c {
    // Deselect any annotations
    for (id<MKAnnotation> a in self.map.selectedAnnotations) {
        [self.map deselectAnnotation:a animated:YES];
    }
    
    // Get buoy to display
    UIButton *buttonPressed = (UIButton *)c;
    Buoy *b = [self.allBuoys objectAtIndex:buttonPressed.tag];
    
    // Update and popup more info dialog
    [self.moreInfoDialogContainer setHidden:NO];
}

- (void)outsideMoreInfoPressed {
    // Done
    [self.moreInfoDialogContainer setHidden:YES];
}

@end
