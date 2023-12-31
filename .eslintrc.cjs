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
        'eslint:recommended',
        'standard-with-typescript',
        'plugin:react/recommended',
        'prettier',
        'plugin:import/recommended',
        'plugin:sonar/recommended',
        'plugin:unicorn/recommended',
        'plugin:jsx-a11y/strict',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: [
        'dist',
        '.eslintrc.cjs',
        'prettier.config.js',
        'commitlint.config.cjs',
        'lint-staged.config.js',
    ],
    parser: '@typescript-eslint/parser',
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
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        'import',
        'jsx-a11y',
        'simple-import-sort',
        'typescript-sort-keys',
        'react-refresh',
    ],
    rules: {
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ExportAllDeclaration,ImportAllDeclaration',
                message: 'Export/Import all (*) is forbidden',
            },
            {
                selector: 'ExportNamedDeclaration[declaration!=null]',
                message: 'Exports should be at the end of the file.',
            },
            {
                selector: 'TSEnumDeclaration',
                message: 'Enums is forbidden.',
            },
        ],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/require-await': 'error',
        'max-params': ['error', 3],
        'no-nested-ternary': 'error',
        'no-console': 'error',
        '@typescript-eslint/lines-between-class-members': ['error'],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        'import/no-default-export': 'error',
        'import/first': 'error',
        'import/default': 'off',
        'import/newline-after-import': ['error', '1'],
        'import/newline-after-import': ['error', { count: 1 }],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
        'react-refresh/only-export-components': 'warn',
        'unicorn/filename-case': 'off',
    },
}
