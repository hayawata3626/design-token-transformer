declare const root: RootObject
export default root
interface RootObject {
  font: Font;
  effect: Effect;
  desintokens: Desintokens;
  typography: Typography;
}
interface Typography {
  title: Title2;
}
interface Title2 {
  l: L2;
  m: L2;
}
interface L2 {
  fontSize: FontSize;
  textDecoration: TextDecoration;
  fontFamily: TextDecoration;
  fontWeight: FontSize;
  fontStyle: TextDecoration;
  fontStretch: TextDecoration;
  letterSpacing: FontSize;
  lineHeight: FontSize;
  paragraphIndent: FontSize;
  paragraphSpacing: FontSize;
  textCase: TextDecoration;
}
interface TextDecoration {
  type: string;
  value: string;
  filePath: string;
  isSource: boolean;
  original: Original8;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Original8 {
  type: string;
  value: string;
}
interface FontSize {
  type: string;
  value: number;
  filePath: string;
  isSource: boolean;
  original: Original7;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Original7 {
  type: string;
  value: number;
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
  border: Border;
  background: Background;
}
interface Background {
  primary: Textreverse;
}
interface Border {
  dark: Textreverse;
  secondary: Textreverse;
}
interface Text {
  textreverse: Textreverse;
  comment: Textreverse;
  placeholder: Textreverse;
  sub: Textreverse;
}
interface Textreverse {
  type: string;
  value: string;
  extensions: Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original6;
  name: string;
  attributes: Attributes3;
  path: string[];
}
interface Primary {
  type: string;
  value: string;
  extensions: Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original6;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Original6 {
  type: string;
  value: string;
  extensions: Extensions2;
}
interface Primitivecolor {
  sea: Sea;
  white: White;
  black: Black;
  gray: Black;
  subgray: Black;
}
interface Black {
  type: string;
  value: string;
  blendMode: string;
  extensions: Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original3;
  name: string;
  attributes: Attributes;
  path: string[];
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
  extensions: Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original3;
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
  extensions: Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original5;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Original5 {
  comment: string;
  type: string;
  value: number;
  extensions: Extensions2;
}
interface Xxl {
  type: string;
  value: number;
  extensions: Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original4;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Original4 {
  type: string;
  value: number;
  extensions: Extensions2;
}
interface Primay {
  type: string;
  value: string;
  blendMode: string;
  extensions: Extensions2;
  filePath: string;
  isSource: boolean;
  original: Original3;
  name: string;
  attributes: Attributes2;
  path: string[];
}
interface Original3 {
  type: string;
  value: string;
  blendMode: string;
  extensions: Extensions2;
}
interface Extensions2 {
  'org.lukasoppermann.figmaDesignTokens': OrglukasoppermannfigmaDesignTokens2;
}
interface OrglukasoppermannfigmaDesignTokens2 {
  mode: string;
  collection: string;
  scopes: string[];
  variableId: string;
  exportKey: string;
}
interface Effect {
  elevation01: Elevation01;
  elevation02: Elevation01;
  elevation03: Elevation01;
}
interface Elevation01 {
  comment?: any;
  type: string;
  value: Value2;
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
}
interface Original2 {
  comment?: any;
  type: string;
  value: Value2;
  extensions: Extensions;
}
interface Value2 {
  shadowType: string;
  radius: number;
  color: string;
  offsetX: number;
  offsetY: number;
  spread: number;
}
interface Font {
  title: Title;
}
interface Title {
  l: L;
  m: L;
}
interface L {
  type: string;
  value: Value;
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
  item: string;
}
interface Original {
  type: string;
  value: Value;
  extensions: Extensions;
}
interface Extensions {
  'org.lukasoppermann.figmaDesignTokens': OrglukasoppermannfigmaDesignTokens;
}
interface OrglukasoppermannfigmaDesignTokens {
  styleId: string;
  exportKey: string;
}
interface Value {
  fontSize: number;
  textDecoration: string;
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  fontStretch: string;
  letterSpacing: number;
  lineHeight: number;
  paragraphIndent: number;
  paragraphSpacing: number;
  textCase: string;
}