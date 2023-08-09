
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Wed, 09 Aug 2023 01:15:40 GMT


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
