/**
 * Do not edit directly
 * Generated on Sun, 06 Aug 2023 00:43:30 GMT
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
  "desintokens": {
    "primay": DesignToken,
    "spacing": {
      "xxl": DesignToken,
      "xl": DesignToken,
      "l": DesignToken
    },
    "sea900": DesignToken,
    "primitivecolor": {
      "sea": {
        "sea900": DesignToken,
        "sea800": DesignToken
      },
      "white": {
        "white1000": DesignToken
      }
    },
    "sea800": DesignToken,
    "semanticcolor": {
      "primary": DesignToken,
      "text": {
        "textreverse": DesignToken
      }
    }
  }
}
