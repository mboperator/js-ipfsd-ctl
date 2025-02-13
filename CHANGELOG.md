<a name="0.47.4"></a>
## [0.47.4](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.47.3...v0.47.4) (2019-10-14)


### Bug Fixes

* support more ipfs options ([#396](https://github.com/ipfs/js-ipfsd-ctl/issues/396)) ([2a9706e](https://github.com/ipfs/js-ipfsd-ctl/commit/2a9706e))



<a name="0.47.3"></a>
## [0.47.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.47.2...v0.47.3) (2019-10-10)


### Bug Fixes

* revert multiaddr ([#393](https://github.com/ipfs/js-ipfsd-ctl/issues/393)) ([9faca56](https://github.com/ipfs/js-ipfsd-ctl/commit/9faca56))



<a name="0.47.2"></a>
## [0.47.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.47.1...v0.47.2) (2019-09-20)



<a name="0.47.1"></a>
## [0.47.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.47.0...v0.47.1) (2019-09-18)


### Bug Fixes

* use local options instead of instance to check "exec" ([38a730d](https://github.com/ipfs/js-ipfsd-ctl/commit/38a730d))



<a name="0.47.0"></a>
# [0.47.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.46.3...v0.47.0) (2019-09-18)


### Bug Fixes

* fix non-disposable and normalises behaviour ([#379](https://github.com/ipfs/js-ipfsd-ctl/issues/379)) ([b502bd4](https://github.com/ipfs/js-ipfsd-ctl/commit/b502bd4)), closes [#305](https://github.com/ipfs/js-ipfsd-ctl/issues/305) [#276](https://github.com/ipfs/js-ipfsd-ctl/issues/276) [#354](https://github.com/ipfs/js-ipfsd-ctl/issues/354) [#330](https://github.com/ipfs/js-ipfsd-ctl/issues/330) [#329](https://github.com/ipfs/js-ipfsd-ctl/issues/329)



<a name="0.46.3"></a>
## [0.46.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.46.2...v0.46.3) (2019-09-15)



<a name="0.46.2"></a>
## [0.46.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.46.1...v0.46.2) (2019-09-15)


### Bug Fixes

* fix electron ([#375](https://github.com/ipfs/js-ipfsd-ctl/issues/375)) ([6be5027](https://github.com/ipfs/js-ipfsd-ctl/commit/6be5027))



<a name="0.46.1"></a>
## [0.46.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.46.0...v0.46.1) (2019-09-11)


### Bug Fixes

* make proc silent by default ([a62bd97](https://github.com/ipfs/js-ipfsd-ctl/commit/a62bd97))



<a name="0.46.0"></a>
# [0.46.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.45.1...v0.46.0) (2019-09-05)


### Features

* remove pubsub flags ([#366](https://github.com/ipfs/js-ipfsd-ctl/issues/366)) ([3d4b943](https://github.com/ipfs/js-ipfsd-ctl/commit/3d4b943))


### BREAKING CHANGES

* pubsub flags for in-proc daemons will not set values anymore



<a name="0.45.1"></a>
## [0.45.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.45.0...v0.45.1) (2019-09-03)



<a name="0.45.0"></a>
# [0.45.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.44.2...v0.45.0) (2019-09-02)


### Features

* pubsub flag defaults ([#363](https://github.com/ipfs/js-ipfsd-ctl/issues/363)) ([6958239](https://github.com/ipfs/js-ipfsd-ctl/commit/6958239))


### BREAKING CHANGES

* removes the experimental flag of pubsub and makes it enable by default



<a name="0.44.2"></a>
## [0.44.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.44.1...v0.44.2) (2019-08-30)



<a name="0.44.1"></a>
## [0.44.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.44.0...v0.44.1) (2019-07-11)



<a name="0.44.0"></a>
# [0.44.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.43.0...v0.44.0) (2019-07-05)


### Features

* refactor to async/await ([#353](https://github.com/ipfs/js-ipfsd-ctl/issues/353)) ([ab1a2a4](https://github.com/ipfs/js-ipfsd-ctl/commit/ab1a2a4))



<a name="0.43.0"></a>
# [0.43.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.42.4...v0.43.0) (2019-06-20)


### Bug Fixes

* updates deps and http for name resolve dns ([#332](https://github.com/ipfs/js-ipfsd-ctl/issues/332)) ([58a9fea](https://github.com/ipfs/js-ipfsd-ctl/commit/58a9fea))



<a name="0.42.4"></a>
## [0.42.4](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.42.3...v0.42.4) (2019-06-04)



<a name="0.42.3"></a>
## [0.42.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.42.2...v0.42.3) (2019-05-17)


### Bug Fixes

* dont call callbacks twice ([c61606f](https://github.com/ipfs/js-ipfsd-ctl/commit/c61606f))



<a name="0.42.2"></a>
## [0.42.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.42.1...v0.42.2) (2019-04-04)


### Bug Fixes

* pass relay in via opts, not config ([#327](https://github.com/ipfs/js-ipfsd-ctl/issues/327)) ([bc0a5b8](https://github.com/ipfs/js-ipfsd-ctl/commit/bc0a5b8))



<a name="0.42.1"></a>
## [0.42.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.42.0...v0.42.1) (2019-03-20)


### Bug Fixes

* remove relay and mfs from experimental ([#325](https://github.com/ipfs/js-ipfsd-ctl/issues/325)) ([c42c960](https://github.com/ipfs/js-ipfsd-ctl/commit/c42c960))


### Features

* add bundlesize check ([#323](https://github.com/ipfs/js-ipfsd-ctl/issues/323)) ([fc5cef8](https://github.com/ipfs/js-ipfsd-ctl/commit/fc5cef8))



<a name="0.42.0"></a>
# [0.42.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.41.0...v0.42.0) (2019-02-12)


### Features

* support passing profile init option ([#321](https://github.com/ipfs/js-ipfsd-ctl/issues/321)) ([62a15d2](https://github.com/ipfs/js-ipfsd-ctl/commit/62a15d2))



<a name="0.41.0"></a>
# [0.41.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.40.3...v0.41.0) (2019-01-30)


### Bug Fixes

* rename local flag to offline ([#318](https://github.com/ipfs/js-ipfsd-ctl/issues/318)) ([49bf51b](https://github.com/ipfs/js-ipfsd-ctl/commit/49bf51b))


### BREAKING CHANGES

* `--local` option has been renamed to `--offline`



<a name="0.40.3"></a>
## [0.40.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.40.2...v0.40.3) (2019-01-04)



<a name="0.40.2"></a>
## [0.40.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.40.1...v0.40.2) (2018-12-11)



<a name="0.40.1"></a>
## [0.40.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.40.0...v0.40.1) (2018-11-28)


### Features

* add gitlab ci ([#310](https://github.com/ipfs/js-ipfsd-ctl/issues/310)) ([7df2805](https://github.com/ipfs/js-ipfsd-ctl/commit/7df2805))
* change to ipfs-http-client ([#311](https://github.com/ipfs/js-ipfsd-ctl/issues/311)) ([412c18f](https://github.com/ipfs/js-ipfsd-ctl/commit/412c18f))



<a name="0.40.0"></a>
# [0.40.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.39.5...v0.40.0) (2018-11-03)


### Features

* go-ipfs 0.4.18 and js-ipfs 0.33.0 ([503ef42](https://github.com/ipfs/js-ipfsd-ctl/commit/503ef42))



<a name="0.39.5"></a>
## [0.39.5](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.39.4...v0.39.5) (2018-10-28)


### Bug Fixes

* linting errors ([ac22a3c](https://github.com/ipfs/js-ipfsd-ctl/commit/ac22a3c))


### Features

* add dht experimental flag ([3164a88](https://github.com/ipfs/js-ipfsd-ctl/commit/3164a88))
* use execa instead of subcomandante ([388b401](https://github.com/ipfs/js-ipfsd-ctl/commit/388b401))



<a name="0.39.4"></a>
## [0.39.4](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.39.3...v0.39.4) (2018-10-26)


### Bug Fixes

* upgrade ipfs-api ([3c8c913](https://github.com/ipfs/js-ipfsd-ctl/commit/3c8c913))



<a name="0.39.3"></a>
## [0.39.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.39.2...v0.39.3) (2018-10-19)


### Bug Fixes

* CLI scraping of API and Gateway addresses ([#301](https://github.com/ipfs/js-ipfsd-ctl/issues/301)) ([1fc3fa0](https://github.com/ipfs/js-ipfsd-ctl/commit/1fc3fa0))


### Features

* upgrade to ipfs-api 24.0.1 ([d773a27](https://github.com/ipfs/js-ipfsd-ctl/commit/d773a27))
* Use pregenerated ids for testing ([#284](https://github.com/ipfs/js-ipfsd-ctl/issues/284)) ([cbc1ac6](https://github.com/ipfs/js-ipfsd-ctl/commit/cbc1ac6))



<a name="0.39.2"></a>
## [0.39.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.39.1...v0.39.2) (2018-09-12)


### Bug Fixes

* add namesys pubsub option ([#293](https://github.com/ipfs/js-ipfsd-ctl/issues/293)) ([d1f23a3](https://github.com/ipfs/js-ipfsd-ctl/commit/d1f23a3))
* fix ipfsd.init return value ([#291](https://github.com/ipfs/js-ipfsd-ctl/issues/291)) ([3fa63e3](https://github.com/ipfs/js-ipfsd-ctl/commit/3fa63e3)), closes [#289](https://github.com/ipfs/js-ipfsd-ctl/issues/289)



<a name="0.39.1"></a>
## [0.39.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.37.5...v0.39.1) (2018-08-07)


### Features

* allows a custom IpfsApi constructor to be used ([#261](https://github.com/ipfs/js-ipfsd-ctl/issues/261)) ([dacde26](https://github.com/ipfs/js-ipfsd-ctl/commit/dacde26))
* go-ipfs 0.4.17 ([958a9e3](https://github.com/ipfs/js-ipfsd-ctl/commit/958a9e3))



<a name="0.39.0"></a>
# [0.39.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.38.0...v0.39.0) (2018-07-28)


### Features

* go-ipfs 0.4.17 ([958a9e3](https://github.com/ipfs/js-ipfsd-ctl/commit/958a9e3))



<a name="0.38.0"></a>
# [0.38.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.37.5...v0.38.0) (2018-07-15)



<a name="0.37.5"></a>
## [0.37.5](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.37.4...v0.37.5) (2018-06-22)


### Bug Fixes

* pass config to ipfs for proc daemon ([#268](https://github.com/ipfs/js-ipfsd-ctl/issues/268)) ([1cdb739](https://github.com/ipfs/js-ipfsd-ctl/commit/1cdb739))


### Features

* log stderr from daemon ([#270](https://github.com/ipfs/js-ipfsd-ctl/issues/270)) ([c4a175c](https://github.com/ipfs/js-ipfsd-ctl/commit/c4a175c))



<a name="0.37.4"></a>
## [0.37.4](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.37.3...v0.37.4) (2018-06-11)


### Features

* add timeout to stop and killProcess ([#228](https://github.com/ipfs/js-ipfsd-ctl/issues/228)) ([d6955d4](https://github.com/ipfs/js-ipfsd-ctl/commit/d6955d4))



<a name="0.37.3"></a>
## [0.37.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.37.2...v0.37.3) (2018-06-01)



<a name="0.37.2"></a>
## [0.37.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.37.1...v0.37.2) (2018-06-01)



<a name="0.37.1"></a>
## [0.37.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.37.0...v0.37.1) (2018-06-01)


### Features

* add support for experimental mfs flag ([3ce834e](https://github.com/ipfs/js-ipfsd-ctl/commit/3ce834e))



<a name="0.37.0"></a>
# [0.37.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.36.0...v0.37.0) (2018-05-23)



<a name="0.36.0"></a>
# [0.36.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.35.0...v0.36.0) (2018-05-17)


### Features

* use go-ipfs 0.4.15 ([4bd2535](https://github.com/ipfs/js-ipfsd-ctl/commit/4bd2535))



<a name="0.35.0"></a>
# [0.35.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.34.0...v0.35.0) (2018-05-17)


### Features

* stop using ipfs-repo ([ca44996](https://github.com/ipfs/js-ipfsd-ctl/commit/ca44996))



<a name="0.34.0"></a>
# [0.34.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.33.2...v0.34.0) (2018-05-14)



<a name="0.33.2"></a>
## [0.33.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.33.1...v0.33.2) (2018-05-08)



<a name="0.33.1"></a>
## [0.33.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.33.0...v0.33.1) (2018-05-06)


### Bug Fixes

* Daemon spawning throws error with the new multiaddr version ([a0d2e37](https://github.com/ipfs/js-ipfsd-ctl/commit/a0d2e37))



<a name="0.33.0"></a>
# [0.33.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.32.1...v0.33.0) (2018-05-04)


### Bug Fixes

* error event propagation ([#233](https://github.com/ipfs/js-ipfsd-ctl/issues/233)) ([db3dd68](https://github.com/ipfs/js-ipfsd-ctl/commit/db3dd68))



<a name="0.32.1"></a>
## [0.32.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.32.0...v0.32.1) (2018-04-12)



<a name="0.32.0"></a>
# [0.32.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.31.0...v0.32.0) (2018-04-06)


### Features

* use default daemon addrs ([#220](https://github.com/ipfs/js-ipfsd-ctl/issues/220)) ([510b320](https://github.com/ipfs/js-ipfsd-ctl/commit/510b320))



<a name="0.31.0"></a>
# [0.31.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.30.4...v0.31.0) (2018-03-27)


### Features

* upgrade to go-ipfs-0.4.14 ([77b4cd9](https://github.com/ipfs/js-ipfsd-ctl/commit/77b4cd9))



<a name="0.30.4"></a>
## [0.30.4](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.30.3...v0.30.4) (2018-03-21)


### Features

* add ability to use go and js env exec ([#219](https://github.com/ipfs/js-ipfsd-ctl/issues/219)) ([4c8fcad](https://github.com/ipfs/js-ipfsd-ctl/commit/4c8fcad)), closes [#221](https://github.com/ipfs/js-ipfsd-ctl/issues/221)
* detect running node ([#221](https://github.com/ipfs/js-ipfsd-ctl/issues/221)) ([26c2634](https://github.com/ipfs/js-ipfsd-ctl/commit/26c2634))



<a name="0.30.3"></a>
## [0.30.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.30.2...v0.30.3) (2018-03-16)


### Bug Fixes

* daemon should recognize previously created repos. ([#212](https://github.com/ipfs/js-ipfsd-ctl/issues/212)) ([2e9cf0d](https://github.com/ipfs/js-ipfsd-ctl/commit/2e9cf0d))



<a name="0.30.2"></a>
## [0.30.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.30.1...v0.30.2) (2018-03-16)


### Bug Fixes

* pass on environment variables ([b73325e](https://github.com/ipfs/js-ipfsd-ctl/commit/b73325e))



<a name="0.30.1"></a>
## [0.30.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.30.0...v0.30.1) (2018-03-15)


### Bug Fixes

* pass keysize on command line ([e2a6697](https://github.com/ipfs/js-ipfsd-ctl/commit/e2a6697))



<a name="0.30.0"></a>
# [0.30.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.29.1...v0.30.0) (2018-03-14)


### Features

* graceful stop, fix stop for Windows ([#205](https://github.com/ipfs/js-ipfsd-ctl/issues/205)) ([359dd62](https://github.com/ipfs/js-ipfsd-ctl/commit/359dd62))



<a name="0.29.1"></a>
## [0.29.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.29.0...v0.29.1) (2018-02-23)


### Bug Fixes

* pick a non used port ([4fdb071](https://github.com/ipfs/js-ipfsd-ctl/commit/4fdb071))



<a name="0.29.0"></a>
# [0.29.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.28.0...v0.29.0) (2018-02-21)


### Bug Fixes

* don't pass on arguments from node executable ([cf794cd](https://github.com/ipfs/js-ipfsd-ctl/commit/cf794cd)), closes [#202](https://github.com/ipfs/js-ipfsd-ctl/issues/202)


### Features

* add keysize through an option to spawn ([#203](https://github.com/ipfs/js-ipfsd-ctl/issues/203)) ([151303c](https://github.com/ipfs/js-ipfsd-ctl/commit/151303c))



<a name="0.28.0"></a>
# [0.28.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.27.3...v0.28.0) (2018-02-12)


### Bug Fixes

* make sure repo is being properly cleaned up ([#196](https://github.com/ipfs/js-ipfsd-ctl/issues/196)) ([4e8b8db](https://github.com/ipfs/js-ipfsd-ctl/commit/4e8b8db))


### Features

* add logging for debug ([#195](https://github.com/ipfs/js-ipfsd-ctl/issues/195)) ([86b0ab0](https://github.com/ipfs/js-ipfsd-ctl/commit/86b0ab0))
* the big refactor! ([#200](https://github.com/ipfs/js-ipfsd-ctl/issues/200)) ([adbef1b](https://github.com/ipfs/js-ipfsd-ctl/commit/adbef1b))



<a name="0.27.3"></a>
## [0.27.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.27.2...v0.27.3) (2018-01-30)


### Features

* add passphrase to init options ([#197](https://github.com/ipfs/js-ipfsd-ctl/issues/197)) ([7cf6384](https://github.com/ipfs/js-ipfsd-ctl/commit/7cf6384))



<a name="0.27.2"></a>
## [0.27.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.27.1...v0.27.2) (2018-01-27)


### Features

* support for passphrase for js-ipfs daemons ([3bc94c1](https://github.com/ipfs/js-ipfsd-ctl/commit/3bc94c1))



<a name="0.27.1"></a>
## [0.27.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.27.0...v0.27.1) (2018-01-21)


### Bug Fixes

* make sure exec matches the passed node type ([#184](https://github.com/ipfs/js-ipfsd-ctl/issues/184)) ([89e9059](https://github.com/ipfs/js-ipfsd-ctl/commit/89e9059))



<a name="0.27.0"></a>
# [0.27.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.26.1...v0.27.0) (2018-01-16)



<a name="0.26.1"></a>
## [0.26.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.26.0...v0.26.1) (2018-01-16)


### Features

* Complete revamp! Spawn js/go daemons locally or remote (from the browser) ([#176](https://github.com/ipfs/js-ipfsd-ctl/issues/176)) ([1cfbd08](https://github.com/ipfs/js-ipfsd-ctl/commit/1cfbd08))



<a name="0.26.0"></a>
# [0.26.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.25.1...v0.26.0) (2017-12-01)



<a name="0.25.1"></a>
## [0.25.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.25.0...v0.25.1) (2017-11-22)


### Features

* accept flags as an object as well ([8cb9d01](https://github.com/ipfs/js-ipfsd-ctl/commit/8cb9d01))



<a name="0.25.0"></a>
# [0.25.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.24.1...v0.25.0) (2017-11-22)



<a name="0.24.1"></a>
## [0.24.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.24.0...v0.24.1) (2017-11-12)


### Features

* more windows interop ([#171](https://github.com/ipfs/js-ipfsd-ctl/issues/171)) ([0561798](https://github.com/ipfs/js-ipfsd-ctl/commit/0561798))



<a name="0.24.0"></a>
# [0.24.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.23.0...v0.24.0) (2017-10-18)



<a name="0.23.0"></a>
# [0.23.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.22.0...v0.23.0) (2017-09-06)


### Features

* replaces path to .asar.unpacked + windows support ([a44cb79](https://github.com/ipfs/js-ipfsd-ctl/commit/a44cb79))
* Slay the Dragon! ([#165](https://github.com/ipfs/js-ipfsd-ctl/issues/165)) ([80377cd](https://github.com/ipfs/js-ipfsd-ctl/commit/80377cd))



<a name="0.22.0"></a>
# [0.22.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.21.0...v0.22.0) (2017-09-02)


### Bug Fixes

* show whole config ([#153](https://github.com/ipfs/js-ipfsd-ctl/issues/153)) ([e5a8eb5](https://github.com/ipfs/js-ipfsd-ctl/commit/e5a8eb5))


### Features

* use go-ipfs 0.4.10 ([b0286fb](https://github.com/ipfs/js-ipfsd-ctl/commit/b0286fb))



<a name="0.21.0"></a>
# [0.21.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.20.0...v0.21.0) (2017-05-19)


### Bug Fixes

* remove possible overlapping of tmp folder ([54a96a8](https://github.com/ipfs/js-ipfsd-ctl/commit/54a96a8))


### Features

* update to use go-ipfs v0.4.9 and latest ipfs-block ([94f0a97](https://github.com/ipfs/js-ipfsd-ctl/commit/94f0a97))



<a name="0.20.0"></a>
# [0.20.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.19.0...v0.20.0) (2017-03-20)


### Features

* v0.4.7 and update aegir and its lintness ([eadf560](https://github.com/ipfs/js-ipfsd-ctl/commit/eadf560))



<a name="0.19.0"></a>
# [0.19.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.18.3...v0.19.0) (2017-02-16)



<a name="0.18.3"></a>
## [0.18.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.18.2...v0.18.3) (2017-02-09)



<a name="0.18.2"></a>
## [0.18.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.18.1...v0.18.2) (2017-01-31)



<a name="0.18.1"></a>
## [0.18.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.18.0...v0.18.1) (2017-01-04)


### Bug Fixes

* drop is-running to 1.0.5 ([#144](https://github.com/ipfs/js-ipfsd-ctl/issues/144)) ([6e98edb](https://github.com/ipfs/js-ipfsd-ctl/commit/6e98edb))



<a name="0.18.0"></a>
# [0.18.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.17.0...v0.18.0) (2016-12-23)


### Bug Fixes

* fail gracefully when config file is not found ([a200a15](https://github.com/ipfs/js-ipfsd-ctl/commit/a200a15))


### Features

* **init:** Add the possibility to pass options to init() ([9c48373](https://github.com/ipfs/js-ipfsd-ctl/commit/9c48373))
* better stream handling ([#140](https://github.com/ipfs/js-ipfsd-ctl/issues/140)) ([a0adc82](https://github.com/ipfs/js-ipfsd-ctl/commit/a0adc82))



<a name="0.17.0"></a>
# [0.17.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.16.0...v0.17.0) (2016-10-29)



<a name="0.16.0"></a>
# [0.16.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.15.0...v0.16.0) (2016-09-29)


### Bug Fixes

* ensure setting the config cbs only once ([e44a8ac](https://github.com/ipfs/js-ipfsd-ctl/commit/e44a8ac))


### Features

* upgrade to go-ipfs 0.4.3 ([a2ebc1a](https://github.com/ipfs/js-ipfsd-ctl/commit/a2ebc1a))



<a name="0.15.0"></a>
# [0.15.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.14.0...v0.15.0) (2016-09-16)


### Bug Fixes

* **shutdown:** fixed bugs in stopDaemon ([af21eb0](https://github.com/ipfs/js-ipfsd-ctl/commit/af21eb0))
* **startDaemon:** fix the behavior of startDeamon ([0deb7e5](https://github.com/ipfs/js-ipfsd-ctl/commit/0deb7e5))
* **test:** change hash of src test ([349a44c](https://github.com/ipfs/js-ipfsd-ctl/commit/349a44c))
* make the linter happy for D# ([9a5c0e2](https://github.com/ipfs/js-ipfsd-ctl/commit/9a5c0e2))
* rm unused var (thanks, linter) ([6d21086](https://github.com/ipfs/js-ipfsd-ctl/commit/6d21086))
* **tests:** guarded func to avoid it being called twice ([2c8a3c1](https://github.com/ipfs/js-ipfsd-ctl/commit/2c8a3c1))


### Features

* **startDeamon:** allow passing flags to ipfs daemon ([c7ea808](https://github.com/ipfs/js-ipfsd-ctl/commit/c7ea808))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.13.0...v0.14.0) (2016-05-18)


### Features

* upgrade dependencies to latest ([0231951](https://github.com/ipfs/js-ipfsd-ctl/commit/0231951))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.12.0...v0.13.0) (2016-05-01)



<a name="0.12.0"></a>
# [0.12.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.11.0...v0.12.0) (2016-04-27)



<a name="0.11.0"></a>
# [0.11.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.10.1...v0.11.0) (2016-04-22)



<a name="0.10.1"></a>
## [0.10.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.10.0...v0.10.1) (2016-04-11)



<a name="0.10.0"></a>
# [0.10.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.9.1...v0.10.0) (2016-04-09)



<a name="0.9.1"></a>
## [0.9.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.9.0...v0.9.1) (2016-04-08)



<a name="0.9.0"></a>
# [0.9.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.8.1...v0.9.0) (2016-04-08)



<a name="0.8.1"></a>
## [0.8.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.8.0...v0.8.1) (2016-01-31)



<a name="0.8.0"></a>
# [0.8.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.7.1...v0.8.0) (2016-01-22)


### Features

* Upgrade to ipfs@0.3.11 ([fc8bbef](https://github.com/ipfs/js-ipfsd-ctl/commit/fc8bbef))



<a name="0.7.1"></a>
## [0.7.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.6.3...v0.7.1) (2015-12-18)



<a name="0.6.3"></a>
## [0.6.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.6.2...v0.6.3) (2015-11-14)



<a name="0.6.2"></a>
## [0.6.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.6.1...v0.6.2) (2015-11-14)


### Features

* Add configurable $IPFS_EXEC ([5aa011b](https://github.com/ipfs/js-ipfsd-ctl/commit/5aa011b))
* Require node.js >= 4 ([f25143b](https://github.com/ipfs/js-ipfsd-ctl/commit/f25143b))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.6.0...v0.6.1) (2015-11-02)


### Bug Fixes

* Switch shutdown handler library ([491268b](https://github.com/ipfs/js-ipfsd-ctl/commit/491268b)), closes [#19](https://github.com/ipfs/js-ipfsd-ctl/issues/19)



<a name="0.6.0"></a>
# [0.6.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.5.6...v0.6.0) (2015-10-31)



<a name="0.5.6"></a>
## [0.5.6](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.5.5...v0.5.6) (2015-10-29)



<a name="0.5.5"></a>
## [0.5.5](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.5.4...v0.5.5) (2015-10-24)



<a name="0.5.4"></a>
## [0.5.4](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.5.3...v0.5.4) (2015-10-16)



<a name="0.5.3"></a>
## [0.5.3](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.5.2...v0.5.3) (2015-10-16)



<a name="0.5.2"></a>
## [0.5.2](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.5.1...v0.5.2) (2015-10-11)



<a name="0.5.1"></a>
## [0.5.1](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.5.0...v0.5.1) (2015-09-25)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/ipfs/js-ipfsd-ctl/compare/v0.4.1...v0.5.0) (2015-09-18)



<a name="0.4.1"></a>
## 0.4.1 (2015-09-18)



