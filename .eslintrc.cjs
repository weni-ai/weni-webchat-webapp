module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        '@weni/eslint-config/vue3', 'prettier', '@vue/eslint-config-typescript'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'error',
        'no-undef': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        'vue/multi-word-component-names': 'off'
    },
    ignorePatterns: ['dist/*', 'node_modules/*', '*.config.ts', '*.setup.ts', 'tests/**/*.ts']
}; 