//
//  BuoyScreenViewController.m
//  FMSiOS
//
//  Created by Sean M on 3/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

// TODO: pinging
// TODO: more info content
// TODO: buoy distance line

#import "BuoyScreen.h"

// View in the centre when clicking more info
@interface MoreInfoDialog : UIView

@property (strong, nonatomic) UILabel *content;
@property (strong, nonatomic) UIActivityIndicatorView *contentInd;
@property (strong, nonatomic) UIButton *pingButton;
@property (strong, nonatomic) UIActivityIndicatorView *pingInd;
@property (strong, nonatomic) UILabel *pingDetail;
@property (strong, nonatomic) UIButton *cancelButton;

- (void)displayBuoyInfo:(NSDictionary *)info;

- (void)startPinging;
- (void)finishPingingSuccessWithTime:(NSUInteger)milliseconds;
- (void)finishPingingFailure;

@end


@implementation MoreInfoDialog

- (instancetype)init {
    self = [super init];
    if (self) {
        self.frame = CGRectMake(0, 0, 310, 10);
        self.backgroundColor = [FMS_COLOUR_BG_SHADE colorWithAlphaComponent:0.95];
        self.layer.cornerRadius = 10;
        self.tintColor = FMS_COLOUR_TEXT_BUTTON;
        
        // Label
        _content = [[UILabel alloc] init];
        _content.numberOfLines = 0;
        _content.text = @" ";
        _content.font = [UIFont systemFontOfSize:17];
        [self addSubview:_content];
        
        // Indicator for missing content
        _contentInd = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhiteLarge];
        _contentInd.color = FMS_COLOUR_INDICATOR_DARK;
        _contentInd.hidesWhenStopped = YES;
        [_contentInd startAnimating];
        [self addSubview:_contentInd];
        
        // Ping button
        _pingButton = [UIButton buttonWithType:UIButtonTypeSystem];
        [_pingButton setTitle:@"Ping" forState:UIControlStateNormal];
        [_pingButton setTitle:@"" forState:UIControlStateDisabled];
        _pingButton.titleLabel.font = [UIFont systemFontOfSize:18];
        [self addSubview:_pingButton];
        
        // Ping indicator
        _pingInd = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhite];
        _pingInd.color = FMS_COLOUR_INDICATOR_DARK;
        _pingInd.hidesWhenStopped = YES;
        [_pingInd stopAnimating];
        [self addSubview:_pingInd];
        
        // Ping label
        _pingDetail = [[UILabel alloc] init];
        _pingDetail.font = [UIFont systemFontOfSize:17];
        [self addSubview:_pingDetail];
        [_pingDetail setHidden:YES];
        
        // Close button
        _cancelButton = [UIButton buttonWithType:UIButtonTypeSystem];
        [_cancelButton setTitle:@"Close" forState:UIControlStateNormal];
        _cancelButton.titleLabel.font = [UIFont systemFontOfSize:18];
        [self addSubview:_cancelButton];
        
        // End
        [_pingButton sizeToFit];
        [_cancelButton sizeToFit];
        [self layoutSubviews];
        float trueHeight = _content.frame.size.height + 50;
        self.frame = CGRectMake(self.frame.origin.x, self.center.y - trueHeight/2, self.frame.size.width, trueHeight);
    }
    return self;
}

- (void)layoutSubviews {
    [super layoutSubviews];
    // Ping/cancel buttons
    _pingButton.frame = CGRectMake(15, 5, _pingButton.frame.size.width, _pingButton.frame.size.height);
    _pingDetail.frame = CGRectMake(30 + _pingButton.frame.size.width, 5, 200, _pingButton.frame.size.height);
    _pingInd.center = _pingButton.center;
    _cancelButton.frame = CGRectMake(self.frame.size.width - _cancelButton.frame.size.width - 15, 5, _cancelButton.frame.size.width, _cancelButton.frame.size.height);
    
    //Content
    [_content sizeToFit];
    float newHeight = (_content.frame.size.height < 70) ? 70 : _content.frame.size.height;
    _content.frame = CGRectMake(10, 40, self.frame.size.width - 20, newHeight);
    _contentInd.center = _content.center;
}

