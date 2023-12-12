declare const root: RootObject
export default root
interface RootObject {
  designtokens: Designtokens;
}
interface Designtokens {
  primitivecolor: Primitivecolor;
  semanticcolor: Semanticcolor;
  spacing: Spacing;
}
interface Spacing {
  xxl: Xxl;
  xl: Xxl;
  l: Xxl;
}
interface Xxl {
  type: string;
  value: number;
  filePath: string;
  isSource: boolean;
  original: Original3;
  name: string;
  attributes: Attributes2;
  path: string[];
}
interface Original3 {
  type: string;
  value: number;
}
interface Semanticcolor {
  reverse: Reverse;
  primary: Reverse;
  text: Text;
}
interface Text {
  textreverse: Textreverse;
}
interface Textreverse {
  type: string;
  value: string;
  filePath: string;
  isSource: boolean;
  original: Original2;
  name: string;
  attributes: Attributes;
  path: string[];
}
interface Reverse {
  type: string;
  value: string;
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
  value: string;
}
interface Primitivecolor {
  white: White;
  sea: Sea;
}
interface Sea {
  sea900: White1000;
  sea800: White1000;
}
interface White {
  white1000: White1000;
}
interface White1000 {
  type: string;
  value: string;
  blendMode: string;
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
  subitem: string;
}
interface Original {
  type: string;
  value: string;
  blendMode: string;
}