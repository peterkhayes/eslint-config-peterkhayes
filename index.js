const PLUGINS = ['@typescript-eslint', 'prettier', 'react-hooks'];
const EXTENDS = [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'prettier',
  'prettier/@typescript-eslint',
  'prettier/react',
];

module.exports = { // eslint-disable-line
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: PLUGINS,
  extends: EXTENDS,
  env: {
    es6: true,
  },
  rules: {
    // this is pretty aggressive
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Allow unused args/vars to be marked with an underscore
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
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
      files: ['*.test.ts', '*.test.tsx'],
      plugins: [...PLUGINS, 'jest'],
      extends: [...EXTENDS, 'plugin:jest/recommended'],
      env: {
        jest: true,
      },
    },
  ],
};
