module.exports = {
  rules: {
    strict: 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always-and-inside-groups'
      }
    ]
  },
  env: {
    browser: true,
    node: true
  }
};
