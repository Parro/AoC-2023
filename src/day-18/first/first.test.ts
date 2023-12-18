import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 18 first exercise tests', () => {
  it('should dig the lava pool following the directions and fill the inside', () => {
    const input = `R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`;

    const expectedOutput = 62;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
  it('should dig the lava pool following the directions and fill the inside wih negative number', () => {
    const input = `R 5 (#70c710)
U 3 (#0dc571)
L 2 (#5713f0)
U 2 (#d2c081)
L 2 (#59c680)
D 2 (#411b91)
L 1 (#d2c081)
D 3 (#411b91)`;

    const expectedOutput = 30;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
