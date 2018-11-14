module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      generators: true,
      objectLiteralDuplicateProperties: false,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    strict: 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }]
  },
  env: {
    browser: true,
    node: true
  }
};
