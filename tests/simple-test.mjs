import test from "ava";
import { join, dirname } from "path";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { reader } from "../src/reader.mjs";

const here = dirname(fileURLToPath(import.meta.url));

test("has values", async t => {
  const values = {};
  await reader(
    createReadStream(join(here, "..", "tests", "fixtures", "s1")),
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
      createReadStream(join(here, "..", "tests", "fixtures", "bad")),
      (key, value) => {}
    );
    t.fail();
  } catch (e) {
    t.pass();
  }
});
