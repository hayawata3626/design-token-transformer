/**
 * Do not edit directly
 * Generated on Wed, 09 Aug 2023 01:51:44 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "effect": {
    "test": DesignToken
  },
  "designtokens": {
    "primitivecolor": {
      "white": {
        "white1000": DesignToken
      },
      "sea": {
        "sea900": DesignToken,
        "sea800": DesignToken
      }
    },
    "semanticcolor": {
      "reverse": DesignToken,
      "primary": DesignToken,
      "text": {
        "textreverse": DesignToken
      }
    },
    "spacing": {
      "xxl": DesignToken,
      "xl": DesignToken,
      "l": DesignToken
    }
  }
}
