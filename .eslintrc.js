module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-indent": [2, 4],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/naming-convention": "off",
    "react/no-deprecated": "off",
    "max-len": ["error", {"ignoreComments": true, code: 120}] 
  },
};
