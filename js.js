/*
  Base configuration, WITHOUT Typescript.
*/

module.exports = {
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
    'shared-node-browser': true,
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    // Support hoisting of classes and functions
    'no-use-before-define': ['error', { functions: false, classes: false }],
    // Allow unused args/vars to be marked with an underscore
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    // Allow `while (true)` conditions
    'no-constant-condition': ['error', { checkLoops: false }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 90,
        singleQuote: true,
        arrowParens: 'always',
        trailingComma: 'all',
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.*'],
      env: {
        jest: true,
      },
      rules: {
        ...require('eslint-plugin-jest').configs.recommended.rules,
        ...require('eslint-plugin-jest').configs.style.rules,
      },
    },
  ],
};
