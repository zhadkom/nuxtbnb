module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["plugin:vue/essential", "plugin:prettier/recommended", "eslint:recommended"],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {}
};