- (void)startPinging {
    [self.pingDetail setHidden:YES];
    [self.pingButton setEnabled:NO];
    [self.pingInd startAnimating];
}

- (void)finishPingingFailure {
    [self.pingInd stopAnimating];
    self.pingDetail.textColor = FMS_COLOUR_TEXT_ERROR;
    self.pingDetail.text = [NSString stringWithFormat:@"\u274C no response"];
    [self.pingDetail setHidden:NO];
    [self.pingButton setEnabled:YES];
}

- (void)finishPingingSuccessWithTime:(NSUInteger)milliseconds {
    [self.pingInd stopAnimating];
    self.pingDetail.textColor = FMS_COLOUR_TEXT_SUCCESS;
    self.pingDetail.text = [NSString stringWithFormat:@"%dms \u2713", milliseconds];
    [self.pingDetail setHidden:NO];
    [self.pingButton setEnabled:YES];
}

- (void)displayBuoyInfo:(NSDictionary *)info {
    // Pull out info in dictionary
    NSMutableString *infoString = [[NSMutableString alloc] init];
    for (NSString *key in info.allKeys) {
        // Pad for spacing
        NSString *formatKey = [NSString stringWithFormat:@"%@:", key];
        [infoString appendFormat:@"%@\t\t%@\n", formatKey,  [info objectForKey:key]];
    }
    
    // Display
    self.content.text = infoString;
    [self.contentInd stopAnimating];
    [self.content setHidden:NO];
    [self layoutSubviews];
    
    // Update size
    float trueHeight = _content.frame.size.height + 50;
    CGRect trueSize = CGRectMake(self.frame.origin.x, self.center.y - trueHeight/2, self.frame.size.width, trueHeight);
    if (!CGRectEqualToRect(self.frame, trueSize)) {
        [UIView animateWithDuration:0.4 animations:^{
            self.frame = trueSize;
        }];
    }
}

@end

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
@property (strong, nonatomic) MoreInfoDialog *moreInfoDialog;

// Data structures
@property (strong, nonatomic) NSArray *allBuoys; // List of all buoys to display
@property (strong, nonatomic) NSArray *buoyGroups; // List of buoy groups, containing the above
@property (strong, nonatomic) NSMutableIndexSet *buoyGroupsToShow; // Buoys not to show, or show all if this is set to nil

- (void)mapTypeButtonPressed:(UIControl *)c;
- (void)updateMapToMatchSelection;

@end

// Popup controller used for the info button options settings
@interface BuoySettingsPopup : UIViewController <UITableViewDataSource, UITableViewDelegate>

@property (strong, nonatomic) UITableView *t;
@property (weak, nonatomic) BuoyScreen *delegate;

- (void)forceUpdate;

@end

@implementation BuoySettingsPopup {
    NSUInteger maxFilterRows;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    maxFilterRows = [[UIApplication sharedApplication] keyWindow].frame.size.width/44 - 4;
    self.preferredContentSize = CGSizeMake(300, 140);
    
    self.t = [[UITableView alloc] initWithFrame:self.view.frame style:UITableViewStyleGrouped];
    self.t.delegate = self;
    self.t.dataSource = self;
    self.t.tintColor = FMS_COLOUR_BUTTON_DARK;
    self.t.backgroundColor = FMS_COLOUR_BG_LIGHT_SHADE;
    self.t.scrollEnabled = YES;
    
    [self.view addSubview:self.t];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.t reloadData];
    if ([self.t numberOfRowsInSection:1] > maxFilterRows) {
        self.preferredContentSize = CGSizeMake(300, 140 + 44 * maxFilterRows);
    } else {
        self.preferredContentSize = CGSizeMake(300, 140 + 44 * [self.t numberOfRowsInSection:1]);
    }
    
}

- (void)viewWillLayoutSubviews {
    [super viewWillLayoutSubviews];
    self.t.frame = self.view.frame;
}

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 2;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    if (section == 0 || self.delegate.buoyGroups.count == 0) {
        return 1;
    }
    
    return self.delegate.buoyGroups.count;
}

