module.exports = {
  extends: 'airbnb-base',
  globals: {
    window: true,
    Breakpoints: true,
    Pace: true,
    FontAwesome: true,
    breakpoints: true,
    fontawesome: true,
    document: true,
  },
  env: {
    es6: true,
    jquery: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  plugins: [
    'import',
  ],
  rules: {
    'max-len': ['error', 180, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'func-names': ['error', 'never'],
    'import/no-unresolved': ['error', {
      ignore: ['fontawesome', 'breakpoints'],
    }],
  },
};
