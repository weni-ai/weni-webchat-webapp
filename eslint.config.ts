import eslintPluginVue from 'eslint-plugin-vue';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        ignores: ['dist/*', 'node_modules/*', '*.config.ts', '*.setup.ts', 'tests/**/*.ts'],
    },
    {
        files: ['**/*.{js,ts,vue}'],
        rules: {
            'no-console': 'warn',
            'no-debugger': 'warn',
            'no-unused-vars': 'error',
            'no-undef': 'off',
            'no-var': 'error',
            'prefer-const': 'error',
        },
    },
    {
        files: ['**/*.vue'],
        plugins: {
            vue: eslintPluginVue,
        },
        languageOptions: {
            parser: require('vue-eslint-parser'),
            parserOptions: {
                parser: tsParser,
                sourceType: 'module',
                ecmaVersion: 'latest',
            }
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/valid-template-root': 'error',
            'vue/no-multiple-template-root': 'off',
            'vue/component-api-style': ['error', ['script-setup', 'composition']],
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],

        },
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
        },
    },
];