- (CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section {
    return 30;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
    return (section == 0) ? @"Settings" : @"Filters";
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    // Get new empty reusable table cell
    UITableViewCell *c;
    
    if (indexPath.section == 0) {// Settings
        c = [self.t dequeueReusableCellWithIdentifier:@"SelectCell"];
        if (c == nil) {
            c = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"SelectCell"];
            c.backgroundColor = FMS_COLOUR_BG_LIGHT;
            
            UISegmentedControl *typeChooser = [[UISegmentedControl alloc] initWithItems:[NSArray arrayWithObjects:@"Map", @"Satellite", nil]];
            typeChooser.frame = CGRectMake(c.frame.size.width/2 - 10, 5, c.frame.size.width/2 - 20, c.frame.size.height - 10);
            typeChooser.selectedSegmentIndex = 0;
            [typeChooser addTarget:self.delegate action:@selector(mapTypeButtonPressed:) forControlEvents:UIControlEventValueChanged];
            [c addSubview:typeChooser];
        }
        c.textLabel.text = @"Map type:";
        c.selectionStyle = UITableViewCellSelectionStyleNone;
    } else if (indexPath.section == 1) { // Filters
        c = [self.t dequeueReusableCellWithIdentifier:@"BlankCell"];
        if (c == nil) {
            c = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"BlankCell"];
            c.backgroundColor = FMS_COLOUR_BG_LIGHT;
            
            UIView *colourator = [[UIView alloc] initWithFrame:CGRectMake(10, 10, 20, 20)];
            colourator.backgroundColor = [UIColor lightGrayColor];
            colourator.layer.cornerRadius = 4;
            colourator.tag = 1;
            [c addSubview:colourator];
            colourator.hidden = YES;
        }
        
        if (self.delegate.buoyGroups.count == 0) { // No buoys loaded to filter
            c.selectionStyle = UITableViewCellSelectionStyleNone;
            c.textLabel.text = @"No buoys currently loaded.";
        } else { // Show buoy at this index
            BuoyGroup *g = [self.delegate.buoyGroups objectAtIndex:indexPath.row];
            c.textLabel.text = (g.groupId == 0) ? @"Unassigned" : g.title;
            c.selectionStyle = UITableViewCellSelectionStyleDefault;
            
            // Select if part of selected or none selected
            if ([self.delegate.buoyGroupsToShow containsIndex:indexPath.row]) {
                c.accessoryType = UITableViewCellAccessoryCheckmark;
            } else {
                c.accessoryType = UITableViewCellAccessoryNone;
            }
            
            // Add colour view to match for ungrouped buoys
            if (g.groupId != 0) { // Ungrouped
                UIView *colourator = [c viewWithTag:1];
                colourator.hidden = NO;
                NSUInteger shift = ((BuoyGroup *)[self.delegate.buoyGroups objectAtIndex:0]).groupId == 0 ? 1 : 0;
                colourator.backgroundColor = [MiscInterface colourForIndex:(indexPath.row - shift) outOfTotal:(self.delegate.buoyGroups.count - shift)];
            }
            // Spacing fix for titles
            c.textLabel.text = [NSString stringWithFormat:@"     %@", c.textLabel.text];
        }
    }

    return c;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    if (indexPath.section == 0 || self.delegate.buoyGroups.count == 0) {
        return; //Ignore if nothing happens on selection
    }
    
    // Otherwise, select
    if ([self.delegate.buoyGroupsToShow containsIndex:indexPath.row]) {
        [self.delegate.buoyGroupsToShow removeIndex:indexPath.row];
    } else {
        [self.delegate.buoyGroupsToShow addIndex:indexPath.row];
    }
    
    // Refresh
    [self.t reloadData];
    [self.delegate updateMapToMatchSelection];
}

