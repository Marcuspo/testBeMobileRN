const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [],
    sourceExts: [],
  },
};

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const {assetExts, sourceExts} = defaultConfig.resolver;

  config.resolver.assetExts = assetExts.filter(ext => ext !== 'svg');
  config.resolver.sourceExts = [...sourceExts, 'svg'];

  return mergeConfig(defaultConfig, config);
})();
