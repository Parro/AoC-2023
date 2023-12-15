import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import second from './second';

describe('Day 8 second exercise tests', () => {
  it('should find the minimum steps to go from every step that ends with A to a step the ends with Z', () => {
    const input = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`;

    const expectedOutput = 6;

    const output = second(input);

    assert.strictEqual(output, expectedOutput);
  });
});
