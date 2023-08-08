
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 08 Aug 2023 07:54:48 GMT


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
