module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked', // @typescript-eslint @v6
    'plugin:@typescript-eslint/stylistic-type-checked', // @typescript-eslint @v6
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
  }
}
