module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 0,
    'arrow-parens': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': [1, 'never'],
    'no-unused-expressions': 0, //禁止无用的表达式
    "import/no-cycle": 0,
    "import/no-unresolved": 0,
    "object-curly-newline": 0,
    "no-param-reassign": 0,
    "no-unused-vars": 0
  },
};
