import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginSecurity from "eslint-plugin-security";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    // 共通の設定
    ignores: ["dist", "docs"],
    languageOptions: {
      ecmaVersion: 2025,
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
      },
    },
    plugins: {
      "unused-imports": eslintPluginUnusedImports,
      prettier: eslintPluginPrettier,
      security: eslintPluginSecurity,
    },
    rules: {
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-mixed-spaces-and-tabs": "off",
      indent: ["error", 2, { SwitchCase: 1 }],
      "unused-imports/no-unused-imports": "warn",
      "prettier/prettier": ["error", { singleQuote: false }],
    },
  },
  // Vite + React + TypeScript 用の設定 (app)
  {
    files: ["app/**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "react/jsx-curly-brace-presence": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          noSortAlphabetically: true,
          reservedFirst: true,
        },
      ],
    },
  },
  // Express + JavaScript 用の設定 (api)
  {
    files: ["api/**/*.js"],
    languageOptions: {
      ecmaVersion: 2025,
    },
    plugins: {
      security: eslintPluginSecurity,
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
