module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  overrides: [],

  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'vars-on-top': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'func-names': 'off',
    'prefer-template': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'prefer-arrow-callback': 'error',
    'require-await': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    '@typescript-eslint/no-shadow': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowShortCircuit: true,
        allowTaggedTemplates: true,
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 'off',
  },
};
