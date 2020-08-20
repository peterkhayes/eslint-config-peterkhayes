module.exports = {
  extends: '.',
  overrides: [
    {
      files: ['./index.js', './react.js', './test/node.ts'],
      env: {
        node: true,
      },
    },
    {
      files: ['**/*.{ts,tsx}'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['./test/react.tsx'],
      extends: './react',
    },
  ],
};
