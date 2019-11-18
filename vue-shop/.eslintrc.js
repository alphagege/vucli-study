module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off',
        'no-unused-vars': [
            'warn',
            {
                'vars': 'local',
                'args': 'none',
                'ignoreRestSiblings': false
            }
        ],
        'no-mixed-operators': [0], //Unexpected mix of '&&' and '||' (no-mixed-operators)
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ],
        'handle-callback-err': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}