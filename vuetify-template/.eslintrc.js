// .eslintrc.js
module.exports = {

  root: true,

  env: {
    node: true,
  },

  ignorePatterns: ['src/assets/**', '**/node_modules/**', 'translations/language-pack/**', 'public/lottie.js'],


  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],

  plugins: [
    'vuetify'
  ],

  rules: {
    "indent": ["error", 2],
  },
}
