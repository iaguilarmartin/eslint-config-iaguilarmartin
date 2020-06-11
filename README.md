# eslint-config-iaguilarmartin

This package provides `.eslintrc` as an extensible shared configuration. There
are two different configurations available. The default one for vanilla
JavaScript or Node applications and an specific for React applications. Both
configurations include specific rules for **jest** testing framework in case you
want to implement tests in your project.

## Usage

### Usage in React apps

Install the following dependencies

#### with npm

```bash
npm install eslint \
            prettier \
            babel-eslint \
            eslint-config-iaguilarmartin \
            eslint-config-airbnb \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-jest \
            eslint-plugin-import \
            eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            --save-dev
```

#### with yarn

```bash
yarn add -D eslint \
            prettier \
            babel-eslint \
            eslint-config-iaguilarmartin \
            eslint-config-airbnb \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-jest \
            eslint-plugin-import \
            eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
```

Create a **.eslintrc** file with the following content:

```json
{
  "extends": "iaguilarmartin/react"
}
```

Include the following scripts in your **package.json** file:

```json
    "lint": "eslint ./",
    "lint:fix": "eslint ./ --fix",
```

Create a **.prettierrc** file with this content:

```json
"./node_modules/eslint-config-iaguilarmartin/.prettierrc.json"
```

### Usage in Node apps

Install the following dependencies

#### with npm

```bash
npm install eslint \
            prettier \
            babel-eslint \
            eslint-config-iaguilarmartin \
            eslint-config-airbnb-base \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-jest \
            eslint-plugin-import \
            --save-dev
```

#### with yarn

```bash
yarn add -D eslint \
            prettier \
            babel-eslint \
            eslint-config-iaguilarmartin \
            eslint-config-airbnb-base \
            eslint-config-prettier \
            eslint-plugin-prettier \
            eslint-plugin-jest \
            eslint-plugin-import \
```

Create a **.eslintrc** file with the following content:

```json
{
  "extends": "iaguilarmartin"
}
```

Include the following scripts in your **package.json** file:

```json
    "lint": "eslint ./",
    "lint:fix": "eslint ./ --fix",
```

Create a **.prettierrc** file with this content:

```json
"./node_modules/eslint-config-iaguilarmartin/.prettierrc.json"
```

## Integration into VSCode

In order to properly integrate ESLint and Prettier inside **VSCode** so that the
code is formatted automatically on the file after changes are done follow the
next steps:

1. Install
   [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install
   [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Apply these settings at **user** level in _VSCode_

```json
"files.autoSave": "onFocusChange",
"prettier.singleQuote": true,
"prettier.requireConfig": true,
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  {
    "language": "typescript",
    "autoFix": true
  },
  {
    "language": "typescriptreact",
    "autoFix": true
  }
],
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

### Add it to your `.eslintrc` file.

For **Node** or **vanilla JavaScript** applications:

```js
{
  "extends": "iaguilarmartin"
}
```

For **React** applications:

```js
{
  "extends": "iaguilarmartin/react"
}
```

For **React** applications with **Jest** tests:

```js
{
  "extends": ["iaguilarmartin/react", "iaguilarmartin/jest"]
}
```
