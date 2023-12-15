import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import second from './second';

describe('Day 14 second exercise tests', () => {
  it('should move the rocks to north, west, south, east for 1000 cycles', () => {
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

    const expectedOutput = 64;

    const output = second(input);

    assert.strictEqual(output, expectedOutput);
  });
});
