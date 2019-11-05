module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "settings": {
        "react": {
            "version": "detect"
        },
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "quotes": [2, "double", { "avoidEscape": true }],
        "block-spacing": [2, "always"],
        "brace-style": [2, "1tbs"],
        "comma-dangle": ["error", "always-multiline"],
        "eol-last": [2, "always"],
        "indent": [2, 4],
        "jsx-quotes": [2, "prefer-double"],
        "no-trailing-spaces": [2, { "skipBlankLines": true }],
        "no-var": [2],
        "prefer-destructuring": ["error", {
            "VariableDeclarator": {
              "array": false,
              "object": true
            },
            "AssignmentExpression": {
              "array": true,
              "object": true
            }
          },
          {
            "enforceForRenamedProperties": false
          },
        ],
        "sort-imports": ["error", {
            "ignoreCase": false,
            "ignoreDeclarationSort": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],
        "react/prop-types": 0
    }
}
