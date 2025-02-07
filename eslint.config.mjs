import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "indent": ["error", 2],                        // インデントをスペース2つに
      "quotes": ["error", "double"],                 // 文字列をダブルクォートに統一
      "semi": ["error", "always"],                   // セミコロンを必須に
      "comma-dangle": ["error", "always-multiline"], // 複数行の場合、末尾のカンマを必須に
      "object-curly-spacing": ["error", "always"],   // `{}` の内側にスペースを入れる
      "array-bracket-spacing": ["error", "never"],   // 配列の `[]` の内側にスペースを入れない
      "jsx-quotes": ["error", "prefer-double"],      // JSX の属性はダブルクォート
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
