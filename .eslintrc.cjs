module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint-config-prettier'],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  settings: { 'import/resolver': { typescript: {} } },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: { order: 'asc' },
        warnOnUnassignedImports: true,
      },
    ],
    'no-implicit-coercion': 'error',
    'no-undef': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prettier/prettier': 'error',
    semi: 'off',
  },
};
