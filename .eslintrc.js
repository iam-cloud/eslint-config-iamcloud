module.exports = {
  extends: [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:compat/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:fp/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:testing-library/react",
  ],
  plugins: [
    //
    "prettier",
    "filenames",
    "fp",
    "jest",
    "jest-dom",
    "jsx-a11y",
    "sonarjs",
    "testing-library",
  ],
  ignorePatterns: [
    "src/api/generated/**",
    "api/generated/",
    "*/generated/**/*",
    "serviceWorker.ts",
    "src/mocks/**",
  ],
  settings: {
    polyfills: ["navigator.clipboard"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: "./",
      },
    },
  },
  rules: {
    "no-redeclare": "off",
    "dot-notation": "warn",
    "arrow-body-style": ["warn", "as-needed"],
    "object-shorthand": ["warn", "always"],
    "no-else-return": ["warn", { allowElseIf: false }],
    "no-restricted-imports": ["warn", { patterns: ["../../"] }],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "export" },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
      },
    ],

    /* warnings: toggle temporarily to assist refactoring */
    // "import/no-cycle": "error",
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],
    "sonarjs/no-duplicate-string": "off",

    /* plugins/recommended overrides */
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      { allowExpressions: true },
    ],
    "@typescript-eslint/no-unused-vars": "warn",

    /* TODO: re-enable when eslint/create-react-app issues are ironed out */
    "eslint-comments/no-unlimited-disable": "warn",
    "eslint-comments/no-unused-disable": "warn",
    "filenames/match-exported": "warn",
    "fp/no-mutating-methods": ["warn", { allowedObjects: ["history", "form"] }],
    "fp/no-mutation": [
      "warn",
      {
        commonjs: true,
        allowThis: true,
        exceptions: [
          { object: "Component" },
          { property: "current" },
          { object: "Log" },
          { object: "draft" },
          { property: "didCancel" },
          { object: "reader" },
          { property: "whitelist" },
          { object: "a" },
        ],
      },
    ],
    "fp/no-nil": "off",
    "fp/no-rest-parameters": "off",
    "fp/no-unused-expression": "off",
    "jsx-a11y/no-autofocus": "off",
    "react/jsx-boolean-value": "warn",
    "react/jsx-key": "warn",
    "react/jsx-pascal-case": "warn",
    "sonarjs/cognitive-complexity": ["warn", 21],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ["key"],
      },
    ],
    "react/prop-types": "off",
    "import/no-default-export": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          ["builtin", "external"],
          ["index", "sibling", "parent", "internal"],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/translations/**/*.ts?(x)"],
      rules: {
        "sort-keys": ["warn", "asc", { caseSensitive: true, natural: true }],
        "sonarjs/no-duplicate-string": "warn",
      },
    },
    {
      files: ["**/*.test.tsx"],
      rules: {
        "fp/no-mutation": "off",
        "jest/expect-expect": ["warn", { assertFunctionNames: ["expect*"] }],
      },
    },
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/no-default-export": "off",
        "fp/no-mutation": [
          "off",
          {
            exceptions: [{ property: "args" }, { property: "argTypes" }],
          },
        ],
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": "off",
      },
    },
  ],
};
