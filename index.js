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
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ...baseConfig.extends,
    'prettier/@typescript-eslint',
  ],
  rules: {
    ...baseConfig.rules,

    // These rules are too aggressive I think
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/array-type': [
      'error',
      { default: 'generic', readonly: 'generic' },
    ],

    // These rules come from the `@typescript-eslint/recommended-requiring-type-checking`
    // config. We've still got a lot of unsafe code in our Typescript. Having them as warnings
    // is useful for encourging folks to fix them.
    '@typescript-eslint/no-implied-eval': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/unbound-method': 'warn',

    // This seems to have issues with async functions inside of setTimeout.
    // Disabling `checksVoidReturn` seems to fix this.
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

    // Since this configuration applies to all files, we don't want this rule. It forbids node-style
    // imports, which we use in all of our scripts.
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    // Configuration files are assumed to be node
    {
      files: ['*rc.js'],
      env: {
        node: true,
      },
    },
  ],
};
