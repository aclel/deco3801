//
//  Interface.h
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <MapKit/MapKit.h>

// Default colours
#define FMS_COLOUR_BAR [UIColor colorWithRed:0.008 green:0.494 blue:0.573 alpha:1.0]
#define FMS_COLOUR_BUTTON [UIColor colorWithRed:0 green:0.332 blue:0.542 alpha:1.0]
#define FMS_COLOUR_BUTTON_SEL [UIColor colorWithRed:0 green:0.281 blue:0.461 alpha:1.0]

// Special text field used to pad text from edges
@interface SpacedTextField : UITextField

@property UIEdgeInsets edgeInsets;

@end

// Special custom UIButton which can act depressed, because that's cool
@interface ShadowButton : UIButton

@property UIColor *normalColour;
@property UIColor *highlightColour;
@property UIColor *selectedColour;

@end

// Map marker diamond
@interface DiamondMarker : MKAnnotationView

@property (strong, nonatomic) UIColor *coreColour;
@property (strong, nonatomic) UIColor *edgeColour;

@end
