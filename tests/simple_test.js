/* global describe, it */
/* jslint node: true, esnext: true */

'use strict';

const chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  path = require('path'),
  fs = require('fs');

const {
  reader
} = require('../dist/reader');

describe('reader', () => {
  it('has values', () => reader(fs.createReadStream(path.join(__dirname, 'fixtures', 's1'))).then(kv => {
    assert.equal(kv.passtype, 'keychain');
    assert.equal(kv.username, 'abcdefg');
  }));
});
