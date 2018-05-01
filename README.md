[![npm](https://img.shields.io/npm/v/kv-reader.svg)](https://www.npmjs.com/package/kv-reader)
[![Greenkeeper](https://badges.greenkeeper.io/arlac77/kv-reader.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/kv-reader)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://secure.travis-ci.org/arlac77/kv-reader.png)](http://travis-ci.org/arlac77/kv-reader)
[![codecov.io](http://codecov.io/github/arlac77/kv-reader/coverage.svg?branch=master)](http://codecov.io/github/arlac77/kv-reader?branch=master)
[![Coverage Status](https://coveralls.io/repos/arlac77/kv-reader/badge.svg)](https://coveralls.io/r/arlac77/kv-reader)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/kv-reader/badge.svg)](https://snyk.io/test/github/arlac77/kv-reader)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/kv-reader.svg?style=flat-square)](https://github.com/arlac77/kv-reader/issues)
[![Stories in Ready](https://badge.waffle.io/arlac77/kv-reader.svg?label=ready&title=Ready)](http://waffle.io/arlac77/kv-reader)
[![Dependency Status](https://david-dm.org/arlac77/kv-reader.svg)](https://david-dm.org/arlac77/kv-reader)
[![devDependency Status](https://david-dm.org/arlac77/kv-reader/dev-status.svg)](https://david-dm.org/arlac77/kv-reader#info=devDependencies)
[![docs](http://inch-ci.org/github/arlac77/kv-reader.svg?branch=master)](http://inch-ci.org/github/arlac77/kv-reader)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![downloads](http://img.shields.io/npm/dm/kv-reader.svg?style=flat-square)](https://npmjs.org/package/kv-reader)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# kv-reader

decode kv config files as used by svn

# example

    K 8
    passtype
    V 8
    keychain
    K 15
    svn:realmstring
    V 62
    <https://subversion.assembla.com:443> Assembla Restricted Area
    K 8
    username
    V 7
    abcdefg
    END

```javascript
const fs = require('fs');
const { reader } = require('kv-reader');

async function sample() {
  const kv = await reader(fs.createReadStream('tests/fixtures/s1'));
  console.log(`passtype = ${kv.get('passtype')}`);
}

sample();
```

    passtype = keychain
    svn:realmstring = <https://subversion.assembla.com:443> Assembla Restricted Area
    username = abcdefg

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [reader](#reader)

## reader

Transforms a input stream of kv data into a object
with key value pairs assigned

**Parameters**

-   `stream` **[Stream](https://nodejs.org/api/stream.html)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>>** resolving to object

# install

With [npm](http://npmjs.org) do:

```shell
npm install kv-reader
```

# license

# BSD-2-Clause
