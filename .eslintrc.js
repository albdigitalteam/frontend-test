module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react', 'prettier', 'react-hooks'],
  globals: {
    __DEV__: true,
    fetch: false
  },
  env: {
    jest: true
  },
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'comma-dangle': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'react/state-in-constructor': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'global-require': 0
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
