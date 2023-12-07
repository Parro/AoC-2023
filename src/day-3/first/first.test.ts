import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 3 first exercise tests', () => {
  it('should sum all number adjacent to a symbol that is not a dot', () => {
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

    const expectedOutput = 4361;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
