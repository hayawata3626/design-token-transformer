/**
 * Do not edit directly
 * Generated on Wed, 09 Aug 2023 07:09:12 GMT
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
  "font": {
    "title": {
      "l": DesignToken,
      "m": DesignToken
    }
  },
  "effect": {
    "elevation01": DesignToken,
    "elevation02": DesignToken,
    "elevation03": DesignToken
  },
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
  },
  "typography": {
    "title": {
      "l": {
        "fontSize": DesignToken,
        "textDecoration": DesignToken,
        "fontFamily": DesignToken,
        "fontWeight": DesignToken,
        "fontStyle": DesignToken,
        "fontStretch": DesignToken,
        "letterSpacing": DesignToken,
        "lineHeight": DesignToken,
        "paragraphIndent": DesignToken,
        "paragraphSpacing": DesignToken,
        "textCase": DesignToken
      },
      "m": {
        "fontSize": DesignToken,
        "textDecoration": DesignToken,
        "fontFamily": DesignToken,
        "fontWeight": DesignToken,
        "fontStyle": DesignToken,
        "fontStretch": DesignToken,
        "letterSpacing": DesignToken,
        "lineHeight": DesignToken,
        "paragraphIndent": DesignToken,
        "paragraphSpacing": DesignToken,
        "textCase": DesignToken
      }
    }
  }
}
