module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "prettier",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:import/errors"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "promise",
        "import"
    ],
    "settings": {
      "import/resolver": {
          "node": {
              "extensions": [".js", ".jsx", ".ts", ".tsx"],
              "paths": ["src"]
          }
      }
    },
    "rules": {
        "react/react-in-jsx-scope": 0,
        "func-names": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "import/order": [
            2,
            {
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": false
                },
                "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always",
                "pathGroups": [
                    {
                        "pattern": "react",
                        "group": "external",
                        "position": "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["react"]
            }
        ],
        "import/prefer-default-export": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state',
            ]
        }],
    },

}
