declare const root: RootObject
export default root
interface RootObject {
  desintokens: Desintokens;
}
interface Desintokens {
  primay: Primay;
  spacing: Spacing;
  sea900: Primay;
  primitivecolor: Primitivecolor;
  sea800: Primay;
  semanticcolor: Semanticcolor;
}
interface Semanticcolor {
  primary: Primary;
  text: Text;
}
interface Text {
  textreverse: Textreverse;
}
interface Textreverse {
  type: string;
  value: string;
  extensions: Extensions;
  filePath: string;
  isSource: boolean;
  original: Original4;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Primary {
  type: string;
  value: string;
  extensions: Extensions;
  filePath: string;
  isSource: boolean;
  original: Original4;
  name: string;
  attributes: Attributes2;
  path: string[];
}
interface Original4 {
  type: string;
  value: string;
  extensions: Extensions;
}
interface Primitivecolor {
  sea: Sea;
  white: White;
}
interface White {
  white1000: Sea900;
}
interface Sea {
  sea900: Sea900;
  sea800: Sea900;
}
interface Sea900 {
  type: string;
  value: string;
  blendMode: string;
  extensions: Extensions;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Attributes3 {
  category: string;
  type: string;
  item: string;
  subitem: string;
}
interface Spacing {
  xxl: Xxl;
  xl: Xl;
  l: Xxl;
}
interface Xl {
  comment: string;
  type: string;
  value: number;
  extensions: Extensions;
  filePath: string;
  isSource: boolean;
  original: Original3;
  name: string;
  attributes: Attributes2;
  path: string[];
}
interface Original3 {
  comment: string;
  type: string;
  value: number;
  extensions: Extensions;
}
interface Xxl {
  type: string;
  value: number;
  extensions: Extensions;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes2;
  path: string[];
}
interface Attributes2 {
  category: string;
  type: string;
  item: string;
}
interface Original2 {
  type: string;
  value: number;
  extensions: Extensions;
}
interface Primay {
  type: string;
  value: string;
  blendMode: string;
  extensions: Extensions;
  filePath: string;
  isSource: boolean;
  original: Original;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Attributes {
  category: string;
  type: string;
}
interface Original {
  type: string;
  value: string;
  blendMode: string;
  extensions: Extensions;
}
interface Extensions {
  'org.lukasoppermann.figmaDesignTokens': OrglukasoppermannfigmaDesignTokens;
}
interface OrglukasoppermannfigmaDesignTokens {
  collection: string;
  scopes: string[];
  variableId: string;
  exportKey: string;
}