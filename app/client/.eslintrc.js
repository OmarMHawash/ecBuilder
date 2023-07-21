module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
}
