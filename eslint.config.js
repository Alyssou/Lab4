// ESLint Flat Config for ESLint v9+
// See: https://eslint.org/docs/latest/use/configure/migration-guide

import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    name: "project",
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    ignores: ["node_modules/**", "dist/**", "build/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
    },
  },
];
