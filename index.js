const localRules = ['./rules/shared'].map(require.resolve);

module.exports = {
  extends: ['airbnb-base', 'prettier', ...localRules],
  env: {
    browser: true,
    node: true
  }
};
