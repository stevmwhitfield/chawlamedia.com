// Depencies: @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next eslint-config-prettier eslint-plugin-prettier eslint-plugin-testing-library

module.exports = {
  root: true,
  plugins: ['react', 'prettier', '@typescript-eslint', 'import', 'testing-library'],
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'func-names': ['error', 'as-needed'],
    'no-shadow': 'error',
    'import/named': 'error',
    'import/no-cycle': 'error',
    'import/no-unresolved': 'error',
    'import/order': 'warn',
    'prettier/prettier': [
      'warn',
      {
        bracketSameLine: false,
        bracketSpacing: true,
        printWidth: 100,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
          experimentalObjectRestSpread: true,
        },
        allowImportExportEverywhere: true,
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      rules: {
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'import/order': [
          'error',
          {
            'groups': ['builtin', 'internal', 'external', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            'alphabetize': {
              order: 'asc',
              orderImportKind: 'desc',
              caseInsensitive: true,
            },
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/restrict-template-expressions': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
