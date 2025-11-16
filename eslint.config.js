import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_|^args$' },
      ],

      'react/prop-types': 'off',
    },
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    extends: [prettierConfig],

    plugins: {
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },

    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier 규칙 위반 시 오류 처리
      curly: ['error', 'all'], // 모든 제어문에 중괄호 {} 사용 강제
      'no-console': 'warn', // console.log 경고
      eqeqeq: ['error', 'always'], // === 사용 강제
      'no-var': 'error', // var 사용 금지

      //  Import 정렬 규칙
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]);
