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

// Special text field used to pad text from edges
@interface SpacedTextField : UITextField

@property UIEdgeInsets edgeInsets;

@end

@implementation SpacedTextField

- (instancetype)initWithFrame:(CGRect)frame {
    self = [super initWithFrame:frame];
    if (self) {
        self.edgeInsets = UIEdgeInsetsZero;
    }
    return self;
}

- (instancetype)initWithCoder:(NSCoder *)aDecoder {
    self = [super initWithCoder:aDecoder];
    if (self) {
        self.edgeInsets = UIEdgeInsetsZero;
    }
    return self;
}

- (CGRect)textRectForBounds:(CGRect)bounds {
    return [super textRectForBounds:UIEdgeInsetsInsetRect(bounds, self.edgeInsets)];
}

- (CGRect)editingRectForBounds:(CGRect)bounds {
    return [super editingRectForBounds:UIEdgeInsetsInsetRect(bounds, self.edgeInsets)];
}

@end

@interface LoginScreen ()

@property UIImageView *bg;
@property UIView *loginDialog;

@end

@implementation LoginScreen

- (void)viewDidLoad {
    [super viewDidLoad];

    // Load background
    self.bg = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Background" inBundle:nil compatibleWithTraitCollection:nil]];
    self.bg.contentMode = UIViewContentModeScaleAspectFill;
    self.bg.frame = CGRectMake(-50, -25, self.view.frame.size.width + 100, self.view.frame.size.height + 50);
    [self.view addSubview:self.bg];
    
    // Add cool parallax effect
    UIInterpolatingMotionEffect *vEffect = [[UIInterpolatingMotionEffect alloc] initWithKeyPath:@"center.y" type:UIInterpolatingMotionEffectTypeTiltAlongVerticalAxis];
    vEffect.minimumRelativeValue = @(-25);
    vEffect.maximumRelativeValue = @(25);
    UIInterpolatingMotionEffect *hEffect = [[UIInterpolatingMotionEffect alloc] initWithKeyPath:@"center.x" type:UIInterpolatingMotionEffectTypeTiltAlongHorizontalAxis];
    hEffect.minimumRelativeValue = @(-50);
    hEffect.maximumRelativeValue = @(50);
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
    [self.loginDialog addSubview:topLabel];
    
    // Text dialogs
    SpacedTextField *emailField = [[SpacedTextField alloc] initWithFrame:CGRectMake(0, 0, 250, 50)];
    emailField.edgeInsets = UIEdgeInsetsMake(0, 10, 0, 10);
    emailField.backgroundColor = [UIColor whiteColor];
    emailField.keyboardType = UIKeyboardTypeEmailAddress;
    emailField.placeholder = @"E-mail";
    emailField.center = CGPointMake(150, 120);
    SpacedTextField *passField = [[SpacedTextField alloc] initWithFrame:CGRectMake(0, 0, 250, 50)];
    passField.edgeInsets = UIEdgeInsetsMake(0, 10, 0, 10);
    passField.backgroundColor = [UIColor whiteColor];
    passField.keyboardType = UIKeyboardTypeASCIICapable;
    passField.autocorrectionType = UITextAutocorrectionTypeNo;
    passField.secureTextEntry = YES;
    passField.placeholder = @"Password";
    passField.center = CGPointMake(150, 172);
    
    // Login button
    
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
    
    // End
    [self.loginDialog addSubview:emailField];
    [self.loginDialog addSubview:passField];
    [self.view addSubview:self.loginDialog];
}

- (void)viewWillLayoutSubviews {
    [super viewWillLayoutSubviews];
    
    self.bg.frame = CGRectMake(-50, -25, self.view.frame.size.width + 100, self.view.frame.size.height + 50);
    self.loginDialog.center = self.view.center;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}

@end
