const fs = require('fs')
const path = require('path')

const pathExists = (cwd, p) => fs.existsSync(path.join(cwd, p))

const cache = {}

function getNpmClientSync(cwd = process.cwd()) {
  cwd = path.resolve(cwd)
  return (
    cache[cwd] ||
    (cache[cwd] = pathExists(cwd, 'yarn.lock') ?
      'yarn' :
      pathExists(cwd, 'package-lock.json') ? 'npm' : 'npm-legacy')
  )
}

module.exports = getNpmClientSync
