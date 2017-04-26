module.exports = {
  "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "impliedStrict": true,
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "consistent-this": [2, "self"],
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-debugger": "warn",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "semi": ["warn", "never"]
    }
}
