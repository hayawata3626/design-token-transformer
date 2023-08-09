
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Wed, 09 Aug 2023 07:09:12 GMT


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
