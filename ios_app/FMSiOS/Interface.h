//
//  Interface.h
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface Interface : NSObject

+ (void)setupThemes;
+ (BOOL)NSStringIsValidEmail:(NSString *)s;

@end


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