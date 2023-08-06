
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Sun, 06 Aug 2023 00:39:24 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
DesintokensPrimay,
DesintokensSea900,
DesintokensPrimitivecolorSeaSea900,
DesintokensPrimitivecolorSeaSea800,
DesintokensPrimitivecolorWhiteWhite1000,
DesintokensSea800,
DesintokensSemanticcolorPrimary,
DesintokensSemanticcolorTextTextreverse
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
