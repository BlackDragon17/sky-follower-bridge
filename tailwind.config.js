import daisyui from "daisyui";
import daisyuiThemes from "daisyui/src/theming/themes";

export default {
    mode: "jit",
    darkMode: "class",
    content: ["./src/**/*.tsx"],
    plugins: [daisyui],
    daisyui: {
        themes: [{
            winter: {
                ...daisyuiThemes["[data-theme=winter]"],
                primary: "#1D4ED8",
            },
        }],
    },
};
