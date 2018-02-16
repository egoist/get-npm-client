
# get-npm-client

[![NPM version](https://img.shields.io/npm/v/get-npm-client.svg?style=flat)](https://npmjs.com/package/get-npm-client) [![NPM downloads](https://img.shields.io/npm/dm/get-npm-client.svg?style=flat)](https://npmjs.com/package/get-npm-client) [![CircleCI](https://circleci.com/gh/egoist/get-npm-client/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/get-npm-client/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## How does it work

- Check if `yarn.lock` exists in the directory, yes then it's using `yarn`
- Check if `package-lock.json` exists in the directory, yes then it's using `npm`
- None of above is fulfilled, then the npm version is `<=3`, a.k.a. `npm-legacy`

## Install

```bash
yarn add get-npm-client
```

## Usage

```js
const getNpmClient = require('get-npm-client')

// async method
getNpmClient()
  .then(npmClient => {
    console.log(npmClient) //=> "npm" or "yarn" or "npm-legacy"
    // result is cached by path
  })

// sync method
const npmClient = getNpmClient.sync()

// specify cwd
getNpmClient('../that/project')
```

## API

### getNpmClient(cwd?)

#### cwd

Type: `string`<br>
Default: `process.cwd()`

### getNpmClient.sync(cwd?)

Like `getNpmClient` but sync.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**get-npm-client** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/get-npm-client/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
