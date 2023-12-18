import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import advanceBeam from './advanceBeam';

describe('Day 9 first exercise tests', () => {
  it('should advance the beam in the layout changing directions on the mirror', () => {
    const matrix = [
      ['.', '.', '.', '.', '.', '\\', '.', '.', '.', '.'],
      ['|', '.', '-', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '/', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '|', '.'],
      ['.', '.', '.', '\\', '.', '/', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '\\'],
      ['.', '.', '.', '.', '/', '.', '\\', '\\', '.', '.'],
      ['.', '-', '.', '-', '/', '.', '.', '|', '.', '.'],
      ['.', '|', '.', '.', '.', '.', '-', '|', '.', '\\'],
      ['.', '.', '/', '/', '.', '|', '.', '.', '.', '.'],
    ];

    const expectedOutput = [
      { tile: { x: 0, y: 0 }, direction: 'toRight' },
      { tile: { x: 1, y: 0 }, direction: 'toRight' },
      { tile: { x: 2, y: 0 }, direction: 'toRight' },
      { tile: { x: 3, y: 0 }, direction: 'toRight' },
      { tile: { x: 4, y: 0 }, direction: 'toRight' },
      { tile: { x: 5, y: 0 }, direction: 'toRight' },

      { tile: { x: 5, y: 1 }, direction: 'toDown' },
      { tile: { x: 5, y: 2 }, direction: 'toDown' },
      { tile: { x: 5, y: 3 }, direction: 'toDown' },
      { tile: { x: 5, y: 4 }, direction: 'toDown' },

      { tile: { x: 4, y: 4 }, direction: 'toLeft' },
      { tile: { x: 3, y: 4 }, direction: 'toLeft' },

      { tile: { x: 3, y: 3 }, direction: 'toUp' },
      { tile: { x: 3, y: 2 }, direction: 'toUp' },

      { tile: { x: 4, y: 2 }, direction: 'toRight' },
      { tile: { x: 5, y: 2 }, direction: 'toRight' },
      { tile: { x: 6, y: 2 }, direction: 'toRight' },
      { tile: { x: 7, y: 2 }, direction: 'toRight' },
      { tile: { x: 8, y: 2 }, direction: 'toRight' },
      { tile: { x: 9, y: 2 }, direction: 'toRight' },
    ];

    const output = advanceBeam({
      matrix,
      start: { tile: { x: 0, y: 0 }, direction: 'toRight' },
      energized: [{ tile: { x: 0, y: 0 }, direction: 'toRight' }],
    });

    assert.deepEqual(output, expectedOutput);
  });

  it('should advance the beam in the layout changing splitting on a splitter', () => {
    const matrix = [
      ['.', '.', '.', '.', '.', '\\', '.', '.', '.', '.'],
      ['|', '.', '-', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '/', '.', '-', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '|', '.'],
      ['.', '.', '.', '|', '.', '/', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '\\'],
      ['.', '.', '.', '-', '.', '.', '.', '.', '.', '.'],
      ['.', '-', '.', '.', '/', '.', '.', '|', '.', '.'],
      ['.', '|', '.', '.', '.', '.', '-', '|', '.', '\\'],
      ['.', '.', '/', '.', '.', '|', '.', '.', '.', '.'],
    ];

    const expectedOutput = [
      { tile: { x: 0, y: 0 }, direction: 'toRight' },
      { tile: { x: 1, y: 0 }, direction: 'toRight' },
      { tile: { x: 2, y: 0 }, direction: 'toRight' },
      { tile: { x: 3, y: 0 }, direction: 'toRight' },
      { tile: { x: 4, y: 0 }, direction: 'toRight' },
      { tile: { x: 5, y: 0 }, direction: 'toRight' },

      { tile: { x: 5, y: 1 }, direction: 'toDown' },
      { tile: { x: 5, y: 2 }, direction: 'toDown' },

      { tile: { x: 4, y: 2 }, direction: 'toLeft' },
      { tile: { x: 3, y: 2 }, direction: 'toLeft' },

      { tile: { x: 3, y: 3 }, direction: 'toDown' },
      { tile: { x: 3, y: 4 }, direction: 'toDown' },
      { tile: { x: 3, y: 5 }, direction: 'toDown' },
      { tile: { x: 3, y: 6 }, direction: 'toDown' },

      { tile: { x: 2, y: 6 }, direction: 'toLeft' },
      { tile: { x: 1, y: 6 }, direction: 'toLeft' },
      { tile: { x: 0, y: 6 }, direction: 'toLeft' },

      { tile: { x: 6, y: 2 }, direction: 'toRight' },
      { tile: { x: 7, y: 2 }, direction: 'toRight' },
      { tile: { x: 8, y: 2 }, direction: 'toRight' },
      { tile: { x: 9, y: 2 }, direction: 'toRight' },

      { tile: { x: 4, y: 6 }, direction: 'toRight' },
      { tile: { x: 5, y: 6 }, direction: 'toRight' },
      { tile: { x: 6, y: 6 }, direction: 'toRight' },
      { tile: { x: 7, y: 6 }, direction: 'toRight' },
      { tile: { x: 8, y: 6 }, direction: 'toRight' },
      { tile: { x: 9, y: 6 }, direction: 'toRight' },
    ];

    const output = advanceBeam({
      matrix,
      start: { tile: { x: 0, y: 0 }, direction: 'toRight' },
      energized: [{ tile: { x: 0, y: 0 }, direction: 'toRight' }],
    });

    assert.deepEqual(output, expectedOutput);
  });
});
