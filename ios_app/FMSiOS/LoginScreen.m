//
//  LoginScreen.m
//  Flood MS iOS
//
//  Created by Sean M on 3/09/2015.
//  Help given by veducm on Stack Overflow.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import "LoginScreen.h"

@interface LoginScreen ()

@property UIImageView *bg;

@end

@implementation LoginScreen

- (void)viewDidLoad {
    [super viewDidLoad];

    // Load background
    self.bg = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Background" inBundle:nil compatibleWithTraitCollection:nil]];
    self.bg.contentMode = UIViewContentModeScaleAspectFill;
    self.bg.frame = CGRectMake(-25, -25, self.view.frame.size.width + 50, self.view.frame.size.height + 50);
    [self.view addSubview:self.bg];
    
    // Add cool parallax effect
    UIInterpolatingMotionEffect *vEffect = [[UIInterpolatingMotionEffect alloc] initWithKeyPath:@"center.y" type:UIInterpolatingMotionEffectTypeTiltAlongVerticalAxis];
    vEffect.minimumRelativeValue = @(-25);
    vEffect.maximumRelativeValue = @(25);
    UIInterpolatingMotionEffect *hEffect = [[UIInterpolatingMotionEffect alloc] initWithKeyPath:@"center.x" type:UIInterpolatingMotionEffectTypeTiltAlongHorizontalAxis];
    hEffect.minimumRelativeValue = @(-25);
    hEffect.maximumRelativeValue = @(25);
    [self.bg addMotionEffect:vEffect];
    [self.bg addMotionEffect:hEffect];
    
    // Load UI
}

- (void)viewWillLayoutSubviews {
    [super viewWillLayoutSubviews];
    
    self.bg.frame = CGRectMake(-25, -25, self.view.frame.size.width + 50, self.view.frame.size.height + 50);
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
