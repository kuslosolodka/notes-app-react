module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    settings: {
        typescript: true,
        node: true,
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:unicorn/recommended',
        'plugin:sonarjs/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/strict',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:storybook/recommended',
    ],
    ignorePatterns: [
        'dist',
        '.eslintrc.js',
        'prettier.config.mjs',
        'commitlint.config.cjs',
        'lint-staged.config.mjs',
        'postcss.config.js',
        'tailwind.config.js',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['vite-env.d.ts'],
            rules: {
                'unicorn/prevent-abbreviations': 'off',
                '@typescript-eslint/triple-slash-reference': 'off',
            },
        },
        {
            files: ['main.tsx'],
            rules: {
                '@typescript-eslint/no-non-null-assertion': 'off',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    plugins: [
        'react',
        'jsx-a11y',
        'simple-import-sort',
        'react-refresh',
        '@typescript-eslint/eslint-plugin',
    ],
    rules: {
        'unicorn/prefer-top-level-await': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unicorn/filename-case': 'off',
    },
}
