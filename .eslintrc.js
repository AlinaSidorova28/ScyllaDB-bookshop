module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        'react-hooks',
        '@stylistic',
        'simple-import-sort',
        'import',
    ],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'curly': 'error',
        'prefer-const': ['error', { 'destructuring': 'all' }],
        'no-else-return': ['error', { 'allowElseIf': false }],
        'no-console': [
            'error',
            {
                'allow': ['warn', 'error', 'info', 'dir', 'clear'],
            },
        ],
        'no-dupe-args': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'none',
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@stylistic/max-len': ['error', {
            'code': 120,
            'ignoreComments': true,
            'ignoreTemplateLiterals': true,
        }],
        '@stylistic/indent': ['error', 4, { 'ignoredNodes': ['JSXAttribute']}],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/eol-last': 'error',
        '@stylistic/semi': 'error',
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/padding-line-between-statements': ['error',
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
            { 'blankLine': 'always', 'prev': 'block-like', 'next': '*' },
            { 'blankLine': 'always', 'prev': 'block', 'next': '*' },
        ],
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
        '@stylistic/member-delimiter-style': 'error',
        '@stylistic/jsx-curly-brace-presence': [2, { 'props': 'never' }],
        '@stylistic/jsx-closing-bracket-location': ['error', 'after-props'],
        '@stylistic/jsx-indent-props': ['error', 'first'],
        '@stylistic/jsx-first-prop-new-line': ['error', 'never'],
        '@stylistic/jsx-max-props-per-line': ['error', { 'when': 'multiline' }],
        '@stylistic/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        '@stylistic/operator-linebreak': ['error', 'before'],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/no-array-index-key': 'warn',
        'react/jsx-key': ['error', { 'warnOnDuplicates': true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'simple-import-sort/imports': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
    },
}
