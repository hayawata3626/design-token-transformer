
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Tue, 12 Dec 2023 07:58:59 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
#ffffffff,
#000082ff,
#0017c1ff,
#ffffffff,
#000082ff,
#ffffffff
    ];
  });

  return colorArray;
}

@end
