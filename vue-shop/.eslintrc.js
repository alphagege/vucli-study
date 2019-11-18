module.exports = {
<<<<<<< HEAD
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
=======
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
    'no-unused-vars': [
      'warn',
      {
        'vars': 'local',
        'args': 'none',
        'ignoreRestSiblings': false
      }
    ],
    'no-mixed-operators': [0], // Unexpected mix of '&&' and '||' (no-mixed-operators)
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ],
    'handle-callback-err':'off' // Expected error to be handled (handle-callback-err)
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
>>>>>>> 9b15a6cbdd9d904d54cacd32489630049fcfc3a0
