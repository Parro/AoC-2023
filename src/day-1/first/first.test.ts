import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 1 first exercise tests', () => {
  it('tests that fisrt and last digit in row are combined and sum with other rows', () => {
    const input = `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`;

    const expectedOutput = 142;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
