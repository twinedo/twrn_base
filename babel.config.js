module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        tests: ['./tests'],
        '@assets': './src/assets',
        '@components': './src/components',
        '@navigations': './src/navigations',
        '@screens': './src/screens',
        '@services': './src/services',
        '@stores': './src/stores',
        '@styles': './src/styles',
        '@utils': './src/utils',
      },
    }]
  ]
};
