module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "jest",
  ],
  rules: {
    indent: [
      "error",
      2,
    ],
    "linebreak-style": [
      "error",
      "unix",
    ],
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "always",
    ],
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      },
    ],
    "no-sparse-arrays": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "padded-blocks": "off",
    "react/jsx-filename-extension": [1, {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }],
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-nested-ternary": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    "implicit-arrow-linebreak": "off",
    "arrow-parens" : ["error", "as-needed"],
    "react/jsx-one-expression-per-line": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "no-param-reassign": "off",
    "operator-linebreak": ['error', 'before', { overrides: { '=': 'after' } }],
    /*"object-curly-newline": ["error", { 
      "ObjectExpression": { "multiline": true, "consistent": true, "minProperties": 5 },
      "ObjectPattern": { "multiline": true, "consistent": true, "minProperties": 5 },
      "ImportDeclaration": { "multiline": true, "consistent": true, "minProperties": 5 },
      "ExportDeclaration": { "multiline": true, "consistent": true, "minProperties": 5 },
      "multiline": true, "consistent": true, "minProperties": 5,
    },
  }]*/
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },

};