- (void)forceUpdate {
    // Forces an update right at this moment for this popup view's info
    [self.t reloadData];
    if ([self.t numberOfRowsInSection:1] > maxFilterRows) {
        self.preferredContentSize = CGSizeMake(300, 140 + 44 * maxFilterRows);
    } else {
        self.preferredContentSize = CGSizeMake(300, 140 + 44 * [self.t numberOfRowsInSection:1]);
    }
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
    
    // Data models
    self.allBuoys = [NSArray array];
    self.buoyGroups = [NSArray array];
    self.buoyGroupsToShow = [NSMutableIndexSet indexSet];
    
    // Overall colour
    self.view.backgroundColor = [UIColor whiteColor];
    self.view.tintColor = FMS_COLOUR_BUTTON_DARK;
    
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
    infoView.frame = CGRectMake(0, 0, 30, 30);
    [infoView setTitle:@"\u2699" forState:UIControlStateNormal];
    infoView.titleLabel.font = [UIFont systemFontOfSize:26];
    infoView.contentHorizontalAlignment = UIControlContentHorizontalAlignmentRight;
    [infoView setTitleColor:FMS_COLOUR_TEXT_LIGHT forState:UIControlStateNormal];
    [infoView addTarget:self action:@selector(infoButtonPressed) forControlEvents:UIControlEventTouchUpInside];
    UIBarButtonItem *infoIcon = [[UIBarButtonItem alloc] initWithCustomView:infoView];
    infoIcon.width = 30;
    
    // Position icon
    UIBarButtonItem *posIcon = [[MKUserTrackingBarButtonItem alloc] initWithMapView:self.map];
    
    // Refresh icon
    UIBarButtonItem *refreshIcon = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemRefresh target:self action:@selector(refreshButtonPressed)];
    UIActivityIndicatorView *refreshInd = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhite];
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
    
    // More info dialog container
    self.moreInfoDialogContainer = [UIButton buttonWithType:UIButtonTypeCustom];
    self.moreInfoDialogContainer.backgroundColor = [UIColor colorWithWhite:0 alpha:0.3];
    self.moreInfoDialogContainer.frame = self.view.bounds;
    [self.moreInfoDialogContainer addTarget:self action:@selector(closeMoreInfoPressed) forControlEvents:UIControlEventTouchUpInside];
    
    // Fin
    [self.view addSubview:self.map];
    [self.view addSubview:self.moreInfoDialogContainer];
    [self.moreInfoDialogContainer setHidden:YES];
}

