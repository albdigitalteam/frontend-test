module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    test: {
      plugins: ['react-native-config-node/transform'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@stores': './src/stores',
          '@modules': './src/modules',
          '@theme': './src/theme',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
};
