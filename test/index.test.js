const path = require('path')
const getNpmClient = require('../')

const fixture = name => path.join(__dirname, 'fixtures', name)

describe('sync', () => {
  it('npm', () => {
    const npmClient = getNpmClient.sync(fixture('npm'))
    expect(npmClient).toBe('npm')
  })
  it('npm-legacy', () => {
    const npmClient = getNpmClient.sync(fixture('npm-legacy'))
    expect(npmClient).toBe('npm-legacy')
  })
  it('yarn', () => {
    const npmClient = getNpmClient.sync(fixture('yarn'))
    expect(npmClient).toBe('yarn')
  })
})

describe('async', () => {
  it('npm', async () => {
    const npmClient = await getNpmClient(fixture('npm'))
    expect(npmClient).toBe('npm')
  })
  it('npm-legacy', async () => {
    const npmClient = await getNpmClient(fixture('npm-legacy'))
    expect(npmClient).toBe('npm-legacy')
  })
  it('yarn', async () => {
    const npmClient = await getNpmClient(fixture('yarn'))
    expect(npmClient).toBe('yarn')
  })
})
