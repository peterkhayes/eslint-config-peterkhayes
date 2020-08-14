/*
  Base configuration, WITH Typescript. Based on non-Typescript config.
  Not using `extends` here because we *need* the prettier plugins to come last.
*/

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
  },
  plugins: ['@typescript-eslint', 'import', 'jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',

    // Additional standard rules that were enabled in our old Airbnb-based config
    'consistent-return': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
      },
    ],
    'new-cap': ['error', { properties: false }],
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-labels': 'error',
    'no-label-var': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
      {
        message: 'Babel is unable to transpile const enums',
        selector: 'TSEnumDeclaration[const=true]',
      },
    ],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-template-curly-in-string': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-useless-rename': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'object-shorthand': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    radix: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
        },
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
        },
      },
    ],
    'symbol-description': 'error',
    yoda: [
      'error',
      'never',
      {
        exceptRange: true,
        onlyEquality: false,
      },
    ],

    // Prefer `Array<X>` to `X[]`. Decided by majority vote when we adopted Typescript.
    '@typescript-eslint/array-type': [
      'error',
      { default: 'generic', readonly: 'generic' },
    ],

    // '@ts-ignore' comments should be avoided. @ts-expect-error is ok with a description for why.
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': true,
        minimumDescriptionLength: 5,
      },
    ],
    // Empty functions are fine; e.g. in example stubs.
    '@typescript-eslint/no-empty-function': 'off',

    // Explicit any should be fine.
    '@typescript-eslint/no-explicit-any': 'off',

    // Allow unused args/vars to be marked with an underscore
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // Don't allow constructors that just call super.
    '@typescript-eslint/no-useless-constructor': 'error',

    // Since this configuration applies to all files, we don't want this rule. It forbids node-style
    // imports, which we use in all of our scripts.
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    // Overrides for all Typescript code - enable plugin for type-based linting.
    // Disable some overly-aggressive rules, and warn on most of the others, since
    // we aren't anywhere near no implicit any's yet.
    {
      files: ['*.{ts,tsx}'],
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      rules: {
        // Since I'm mostly writing small scripts, these methods feel too aggressive
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/unbound-method': 'off',

        // Sometimes it's nice to use `async` for functions without `await` to make the function async.
        // For example, we might have a mock implementation of an API call that isn't actually making
        // any requests, but that we want to behave similarly in terms of timing.
        '@typescript-eslint/require-await': 'off',

        // Sometimes it's nice to call an async function in a fire+forget way.
        '@typescript-eslint/no-floating-promises': 'off',

        // Apparently `exec` is faster than `match`, but I'm not sure we really care.
        '@typescript-eslint/prefer-regexp-exec': 'off',

        // Typescript can infer these just fine
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',

        // This seems to have issues with async functions inside of setTimeout.
        // Disabling `checksVoidReturn` seems to fix this.
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

        // Enforce standard naming conventions for typescript variables.
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          // allow PascalCase for some exported connected components & React contexts
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase'],
          },
          {
            selector: 'property',
            format: null,
          },
          // PascalCase for React components
          {
            selector: 'class',
            format: ['PascalCase'],
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase'],
            filter: {
              regex: 'Component$',
              match: true,
            },
          },
          {
            selector: 'variable',
            types: ['function'],
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
        ],
      },
    },

    // Configuration files are assumed to be node
    {
      files: ['*rc.js'],
      env: {
        node: true,
      },
    },
  ],
};
