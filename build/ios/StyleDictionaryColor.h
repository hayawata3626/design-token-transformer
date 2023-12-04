
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Mon, 04 Dec 2023 09:41:57 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
DesintokensPrimay,
DesintokensSea900,
DesintokensPrimitivecolorSeaSea900,
DesintokensPrimitivecolorSeaSea800,
DesintokensPrimitivecolorWhiteWhite1000,
DesintokensPrimitivecolorBlack,
DesintokensPrimitivecolorGray,
DesintokensPrimitivecolorSubgray,
DesintokensSea800,
DesintokensSemanticcolorPrimary,
DesintokensSemanticcolorTextTextreverse,
DesintokensSemanticcolorTextComment,
DesintokensSemanticcolorTextPlaceholder,
DesintokensSemanticcolorTextSub,
DesintokensSemanticcolorBorderDark,
DesintokensSemanticcolorBorderSecondary,
DesintokensSemanticcolorBackgroundPrimary
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
