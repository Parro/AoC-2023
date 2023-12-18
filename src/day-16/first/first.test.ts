import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 9 first exercise tests', () => {
  it('should find the energized tiles in the layout', () => {
    const input = `.|...\\....
|.-.\\.....
.....|-...
........|.
..........
.........\\
..../.\\\\..
.-.-/..|..
.|....-|.\\
../.|....`;

    const expectedOutput = 46;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
