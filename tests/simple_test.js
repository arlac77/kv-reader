/* jslint node: true, esnext: true */

'use strict';

const path = require('path'),
  fs = require('fs');

import test from 'ava';

const {
  reader
} = require('../dist/reader');

test('has values', async t => {
  const kv = await reader(fs.createReadStream(path.join(__dirname, '..', 'tests', 'fixtures', 's1')));
  t.deepEqual(kv.passtype, 'keychain');
  t.deepEqual(kv.username, 'abcdefg');
});

test('rejects on errors', async t => {
  try {
    const kv = await reader(fs.createReadStream(path.join(__dirname, '..', 'tests', 'fixtures', 'bad')));
    t.fail();
  } catch (e) {
    t.pass();
  }
});
