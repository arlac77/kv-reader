import test from "ava";
import { createReadStream } from "node:fs";
import { reader } from "kv-reader";

test("has values", async t => {
  const values = {};
  await reader(
    createReadStream(new URL("fixtures/s1", import.meta.url)),
    (key, value) => {
      values[key] = value;
    }
  );
  t.deepEqual(values.passtype, "keychain");
  t.deepEqual(values.username, "abcdefg");
});

test("rejects on errors", async t => {
  try {
    await reader(
      createReadStream(new URL("fixtures/bad", import.meta.url)),
      (key, value) => {}
    );
    t.fail();
  } catch (e) {
    t.pass();
  }
});
