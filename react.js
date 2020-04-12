const baseConfig = require('.');

/*
  Configuration for projects using React.
*/

module.exports = {
  ...baseConfig,
  env: {
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
