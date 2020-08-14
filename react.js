const baseConfig = require('.');

/*
  Configuration for projects using React. Based on Typescript config.
  Not using `extends` here because we *need* the prettier plugins to come last.
*/

module.exports = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    browser: true,
    commonjs: true,
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', ...baseConfig.plugins],
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    ...baseConfig.extends,
    'plugin:prettier/react',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // The next version of this rule will add this option by default
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],

    // This prevents valid usage of quotes and parens in jsx; Typescript will catch the bad ones
    'react/no-unescaped-entities': 'off',

    // Because we have Typescript, we don't need prop-types.
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
