const assert = require("assert");
const resolve = require("./task_2.js");

assert.strictEqual(resolve(""), "Incorrect input type");
assert.strictEqual(resolve("test"), "Incorrect input type");
assert.strictEqual(resolve(7), true);
assert.strictEqual(resolve(121), true);
assert.strictEqual(resolve(-121), false);
assert.strictEqual(resolve(10), false);
assert.strictEqual(resolve(-101), false);
