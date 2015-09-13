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
@property (strong, nonatomic) UIBarButtonItem *pButton;
@property (strong, nonatomic) UIActivityIndicatorView *pInd;
@property (strong, nonatomic) UIBarButtonItem *pIndButton;
@property (strong, nonatomic) UIViewController *popup;

@property (strong, nonatomic) NSArray *buoys; // List of all buoys to display

- (void)mapTypeButtonPressed:(UIControl *)c;

@end

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
    self.pInd = refreshInd;
    self.pIndButton = refreshIndIcon;
    self.popup = pContents;
    
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

#pragma mark - UI changes
- (void)setRefreshIconLoading {
    NSMutableArray *a = [[NSMutableArray alloc] init];
    for (UIBarButtonItem *b in self.navigationItem.rightBarButtonItems.reverseObjectEnumerator) {
        if (b == self.pButton) {
            [a addObject:self.pIndButton];
        } else {
            [a addObject:b];
        }
    }
    
    self.navigationItem.rightBarButtonItems = a;
}

- (void)setRefreshIconRefresh {
    NSMutableArray *a = [[NSMutableArray alloc] init];
    for (UIBarButtonItem *b in self.navigationItem.rightBarButtonItems.reverseObjectEnumerator) {
        if (b == self.pIndButton) {
            [a addObject:self.pButton];
        } else {
            [a addObject:b];
        }
    }
    
    self.navigationItem.rightBarButtonItems = a;
}

#pragma mark - Orientation
- (NSUInteger)supportedInterfaceOrientations {
    return UIInterfaceOrientationMaskAllButUpsideDown;
}

#pragma mark - location updates
- (void)locationManager:(CLLocationManager *)manager didChangeAuthorizationStatus:(CLAuthorizationStatus)status {
    if (status == kCLAuthorizationStatusAuthorizedWhenInUse) {
        self.map.showsUserLocation = YES;
        self.map.userTrackingMode = MKUserTrackingModeFollow;
    }
}

- (void)mapViewDidFailLoadingMap:(MKMapView *)mapView withError:(NSError *)error {
    //TODO
    // Failed - popup network message
}

- (void)mapView:(MKMapView *)mapView didFailToLocateUserWithError:(NSError *)error {
    //TODO
    // Failed - do something about it?
}

- (MKAnnotationView *)mapView:(MKMapView *)mapView viewForAnnotation:(id<MKAnnotation>)annotation {
    if ([annotation isKindOfClass:[MKUserLocation class]]) {
        return nil;
    }

    MKPinAnnotationView *v = (MKPinAnnotationView *)[self.map dequeueReusableAnnotationViewWithIdentifier:@"BuoyIcon"];
    if (v == nil) {
        v = [[MKPinAnnotationView alloc] initWithAnnotation:annotation reuseIdentifier:@"BuoyIcon"];
        v.pinColor = MKPinAnnotationColorPurple;
        v.animatesDrop = YES;
        v.canShowCallout = YES;
    } else {
        v.annotation = annotation;
    }
    
    return v;
}

- (void)didGetBuoyListFromServer:(NSArray *)buoys {
    // Stop loading icon
    [self setRefreshIconRefresh];
    
    // Remove all current map annotations
    if (self.buoys != nil) {
        [self.map removeAnnotations:self.buoys];
    }
    
    for (Buoy *b in buoys) {
        NSLog(@"Buoy %f, %f", b.coordinate.latitude, b.coordinate.longitude);
    }
    
    // Add annotations for these buoys
    [self.map addAnnotations:buoys];
    self.buoys = buoys;
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
