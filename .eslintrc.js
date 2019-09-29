module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': [1, 'never'],
    'arrow-parens': 0, // 箭头函数参数括号检查
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-prototype-builtins': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-spaced-func': 0,
    'space-before-function-paren': [0, 'always'],
    'no-loop-func': 1,
    'no-plusplus': 0,
    'max-len': 0, //字符串最大长度
    'no-unused-expressions': 0, //禁止无用的表达式
    'prefer-destructuring': 0,
    'no-nested-ternary': 0,
    'array-callback-return': 0,
    'no-unused-vars': 1,
    'class-methods-use-this': 0,
    'vue/no-unused-components': 1,
    'no-underscore-dangle': 0,
    'func-names': 0,
    "import/no-extraneous-dependencies": 0,
    "object-curly-newline": 0,
    "no-useless-escape": 0,
    "import/no-cycle": 0,
    "import/no-unresolved": 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
