import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

export default [
  { ignores: ['dist', 'vite.config.js'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: '18.0', // Use React 18 version to leverage new JSX transform features
        pragma: 'React', // React pragma for JSX transform in case you have any non-React runtime
        jsxRuntime: 'automatic', // Ensure the JSX Transform is set to 'automatic' (React 18+)
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // React Rules - Enforce stricter coding standards
      'react/jsx-no-target-blank': 'error', // Disallow <a> elements with `target="_blank"` without `rel="noopener noreferrer"`
      'react/prop-types': 'error', // Enforce prop types validation
      'react/no-unused-prop-types': 'error', // Enforce prop type usage

      // React Refresh Plugin - Enforce rules related to hot reloading and components
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Import Plugin Rules - Enforce stricter import rules
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always', // Enforce newlines between import groups
        },
      ],
      'import/no-unresolved': 'error', // Ensure imports point to a file/module that can be resolved
      'import/named': 'error', // Ensure named imports correspond to a named export in the remote file
      'import/default': 'error', // Ensure a default export is present, given a default import
      'import/namespace': 'error', // Ensure imported namespaces contain dereferenced properties as they are dereferenced

      // General JavaScript/JSX Rules - Stricter coding standards
      'no-unused-vars': 'error', // Disallow unused variables
      'no-console': 'warn', // Warn when `console.log()` is used (can be turned off in development)
      'no-debugger': 'error', // Disallow the use of `debugger`
      'consistent-return': 'error', // Enforce consistent return behavior in functions
      'eqeqeq': 'error', // Require the use of strict equality `===` and `!==`
      'no-undef': 'error', // Disallow the use of undeclared variables

      // React Hooks Rules
      'react-hooks/rules-of-hooks': 'error', // Ensures hooks are used properly
      'react-hooks/exhaustive-deps': 'warn', // Warns about missing dependencies in useEffect

      // Additional rules for cleaner code
      'no-alert': 'warn', // Warns about the use of `alert`, `confirm`, and `prompt`
      'no-eval': 'error', // Disallow the use of `eval()`
      'no-implied-eval': 'error', // Disallow the use of implied `eval()`
      'prefer-const': 'error', // Prefer `const` for variables that are not reassigned
      'no-var': 'error', // Enforce the use of `let` or `const` instead of `var`

      // Disable React's jsx-in-scope check with React 18+
      'react/react-in-jsx-scope': 'off', // React 18 JSX Transform doesn't need `React` in scope anymore
    },
  },
];
