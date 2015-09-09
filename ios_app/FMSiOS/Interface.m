//
//  Interface.m
//  FMSiOS
//
//  Created by Sean M on 4/09/2015.
//  Copyright (c) 2015 Team Neptune. All rights reserved.
//

#import "Interface.h"

@implementation Interface

+ (void)setupThemes {
    // Set up all UIAppearance theme information here
    [[UIActivityIndicatorView appearance] setTintColor:[UIColor whiteColor]];
}

+ (BOOL)NSStringIsValidEmail:(NSString *)s {
    NSString *regex = @"^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$";
    NSPredicate *test = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", regex];
    return [test evaluateWithObject:s];
}

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



@implementation ShadowButton

- (instancetype)initWithFrame:(CGRect)frame {
    self = [super initWithFrame:frame];
    if (self) {
        self.layer.shadowColor = [UIColor blackColor].CGColor;
        self.layer.shadowOpacity = 0.5;
        self.layer.shadowRadius = 5;
        self.layer.shadowOffset = CGSizeMake(2.0f, 2.0f);
    }
    return self;
}

- (id)initWithCoder:(NSCoder *)aDecoder {
    self = [super initWithCoder:aDecoder];
    if (self) {
        self.layer.shadowColor = [UIColor blackColor].CGColor;
        self.layer.shadowOpacity = 0.8;
        self.layer.shadowRadius = 2;
    }
    return self;
}

- (void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event {
    self.contentEdgeInsets = UIEdgeInsetsMake(1.0, 1.0, -1.0, -1.0);
    self.layer.shadowRadius = 5;
    self.layer.shadowOpacity = 1.0;
    
    [super touchesBegan:touches withEvent:event];
}

- (void)touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event {
    self.contentEdgeInsets = UIEdgeInsetsZero;
    self.layer.shadowRadius = 2;
    self.layer.shadowOpacity = 0.8;
    
    [super touchesEnded:touches withEvent:event];
}

- (void)setHighlighted:(BOOL)highlighted {
    if (highlighted) {
        self.backgroundColor = self.highlightColour;
    } else {
        self.backgroundColor = self.normalColour;
    }
    
    [super setHighlighted:highlighted];
}

- (void)setSelected:(BOOL)selected {
    if (selected) {
        self.backgroundColor = self.selectedColour;
    } else {
        self.backgroundColor = self.normalColour;
    }
    
    [super setSelected:selected];
}

@end