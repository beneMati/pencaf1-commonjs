import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    rules: {
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': 'error',
      'no-console': 'off',
      'indent': ['error', 2],
      'max-len': ['error', { 'code': 95 }],
      'camelcase': 'error',
      'eqeqeq': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'arrow-spacing': 'error',
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
    },
  },
];