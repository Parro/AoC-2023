import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 14 first exercise tests', () => {
  it('should multiply the bid of each hand with the rank', () => {
    const input = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

    const expectedOutput = 136;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
