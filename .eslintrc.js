module.exports = {
    "env": {
        "browser": false,
        "es6": true,
        "node": true,
        "es2020": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",
        "@typescript-eslint"
    ],
    "rules": {        
        "react-native/no-unused-styles": 2,
        "react-native/no-inline-styles": 2,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "jsx-quotes": [
            "error", 
            "prefer-single"
        ],
        "react-native/sort-styles": [
            "error",
            "asc",
            {
                "ignoreClassNames": false,
                "ignoreStyleProperties": false
            }
        ],
        "curly": 1,
        "member-access": 0,
        "no-debugger": 1,
        "no-empty": 0,
        "no-eval": 1,
        "object-literal-sort-keys": 0,
        "prefer-const": 1,
        "radix": 1,
        "variable-name": 0,
    }
};
