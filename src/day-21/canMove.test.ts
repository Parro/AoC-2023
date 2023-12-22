import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import canMove from './canMove';

describe('Day 3 canMove tests', () => {
  it('should return return the empty positions in vertical and horizontal', () => {
    const matrix = [
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '#', '#', '#', '.', '#', '.'],
      ['.', '#', '#', '#', '.', '#', '#', '.', '.', '#', '.'],
      ['.', '.', '#', '.', '#', '.', '.', '.', '#', '.', '.'],
      ['.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '.'],
      ['.', '#', '#', '.', '.', 'S', '#', '#', '#', '#', '.'],
      ['.', '#', '#', '.', '.', '#', '.', '.', '.', '#', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.'],
      ['.', '#', '#', '.', '#', '.', '#', '#', '#', '#', '.'],
      ['.', '#', '#', '.', '.', '#', '#', '.', '#', '#', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ];
    const x = 5;
    const y = 3;
    const checkFunction = (matrixValue: string) => matrixValue === '.';

    const expectedOutput = [
      [5, 4],
      [6, 3],
    ];

    const output = canMove({ matrix, x, y, checkFunction });

    assert.deepEqual(output, expectedOutput);
  });

  it('should return return the empty positions in vertical and horizontal - near the border', () => {
    const matrix = [
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '#', '#', '#', '.', '#', '.'],
      ['.', '#', '#', '#', '.', '#', '#', '.', '.', '#', '.'],
      ['.', '.', '#', '.', '#', '.', '.', '.', '#', '.', '.'],
      ['.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '.'],
      ['.', '#', '#', '.', '.', 'S', '#', '#', '#', '#', '.'],
      ['.', '#', '#', '.', '.', '#', '.', '.', '.', '#', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.'],
      ['.', '#', '#', '.', '#', '.', '#', '#', '#', '#', '.'],
      ['.', '#', '#', '.', '.', '#', '#', '.', '#', '#', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ];
    const x = 0;
    const y = 1;
    const checkFunction = (matrixValue: string) => matrixValue === '.' || matrixValue === 'S';

    const expectedOutput = [
      [0, 0],
      [0, 2],
      [1, 1],
    ];

    const output = canMove({ matrix, x, y, checkFunction });

    assert.deepEqual(output, expectedOutput);
  });

  it('should return return the empty positions in vertical and horizontal - near start', () => {
    const matrix = [
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '#', '#', '#', '.', '#', '.'],
      ['.', '#', '#', '#', '.', '#', '#', '.', '.', '#', '.'],
      ['.', '.', '#', '.', '#', '.', '.', '.', '#', '.', '.'],
      ['.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '.'],
      ['.', '#', '#', '.', '.', 'S', '#', '#', '#', '#', '.'],
      ['.', '#', '#', '.', '.', '#', '.', '.', '.', '#', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.'],
      ['.', '#', '#', '.', '#', '.', '#', '#', '#', '#', '.'],
      ['.', '#', '#', '.', '.', '#', '#', '.', '#', '#', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ];
    const x = 5;
    const y = 4;
    const checkFunction = (matrixValue: string) => matrixValue === '.' || matrixValue === 'S';

    const expectedOutput = [
      [5, 3],
      [5, 5]
    ];

    const output = canMove({ matrix, x, y, checkFunction });

    assert.deepEqual(output, expectedOutput);
  });
});
