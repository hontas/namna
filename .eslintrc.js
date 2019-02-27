module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all'
  ],
  plugins: ['react', 'react-native', 'jsx-a11y'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    jest: true,
    'react-native/react-native': true
  },
  rules: {
    'react/prop-types': 1,
    // 'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 1,
    'react-native/sort-styles': 0,
    'react-native/no-raw-text': [2, { skip: ['MonoText'] }]
  }
};
