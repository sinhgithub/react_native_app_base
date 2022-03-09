module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jest: true
  },
  extends: ['@react-native-community'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
      modules: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    'react/prop-types': 0,
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': [0],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['error', 'always'],
    'arrow-parens': [2, 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 'warn',
    'react-native/no-inline-styles': 0,
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true
  }
};
