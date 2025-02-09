import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      quotes: ["error", "single"], // Gunakan single quote
      semi: ["error", "always"], // Wajib pakai semicolon
      indent: ["error", 2], // Indentasi 2 spasi
      "comma-dangle": ["error", "never"], // Tidak ada trailing comma
      "no-unused-vars": "warn", // Tampilkan warning jika ada variabel yang tidak terpakai
    },
    settings: {
      react: {
        version: "detect", // Deteksi otomatis versi React dari package.json
      },
    },
  },
];
