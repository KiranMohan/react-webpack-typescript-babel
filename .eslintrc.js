module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',

    ],
    extends: [
        'airbnb-typescript',
    ],
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/indent" : ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-tag-spacing": ["error", {"beforeClosing": "never", "beforeSelfClosing" : "never"}],
        "react/prop-types": "off",
        "react/state-in-constructor": "off"
    }
};
