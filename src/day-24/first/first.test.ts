import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 24 first exercise tests', () => {
  it('should get the number of intersecting path', () => {
    const input = `19, 13, 30 @ -2,  1, -2
18, 19, 22 @ -1, -1, -2
20, 25, 34 @ -2, -2, -4
12, 31, 28 @ -1, -2, -1
20, 19, 15 @  1, -5, -3`;

    const expectedOutput = 2;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