- (void)viewWillLayoutSubviews {
    [super viewWillLayoutSubviews];
    self.map.frame = self.view.frame;
    self.moreInfoDialogContainer.frame = self.view.frame;
    if (self.moreInfoDialog != nil) {
        self.moreInfoDialog.center = self.moreInfoDialogContainer.center;
        [self.moreInfoDialog layoutSubviews];
    }
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    [self.navigationController setNavigationBarHidden:NO animated:YES];
    self.d.dataDelegate = self;
    
    self.title = [self.d userDisplayName];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
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
        leftViewLabel.numberOfLines = 2;
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
    leftViewLabel.text = [NSString stringWithFormat:@"%@\n%@", [DataModel stringForLatitude:b.trueCoord.latitude], [DataModel stringForLongitude:b.trueCoord.longitude]];
    [leftViewLabel sizeToFit];
    v.leftCalloutAccessoryView = leftViewLabel;
    UIButton *rightButton = (UIButton *)v.rightCalloutAccessoryView;
    rightButton.tag = [self.allBuoys indexOfObject:b];
    
    // Marker colours
    if (b.group == nil || b.group.groupId == 0) { // Ungrouped
        v.edgeColour = [UIColor lightGrayColor];
    } else { // Grouped buoy
        NSUInteger shift = ((BuoyGroup *)[self.buoyGroups objectAtIndex:0]).groupId == 0 ? 1 : 0;
        v.edgeColour = [MiscInterface colourForIndex:([self.buoyGroups indexOfObject:b.group] - shift) outOfTotal:(self.buoyGroups.count - shift)];
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

- (void)updateMapToMatchSelection {
    // Remove any annotations not selected, or add those which are
    for (NSUInteger i = 0; i < self.buoyGroups.count; i++) {
        BuoyGroup *g = [self.buoyGroups objectAtIndex:i];
        if (self.buoyGroupsToShow.count == 0 || [self.buoyGroupsToShow containsIndex:i]) {
            for (Buoy *b in g.buoys) {
                if (b.validCoordinate && ![self.map.annotations containsObject:b]) {
                    [self.map addAnnotation:b];
                }
            }
        } else {
            for (Buoy *b in g.buoys) {
                if ([self.map.annotations containsObject:b]) {
                    [self.map removeAnnotation:b];
                }
            }
        }
    }
}

#pragma mark - server comms

- (void)didGetBuoyListFromServer:(NSArray *)buoyGroups {
    // Stop loading icon
    [self setRefreshIconRefresh];
    
    // Remove previous annotations
    [self.map removeAnnotations:self.allBuoys];
    
    // Get buoy information from list of buoys/groups
    NSMutableArray *allBuoys = [[NSMutableArray alloc] init];
    for (BuoyGroup *g in buoyGroups) {
        for (Buoy *b in g.buoys) {
            // Get buoys with valid coordinates
            if (b.validCoordinate) {
                [allBuoys addObject:b];
            } else {
                NSLog(@"Buoy %@ with id %d has invalid coord - skipping", b, b.buoyId);
            }
        }
        
        // Get all buoys
        [allBuoys addObjectsFromArray:g.buoys];
    }
    
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
    self.buoyGroupsToShow = [NSMutableIndexSet indexSet];
    [(BuoySettingsPopup *)self.popup forceUpdate];
    
    // Reload map
    [self.map addAnnotations:self.allBuoys];
}

- (void)didGetBuoyInfoFromServer:(NSDictionary *)buoyInfo {
    // Update more info dialog to contain info
    if (self.moreInfoDialog) {
        [self.moreInfoDialog displayBuoyInfo:buoyInfo];
    }
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
    
    // Create more info dialog
    self.moreInfoDialog = [[MoreInfoDialog alloc] init];
    self.moreInfoDialog.center = self.moreInfoDialogContainer.center;
    [self.moreInfoDialog.pingButton addTarget:self action:@selector(pingMoreInfoPressed) forControlEvents:UIControlEventTouchUpInside];
    [self.moreInfoDialog.cancelButton addTarget:self action:@selector(closeMoreInfoPressed) forControlEvents:UIControlEventTouchUpInside];
    [self.moreInfoDialogContainer addSubview:self.moreInfoDialog];
    
    // Start settings for animation
    self.moreInfoDialogContainer.alpha = 0;
    self.moreInfoDialog.transform = CGAffineTransformMakeScale(0, 0);
    [self.moreInfoDialogContainer setHidden:NO];
    
    // Animate popup
    [UIView animateWithDuration:0.5 animations:^{
        self.moreInfoDialogContainer.alpha = 1;
        self.moreInfoDialog.transform = CGAffineTransformIdentity;
    } completion:^(BOOL finished){
        if (finished) {
            [self.moreInfoDialogContainer setEnabled:YES];
        }
    }];
    
    // Start request for info
    [self.d requestBuoyInfo:b];
}

- (void)closeMoreInfoPressed {
    [self.moreInfoDialogContainer setEnabled:NO];
    
    // Animate close
    self.moreInfoDialog.transform = CGAffineTransformIdentity;
    [UIView animateWithDuration:0.5 animations:^{
        self.moreInfoDialog.transform = CGAffineTransformMakeScale(0.001, 0.001);
        self.moreInfoDialogContainer.alpha = 0;
    } completion:^(BOOL finished){
        if (finished) {
            [self.moreInfoDialogContainer setHidden:YES];
            self.moreInfoDialog = nil;
        }
    }];
}

- (void)pingMoreInfoPressed {
    // Update interface to start ping look
    [self.moreInfoDialog startPinging];
    
    //for now just do dummy
    [NSTimer scheduledTimerWithTimeInterval:2.0 target:self selector:@selector(dummypingdone) userInfo:nil repeats:NO];
}

- (void)dummypingdone {
    NSInteger success = arc4random() % 2;
    if (success == 1) {
        [self.moreInfoDialog finishPingingSuccessWithTime:23];
    } else {
        [self.moreInfoDialog finishPingingFailure];
    }
}

@end
