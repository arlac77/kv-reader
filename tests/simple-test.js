import test from "ava";
import { reader } from "../src/reader";
import { join } from "path";
import { createReadStream } from "fs";

test("has values", async t => {
  const values = {};
  await reader(
    createReadStream(join(__dirname, "..", "tests", "fixtures", "s1")),
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
      createReadStream(join(__dirname, "..", "tests", "fixtures", "bad")),
      (key, value) => {}
    );
    t.fail();
  } catch (e) {
    t.pass();
  }
});
