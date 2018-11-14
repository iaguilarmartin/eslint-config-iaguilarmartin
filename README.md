# eslint-config-iaguilarmartin

This package provides `.eslintrc` as an extensible shared configuration. There are two different configurations available. The default one for vanilla javascript or Node applications and an specific for React applications.

## Usage

### Install package and all the necessary plugins.

With **npm 5+**:

```sh
npx install-peerdeps --dev eslint-config-iaguilarmartin
```

With **npm < 5**:

You can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-iaguilarmartin
```

With **yarn**:

List all peer dependencies and versions
```sh
npm info "eslint-config-iaguilarmartin@latest" peerDependencies
```

Then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.


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