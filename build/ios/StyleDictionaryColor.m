
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Sun, 06 Aug 2023 00:39:24 GMT


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
#ffffffff,
#000082ff,
#0017c1ff,
#ffffffff,
#0017c1ff,
#000082ff,
#ffffffff
    ];
  });

  return colorArray;
}

@end
