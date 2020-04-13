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
  plugins: ['react', 'react-hooks', ...baseConfig.plugins],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    ...baseConfig.extends,
  ],
  settings: {
    ...baseConfig.settings,
    react: {
      version: 'detect',
    },
  },
};
