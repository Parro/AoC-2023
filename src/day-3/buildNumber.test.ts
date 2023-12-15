import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import buildNumber from './buildNumber';

describe('Day 3 buildNumber tests', () => {
  it('should build a number from a series of digits with one of the digit has an adjacent symbol', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];

    const x = 6;
    const y = 2;

    const expectedOutput = {
      number: 633,
      coordinates: [
        [6, 2],
        [7, 2],
        [8, 2],
      ],
      hasAdjacentSymbol: true,
    };
    const output = buildNumber({ matrix, x, y });

    assert.deepEqual(output, expectedOutput);
  });

  it('should return null because the series of digits with none of the digit has no adjacent symbol', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];

    const x = 7;
    const y = 5;

    const expectedOutput = {
      number: 58,
      coordinates: [
        [7, 5],
        [8, 5],
      ],
      hasAdjacentSymbol: false,
    };
    const output = buildNumber({ matrix, x, y });

    assert.deepEqual(output, expectedOutput);
  });
});
