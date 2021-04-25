[![npm](https://img.shields.io/npm/v/kv-reader.svg)](https://www.npmjs.com/package/kv-reader)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/kv-reader)](https://bundlephobia.com/result?p=kv-reader)
[![downloads](http://img.shields.io/npm/dm/kv-reader.svg?style=flat-square)](https://npmjs.org/package/kv-reader)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/kv-reader.svg?style=flat-square)](https://github.com/arlac77/kv-reader/issues)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Farlac77%2Fkv-reader%2Fbadge&style=flat)](https://actions-badge.atrox.dev/arlac77/kv-reader/goto)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/kv-reader/badge.svg)](https://snyk.io/test/github/arlac77/kv-reader)
[![Coverage Status](https://coveralls.io/repos/arlac77/kv-reader/badge.svg)](https://coveralls.io/github/arlac77/kv-reader)

# kv-reader

decode kv config files as used by subversion

# example

```txt
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

<!-- skip-example -->

```javascript
import { createReadStream } from "fs";
import { reader } from "kv-reader";

async function sample() {
  const kv = {};
  await reader(
    createReadStream("tests/fixtures/s1"),
    (key, value) => (kv[key] = value)
  );
  console.log(`passtype = ${kv.passtype}`);
}

sample();
```

    passtype = keychain
    svn:realmstring = <https://subversion.assembla.com:443> Assembla Restricted Area
    username = abcdefg

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [reader](#reader)
    *   [Parameters](#parameters)
*   [ValueProvider](#valueprovider)
    *   [Parameters](#parameters-1)

## reader

Transforms a input stream of kv data into a object
with key value pairs assigned

### Parameters

*   `stream` **[Stream](https://nodejs.org/api/stream.html)** 
*   `gotValue` **[ValueProvider](#valueprovider)** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** resolving to object

## ValueProvider

call back function to provide key and value

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

### Parameters

*   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `value` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# install

With [npm](http://npmjs.org) do:

```shell
npm install kv-reader
```

# license

# BSD-2-Clause
