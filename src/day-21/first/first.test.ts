import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 21 first exercise tests', () => {
  it('should return how many garden plots the elf can reach in 6 steps', () => {
    const input = `...........
.....###.#.
.###.##..#.
..#.#...#..
....#.#....
.##..S####.
.##..#...#.
.......##..
.##.#.####.
.##..##.##.
...........`;
    const steps = 6;

    const expectedOutput = 16;

    const output = first(input, steps);

    assert.strictEqual(output, expectedOutput);
  });
});
