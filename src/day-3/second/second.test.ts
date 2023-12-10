import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import second from './second';

describe('Day 3 second exercise tests', () => {
  it('should sum all numbers that are adjacent to a gear (*)', () => {
    const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

    const expectedOutput = 467835;

    const output = second(input);

    assert.strictEqual(output, expectedOutput);
  });
});
