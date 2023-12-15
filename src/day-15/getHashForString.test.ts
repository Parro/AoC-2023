import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import getHashForString from './getHashForString';

describe('Day 15 getHashForString exercise tests', () => {
  it('should return the hash of a string', () => {
    const input = 'HASH';
    const expectedOutput = 52;

    const output = getHashForString(input);

    assert.equal(output, expectedOutput);
  });
});
