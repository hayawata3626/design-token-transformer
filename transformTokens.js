const StyleDictionary = require('style-dictionary-utils');
const deepMerge = require('deepmerge');
const webConfig = require('./src/web/index.js');
const androidConfig = require('./src/android/index.js');
const JsonToTS = require('json-to-ts');

StyleDictionary.registerFormat({
  name: 'typescript/module-declarations',
  formatter: function ({ dictionary }) {
    return (
      'declare const root: RootObject\n' +
      'export default root\n' +
      JsonToTS(dictionary.properties).join('\n')
    );
  },
});

StyleDictionary.registerFormat({
  name: 'tsFormat',
  formatter: function ({ dictionary, file }) {
    // 現在fontから同じ情報を取得できるので削除している(参考: https://github.com/lukasoppermann/design-tokens/issues/266)
    delete dictionary.tokens.typography;
    const tokens = StyleDictionary.formatHelpers.minifyDictionary(
      dictionary.tokens
    );
    return (
      StyleDictionary.formatHelpers.fileHeader({ file }) +
      'export const theme = ' +
      JSON.stringify(tokens, null, 2) +
      ' as const;'
    );
  },
});

StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: (token) => {
    return (
      (token.unit === 'pixel' || token.type === 'dimension') &&
      token.value !== 0
    );
  },
  transformer: (token) => {
    return `${token.value}px`;
  },
});

StyleDictionary.registerTransform({
  name: 'size/percent',
  type: 'value',
  matcher: (token) => {
    return token.unit === 'percent' && token.value !== 0;
  },
  transformer: (token) => {
    return `${token.value}%`;
  },
});

StyleDictionary.registerTransform({
  type: webConfig.transform['web/shadow'].type,
  name: 'web/shadow',
  matcher: webConfig.transform['web/shadow'].matcher,
  transformer: webConfig.transform['web/shadow'].transformer,
});

StyleDictionary.registerTransform({
  name: 'custom-fontStyle/number-to-px',
  type: 'value',
  matcher: (token) => token.type === 'custom-fontStyle',
  transformer: (token) => {
    return {
      ...token.value,
      fontSize: `${token.value.fontSize}px`,
      letterSpacing: `${token.value.letterSpacing}px`,
      lineHeight: `${token.value.lineHeight}px`,
    };
  },
});

StyleDictionary.registerTransform({
  type: webConfig.transform['web/font'].type,
  name: 'web/font',
  matcher: webConfig.transform['web/font'].matcher,
  transformer: webConfig.transform['web/font'].transformer,
});

StyleDictionary.registerTransformGroup({
  name: 'tsFormat',
  transforms: [
    'size/px',
    'font/css',
    'custom-fontStyle/number-to-px',
    'web/shadow',
    'web/font',
  ],
});

StyleDictionary.registerFilter({
  name: 'validToken',
  matcher: function (token) {
    return [
      'dimension',
      'string',
      'number',
      'color',
      'custom-spacing',
      'custom-gradient',
      'custom-fontStyle',
      'custom-radius',
      'custom-shadow',
    ].includes(token.type);
  },
});

const StyleDictionaryExtended = StyleDictionary.extend({
  ...deepMerge.all([androidConfig, webConfig]),
  source: ['tokens/*.json'],
  platforms: {
    js: {
      buildPath: 'build/js/',
      transformGroup: 'js',
      files: [
        {
          format: 'javascript/module',
          destination: 'tokens.js',
        },
        {
          format: 'typescript/module-declarations',
          destination: 'tokens.d.ts',
        },
      ],
    },
    ts: {
      transformGroup: 'tsFormat',
      buildPath: 'build/ts/',
      files: [
        {
          format: 'tsFormat',
          destination: 'theme.ts',
        },
      ],
    },
    scss: {
      transformGroup: 'custom/css',
      buildPath: 'build/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'css/variables',
          filter: 'validToken',
        },
      ],
    },
    less: {
      transformGroup: 'custom/css',
      buildPath: 'build/less/',
      files: [
        {
          destination: '_variables.less',
          format: 'less/variables',
          filter: 'validToken',
        },
      ],
    },
    css: {
      transformGroup: 'custom/css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
          filter: 'validToken',
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    'json-flat': {
      transformGroup: 'js',
      buildPath: 'build/json/',
      files: [
        {
          destination: 'styles.json',
          format: 'json/flat',
          filter: 'validToken',
        },
      ],
    },
    ios: {
      transformGroup: 'ios',
      buildPath: 'build/ios/',
      files: [
        {
          destination: 'StyleDictionaryColor.h',
          format: 'ios/colors.h',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            type: 'color',
          },
        },
        {
          destination: 'StyleDictionaryColor.m',
          format: 'ios/colors.m',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            type: 'color',
          },
        },
        {
          destination: 'StyleDictionarySize.h',
          format: 'ios/static.h',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            type: 'number',
          },
        },
        {
          destination: 'StyleDictionarySize.m',
          format: 'ios/static.m',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            type: 'number',
          },
        },
      ],
    },

    'ios-swift-separate-enums': {
      transformGroup: 'ios-swift-separate',
      buildPath: 'build/ios-swift/',
      files: [
        {
          destination: 'StyleDictionaryColor.swift',
          format: 'ios-swift/enum.swift',
          className: 'StyleDictionaryColor',
          filter: {
            type: 'color',
          },
        },
        {
          destination: 'StyleDictionarySize.swift',
          format: 'ios-swift/enum.swift',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            type: 'number',
          },
        },
      ],
    },
  },
});
console.log('StyleDictionaryExtended', StyleDictionaryExtended);

StyleDictionaryExtended.buildAllPlatforms();
