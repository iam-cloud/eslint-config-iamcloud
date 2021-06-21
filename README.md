# IAM Cloud Eslint Config

Eslint configuration for React + TypeScript applications built at [IAM Cloud](https://www.iam-cloud.com/)

## Installation

1. Install all peer dependencies

```sh
npx install-peerdeps --dev @iam-cloud/eslint-config-iamcloud
```

2. Install [@iam-cloud/eslint-config-iamcloud](https://github.com/iam-cloud/eslint-config-iamcloud) as a development dependency of your project:

```sh
yarn add --dev @iam-cloud/eslint-config-iamcloud --save-dev
```

## TypeScript Support

If you want TypeScript support, make sure to install `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`

```sh
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

change the eslint parser to `@typescript-eslint/parser` and add the typescript plugin

```js
// eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@10up/eslint-config/react'],
  plugins: ['@typescript-eslint'],
} 
```

## VSCode integration

We recommend turning on VSCode settings to automatically run `eslint --fix` on save.

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
}
```

This will automagically format your code once you save. You don't need VSCode prettier extension enabled or running on save as eslint will automatically run `prettier` for you.