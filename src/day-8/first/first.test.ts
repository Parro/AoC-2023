import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 8 first exercise tests', () => {
  it('should find the minimum steps to go from AAA to ZZZ', () => {
    const input = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

    const expectedOutput = 6;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
