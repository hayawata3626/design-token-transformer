
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 12 Dec 2023 07:58:59 GMT


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
