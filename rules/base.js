const localRules = ['./shared'].map(require.resolve);

module.exports = {
  extends: ['airbnb-base', 'prettier', ...localRules]
};
