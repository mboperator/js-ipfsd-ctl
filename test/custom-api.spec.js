/* eslint-env mocha */
/* eslint max-nested-callbacks: ["error", 8] */
'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const IpfsClient = require('ipfs-http-client')
const IpfsFactory = require('../src')

describe('custom API', function () {
  this.timeout(30 * 1000)

  it('should create a factory with a custom API', async function () {
    const mockApi = {}

    const f = IpfsFactory.create({
      type: 'js',
      initOptions: { bits: 512 },
      IpfsClient: () => mockApi
    })

    const ipfsd = await f.spawn({ initOptions: { profile: 'test' } })

    expect(ipfsd.api).to.equal(mockApi)
    // Restore a real API so that the node can be stopped properly
    ipfsd.api = IpfsClient(ipfsd.apiAddr)
    await ipfsd.stop()
  })
})
