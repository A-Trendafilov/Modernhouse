import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['dist', 'vite.config.ts'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: '18.0',
        jsxRuntime: 'automatic',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // React Rules
      'react/jsx-no-target-blank': 'error',
      'react/prop-types': 'off', // TypeScript handles this now

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Import Rules
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],

      // General Rules
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'consistent-return': 'error',
      'eqeqeq': 'error',
      'no-undef': 'off', // TypeScript handles this
      'no-alert': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React in JSX scope not needed with React 18+
      'react/react-in-jsx-scope': 'off',
    },
  },
];
