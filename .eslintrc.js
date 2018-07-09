// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jquery: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-spaced-func": 2,
    'indent': 0,
    'no-tabs': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-unmodified-loop-condition': 'off',
    'func-call-spacing': 'off',
    'no-spaced-func': 'off',
    'arrow-spacing': 'off',
    'space-in-parens':'off',
    // exchangeChain涉及的校验规则们，暂关闭
    'no-sequences': 'off',
    'curly': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // 当浏览器不支持LocalStorage时初始化函数中涉及的正则，暂关闭
    'no-useless-escape': 'off',
    'no-array-constructor': 'off',
    'no-dupe-keys': 'off',
    // 不确定实现方式
    'no-new': 'off'
  }
}
