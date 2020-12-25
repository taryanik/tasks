const assert = require("assert");
const resolve = require("./task_3.js");

assert.strictEqual(resolve(), "Incorrect input type");
assert.strictEqual(resolve(123), "Incorrect input type");
assert.strictEqual(resolve(['test']), "Incorrect input type");

assert.strictEqual(resolve("()"), true);
assert.strictEqual(resolve("()[]{}"), true);
assert.strictEqual(resolve("(]"), false);
assert.strictEqual(resolve("([)]"), false);
assert.strictEqual(resolve("{[]}"), true);
assert.strictEqual(resolve("{}test(test_with_string)[test]"), true);
assert.strictEqual(resolve("{[)]"), false);
assert.strictEqual(resolve("]"), false);
assert.strictEqual(resolve("([)]"), false);
