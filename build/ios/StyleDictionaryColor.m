
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Mon, 04 Dec 2023 09:41:57 GMT


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
#111010ff,
#808080ff,
#626264ff,
#0017c1ff,
#000082ff,
#ffffffff,
#ffffffff,
#808080ff,
#626264ff,
#111010ff,
#808080ff,
#ffffffff
    ];
  });

  return colorArray;
}

@end
