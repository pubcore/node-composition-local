'use strict'

module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'mocha': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 9
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
