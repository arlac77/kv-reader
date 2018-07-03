import test from 'ava';
import { reader } from '../src/reader';
import { join } from 'path';
import { createReadStream } from 'fs';

test('has values', async t => {
  const kv = await reader(
    createReadStream(join(__dirname, '..', 'tests', 'fixtures', 's1'))
  );
  t.deepEqual(kv.get('passtype'), 'keychain');
  t.deepEqual(kv.get('username'), 'abcdefg');
});

test('rejects on errors', async t => {
  try {
    await reader(
      createReadStream(
        join(__dirname, '..', 'tests', 'fixtures', 'bad')
      )
    );
    t.fail();
  } catch (e) {
    t.pass();
  }
});
