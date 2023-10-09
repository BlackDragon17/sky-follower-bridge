import js from "@eslint/js";
import globals from "globals";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import gitignore from "eslint-config-flat-gitignore";

export default [
    gitignore(),
    js.configs.recommended,
    reactRecommended,
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        linterOptions: {
            noInlineConfig: true,
            reportUnusedDisableDirectives: true,
        },
        rules: {
            "quotes": "error",
        },
    },
];
