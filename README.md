[![npm](https://img.shields.io/npm/v/kv-reader.svg)](https://www.npmjs.com/package/kv-reader)
[![Greenkeeper](https://badges.greenkeeper.io/arlac77/kv-reader)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/kv-reader)
[![Build Status](https://secure.travis-ci.org/arlac77/kv-reader.png)](http://travis-ci.org/arlac77/kv-reader)
[![bithound](https://www.bithound.io/github/arlac77/kv-reader/badges/score.svg)](https://www.bithound.io/github/arlac77/kv-reader)
[![codecov.io](http://codecov.io/github/arlac77/kv-reader/coverage.svg?branch=master)](http://codecov.io/github/arlac77/kv-reader?branch=master)
[![Coverage Status](https://coveralls.io/repos/arlac77/kv-reader/badge.svg)](https://coveralls.io/r/arlac77/kv-reader)
[![Code Climate](https://codeclimate.com/github/arlac77/kv-reader/badges/gpa.svg)](https://codeclimate.com/github/arlac77/kv-reader)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/kv-reader/badge.svg)](https://snyk.io/test/github/arlac77/kv-reader)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/kv-reader.svg?style=flat-square)](https://github.com/arlac77/kv-reader/issues)
[![Stories in Ready](https://badge.waffle.io/arlac77/kv-reader.svg?label=ready&title=Ready)](http://waffle.io/arlac77/kv-reader)
[![Dependency Status](https://david-dm.org/arlac77/kv-reader.svg)](https://david-dm.org/arlac77/kv-reader)
[![devDependency Status](https://david-dm.org/arlac77/kv-reader/dev-status.svg)](https://david-dm.org/arlac77/kv-reader#info=devDependencies)
[![docs](http://inch-ci.org/github/arlac77/kv-reader.svg?branch=master)](http://inch-ci.org/github/arlac77/kv-reader)
[![downloads](http://img.shields.io/npm/dm/kv-reader.svg?style=flat-square)](https://npmjs.org/package/kv-reader)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

kv-reader
==========
decode kv config files as used by svn

example
======
```
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
```

```javascript
const fs = require('fs');
const { reader } = require('kv-reader');

const kv = wait reader(fs.createReadStream('fixtures/s1'));

foreach (const [k,v] of kv)) {
  console.log(`${k} = ${v}`);
}
```

```
passtype = keychain
svn:realmstring = <https://subversion.assembla.com:443> Assembla Restricted Area
username = abcdefg
```

# API Reference

* <a name="reader"></a>

## reader(stream) ⇒ <code>Promise</code>
Transforms a input stream of kv data into a object
with key value pairs assigned

**Kind**: global function  
**Returns**: <code>Promise</code> - resolving to object  

| Param | Type |
| --- | --- |
| stream | <code>Stream</code> | 


* * *

install
=======

With [npm](http://npmjs.org) do:

```shell
npm install kv-reader
```

license
=======

BSD-2-Clause
=======
