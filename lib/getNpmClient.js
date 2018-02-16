const fs = require('fs')
const path = require('path')

const pathExists = (cwd, p) => {
  return new Promise(resolve => {
    fs.stat(path.join(cwd, p), err => resolve(!err))
  })
}

const cache = {}

function getNpmClient(cwd = process.cwd()) {
  cwd = path.resolve(cwd)

  return (
    cache[cwd] ||
    (cache[cwd] = Promise.all([
      pathExists(cwd, 'yarn.lock'),
      pathExists(cwd, 'package-lock.json')
    ]).then(
      ([isYarn, isNpm]) => (isYarn ? 'yarn' : isNpm ? 'npm' : 'npm-legacy')
    ))
  )
}

module.exports = getNpmClient
