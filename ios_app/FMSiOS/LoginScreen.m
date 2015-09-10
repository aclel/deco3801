//
//  LoginScreen.m
//  Flood MS iOS
//
//  Created by Sean M on 3/09/2015.
//  Help given by veducm on Stack Overflow.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

// TODO: save login details

#import "LoginScreen.h"

@interface LoginScreen () <UITextFieldDelegate>

@property UIImageView *bg;
@property UIView *loginDialog;
@property UILabel *errorLabel;
@property UITextField *emailField;
@property UITextField *passField;
@property ShadowButton *loginButton;
@property UIActivityIndicatorView *loginInd;

@end

@implementation LoginScreen

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Title for next page back button
    self.title = @"Logout";

    // Load background
    self.bg = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Background" inBundle:nil compatibleWithTraitCollection:nil]];
    self.bg.contentMode = UIViewContentModeScaleAspectFill;
    self.bg.frame = CGRectMake(-30, -25, self.view.frame.size.width + 60, self.view.frame.size.height + 50);
    [self.view addSubview:self.bg];
    
    // Add cool parallax effect
    UIInterpolatingMotionEffect *vEffect = [[UIInterpolatingMotionEffect alloc] initWithKeyPath:@"center.y" type:UIInterpolatingMotionEffectTypeTiltAlongVerticalAxis];
    vEffect.minimumRelativeValue = @(-25);
    vEffect.maximumRelativeValue = @(25);
    UIInterpolatingMotionEffect *hEffect = [[UIInterpolatingMotionEffect alloc] initWithKeyPath:@"center.x" type:UIInterpolatingMotionEffectTypeTiltAlongHorizontalAxis];
    hEffect.minimumRelativeValue = @(-30);
    hEffect.maximumRelativeValue = @(30);
    [self.bg addMotionEffect:vEffect];
    [self.bg addMotionEffect:hEffect];
    
    // Load UI
    // Overall
    self.loginDialog = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 300, 300)];
    self.loginDialog.center = self.view.center;
    
    // Logo
    UILabel *topLabel = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 300, 50)];
    topLabel.textAlignment = NSTextAlignmentCenter;
    topLabel.font = [UIFont fontWithName:@"Avenir Next" size:50];
    topLabel.textColor = [UIColor whiteColor];
    topLabel.text = @"UQ FMS";
    topLabel.center = CGPointMake(150, 40);
    
    // Error message
    UILabel *errorLabel = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 300, 50)];
    errorLabel.textAlignment = NSTextAlignmentCenter;
    errorLabel.font = [UIFont systemFontOfSize:18];
    errorLabel.textColor = [UIColor colorWithRed:1 green:0.35 blue:0.35 alpha:1];;
    errorLabel.text = @"The error text for the current error message goes here";
    errorLabel.lineBreakMode = NSLineBreakByWordWrapping;
    errorLabel.numberOfLines = 1;
    errorLabel.center = CGPointMake(150, 100);
    [errorLabel setHidden:YES];
    
    // Text dialogs
    SpacedTextField *emailField = [[SpacedTextField alloc] initWithFrame:CGRectMake(0, 0, 280, 50)];
    emailField.edgeInsets = UIEdgeInsetsMake(0, 10, 0, 10);
    emailField.backgroundColor = [UIColor whiteColor];
    emailField.keyboardType = UIKeyboardTypeEmailAddress;
    emailField.returnKeyType = UIReturnKeyNext;
    emailField.placeholder = @"E-mail";
    emailField.center = CGPointMake(150, 150);
    emailField.delegate = self;
    SpacedTextField *passField = [[SpacedTextField alloc] initWithFrame:CGRectMake(0, 0, 280, 50)];
    passField.edgeInsets = UIEdgeInsetsMake(0, 10, 0, 10);
    passField.backgroundColor = [UIColor whiteColor];
    passField.keyboardType = UIKeyboardTypeASCIICapable;
    passField.returnKeyType = UIReturnKeyDone;
    passField.autocorrectionType = UITextAutocorrectionTypeNo;
    passField.secureTextEntry = YES;
    passField.placeholder = @"Password";
    passField.center = CGPointMake(150, 202);
    passField.delegate = self;
    
    // Handle tapping outside
    UITapGestureRecognizer *t = [[UITapGestureRecognizer alloc] initWithTarget:self.view action:@selector(endEditing:)];
    [self.view addGestureRecognizer:t];
    
    // Login button
    ShadowButton *loginButton = [ShadowButton buttonWithType:UIButtonTypeCustom];
    loginButton.backgroundColor = [UIColor purpleColor];
    loginButton.normalColour = [UIColor purpleColor];
    loginButton.highlightColour = [UIColor colorWithRed:115.0/255 green:30.0/255 blue:123.0/255 alpha:1.0];
    loginButton.selectedColour = [UIColor purpleColor];
    [loginButton setTitle:@"Login" forState:UIControlStateNormal];
    [loginButton setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [loginButton setTitle:@"" forState:UIControlStateDisabled];
    loginButton.titleLabel.font = [UIFont systemFontOfSize:20];
    loginButton.frame = CGRectMake(0, 0, 170, 45);
    loginButton.center = CGPointMake(150, 275);
    
    // Login button indicator
    self.loginInd = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhite];
    self.loginInd.hidesWhenStopped = YES;
    [self.loginInd stopAnimating];
    self.loginInd.frame = loginButton.bounds;
    self.loginInd.center = CGPointMake(150, 275);
    
    // Round corners
    UIBezierPath *topMaskPath = [UIBezierPath bezierPathWithRoundedRect:emailField.bounds byRoundingCorners:UIRectCornerTopLeft | UIRectCornerTopRight cornerRadii:CGSizeMake(10.0, 10.0)];
    CAShapeLayer *topMaskLayer = [CAShapeLayer layer];
    topMaskLayer.frame = emailField.bounds;
    topMaskLayer.path = topMaskPath.CGPath;
    emailField.layer.mask = topMaskLayer;
    UIBezierPath *bottomMaskPath = [UIBezierPath bezierPathWithRoundedRect:emailField.bounds byRoundingCorners:UIRectCornerBottomLeft | UIRectCornerBottomRight cornerRadii:CGSizeMake(10.0, 10.0)];
    CAShapeLayer *bottomMaskLayer = [CAShapeLayer layer];
    bottomMaskLayer.frame = passField.bounds;
    bottomMaskLayer.path = bottomMaskPath.CGPath;
    passField.layer.mask = bottomMaskLayer;
    loginButton.layer.cornerRadius = 20.0;
    loginButton.clipsToBounds = YES;
    loginButton.layer.masksToBounds = NO;
    
    // End UI
    [self.loginDialog addSubview:topLabel];
    [self.loginDialog addSubview:errorLabel];
    [self.loginDialog addSubview:emailField];
    [self.loginDialog addSubview:passField];
    [self.loginDialog addSubview:loginButton];
    [self.loginDialog addSubview:self.loginInd];
    [self.view addSubview:self.loginDialog];
    self.errorLabel = errorLabel;
    self.emailField = emailField;
    self.passField = passField;
    self.loginButton = loginButton;
    
    // Events
    [loginButton addTarget:self action:@selector(loginButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    self.d.delegate = self;
    [self.navigationController setNavigationBarHidden:YES animated:YES];
    
    // Fill dialogs with text
    self.emailField.text = @"e@mail.com";
    self.passField.text = @"pass";
}

- (void)viewWillLayoutSubviews {
    [super viewWillLayoutSubviews];
    
    self.bg.frame = CGRectMake(-30, -25, self.view.frame.size.width + 60, self.view.frame.size.height + 50);
    self.loginDialog.center = self.view.center;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
    if ([self.view window] == nil) {
        self.bg = nil;
        self.view = nil;
    }
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

#pragma mark - UI changes
- (void)clearError {
    [self.errorLabel setHidden:YES];
}

- (void)errorInvalid {
    self.errorLabel.text = @"Please enter a valid email/password";
    [self.errorLabel setHidden:NO];
}

- (void)errorIncorrect {
    self.errorLabel.text = @"Incorrect email/password";
    [self.errorLabel setHidden:NO];
}

- (void)errorServerNotFound {
    self.errorLabel.text = @"Could not connect to server";
    [self.errorLabel setHidden:NO];
}



- (void)disableLoginButton {
    self.loginButton.enabled = NO;
    [self.loginInd startAnimating];
}

- (void)enableLoginButton {
    [self.loginInd stopAnimating];
    self.loginButton.enabled = YES;
}

#pragma mark - text field selection
- (void)textFieldDidBeginEditing:(UITextField *)textField {
    textField.backgroundColor = [UIColor colorWithWhite:0.9 alpha:1.0];
}

- (void)textFieldDidEndEditing:(UITextField *)textField {
    textField.backgroundColor = [UIColor whiteColor];
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField {
    if (textField == self.emailField) {
        [self.passField becomeFirstResponder];
        return NO;
    } else {
        [textField resignFirstResponder];
        return YES;
    }
}

#pragma mark - button pressed
- (void)loginButtonPressed:(UIControl *)button {
    [self clearError];
    
    // Check for valid email/password
    if ([self.emailField.text isEqualToString:@""] || [self.passField.text isEqualToString:@""] || ![Interface NSStringIsValidEmail:self.emailField.text]) {
        [self errorInvalid];
        return;
    }
    
    // Prepare UI for server connection
    [self disableLoginButton];
    
    // Start connection process
    [self.d connectToServerWithEmail:self.emailField.text andPass:self.passField.text];
}

#pragma mark - navigation
- (void)openBuoyPage {
    // Create page to load
    self.b = [[BuoyScreen alloc] init];
    self.b.d = self.d;
    
    // Navigate to page
    [self.navigationController pushViewController:self.b animated:YES];
}

#pragma mark - server conn delegate
- (void)didConnectToServer {
    [self enableLoginButton];
    
    // Go to buoy page
    [self openBuoyPage];
}

- (void)didFailToConnectBadDetails {
    [self errorIncorrect];
    [self enableLoginButton];
}

- (void)didFailToConnectServerLoss {
    [self errorServerNotFound];
    [self enableLoginButton];
}



@end
