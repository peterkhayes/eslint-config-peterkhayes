const baseConfig = require('./js');

/*
  Base configuration, WITH Typescript. Based on non-Typescript config.
  Not using `extends` here because we *need* the prettier plugins to come last.
*/

module.exports = {
  ...baseConfig,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...baseConfig.parserOptions,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', ...baseConfig.plugins],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    ...baseConfig.extends,
    'prettier/@typescript-eslint',
  ],
  rules: {
    ...baseConfig.rules,
    // Preserve rules that have Typescript versions
    '@typescript-eslint/no-use-before-define': baseConfig.rules['no-use-before-define'],
    '@typescript-eslint/no-unused-vars': baseConfig.rules['no-unused-vars'],
    // This is pretty aggressive; Typescript can infer return types
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
