
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Wed, 09 Aug 2023 00:44:58 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
DesigntokensPrimitivecolorWhiteWhite1000,
DesigntokensPrimitivecolorSeaSea900,
DesigntokensPrimitivecolorSeaSea800,
DesigntokensSemanticcolorReverse,
DesigntokensSemanticcolorPrimary,
DesigntokensSemanticcolorTextTextreverse
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
