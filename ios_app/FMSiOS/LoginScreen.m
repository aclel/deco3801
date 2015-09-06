//
//  LoginScreen.m
//  Flood MS iOS
//
//  Created by Sean M on 3/09/2015.
//  Help given by veducm on Stack Overflow.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

// TODO: UI buttons/login
// TODO: remove rotation on iphone mode

#import "LoginScreen.h"

@interface LoginScreen () <UITextFieldDelegate>

@property UIImageView *bg;
@property UIView *loginDialog;
@property UITextField *emailField;
@property UITextField *passField;

@end

@implementation LoginScreen

- (void)viewDidLoad {
    [super viewDidLoad];

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
    
    // Text dialogs
    SpacedTextField *emailField = [[SpacedTextField alloc] initWithFrame:CGRectMake(0, 0, 280, 50)];
    emailField.edgeInsets = UIEdgeInsetsMake(0, 10, 0, 10);
    emailField.backgroundColor = [UIColor whiteColor];
    emailField.keyboardType = UIKeyboardTypeEmailAddress;
    emailField.returnKeyType = UIReturnKeyNext;
    emailField.placeholder = @"E-mail";
    emailField.center = CGPointMake(150, 120);
    emailField.delegate = self;
    SpacedTextField *passField = [[SpacedTextField alloc] initWithFrame:CGRectMake(0, 0, 280, 50)];
    passField.edgeInsets = UIEdgeInsetsMake(0, 10, 0, 10);
    passField.backgroundColor = [UIColor whiteColor];
    passField.keyboardType = UIKeyboardTypeASCIICapable;
    passField.returnKeyType = UIReturnKeyDone;
    passField.autocorrectionType = UITextAutocorrectionTypeNo;
    passField.secureTextEntry = YES;
    passField.placeholder = @"Password";
    passField.center = CGPointMake(150, 172);
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
    loginButton.titleLabel.font = [UIFont systemFontOfSize:20];
    loginButton.frame = CGRectMake(0, 0, 170, 45);
    loginButton.center = CGPointMake(150, 250);
    
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
    
    // End
    [self.loginDialog addSubview:topLabel];
    [self.loginDialog addSubview:emailField];
    [self.loginDialog addSubview:passField];
    [self.loginDialog addSubview:loginButton];
    [self.view addSubview:self.loginDialog];
    self.emailField = emailField;
    self.passField = passField;
    
    // Events
    [loginButton addTarget:self action:@selector(loginButtonPressed:) forControlEvents:UIControlEventTouchUpInside];
}

- (void)viewWillLayoutSubviews {
    [super viewWillLayoutSubviews];
    
    self.bg.frame = CGRectMake(-30, -25, self.view.frame.size.width + 60, self.view.frame.size.height + 50);
    self.loginDialog.center = self.view.center;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
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
    // Check for valid email/password
    if ([self.emailField.text isEqualToString:@""] || [self.passField.text isEqualToString:@""] || ![Interface NSStringIsValidEmail:self.emailField.text]) {
        NSLog(@"Invalid email/pass specified; say so");
        return;
    }
    
    // Prepare UI for server connection
    //disable button, set to 'connecting...'
    //set activity indicator
    
    // Start connection process
    //data model connect with username/pass
}

@end
