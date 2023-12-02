
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Sat, 02 Dec 2023 08:17:43 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
DesintokensPrimay,
DesintokensSea900,
DesintokensPrimitivecolorSeaSea900,
DesintokensPrimitivecolorSeaSea800,
DesintokensPrimitivecolorWhiteWhite1000,
DesintokensSea800,
DesintokensSemanticcolorPrimary,
DesintokensSemanticcolorTextTextreverse,
DesintokensSemanticcolorTextComment,
DesintokensTest
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
