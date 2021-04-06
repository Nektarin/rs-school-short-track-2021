const assert = require('assert');
const deleteDigit = require('../src/05-delete-digit');
it.optional = require('../extensions/it-optional');

describe('05-delete-digit', () => {
  it.optional('should return the maximal number you can obtain by deleting exactly one digit of the given number', () => {
    assert.strictEqual(deleteDigit(152), 52);
    assert.strictEqual(deleteDigit(1001), 101);
    assert.strictEqual(deleteDigit(10), 1);
    assert.strictEqual(deleteDigit(222219), 22229);
    assert.strictEqual(deleteDigit(109), 19);
  });
});
