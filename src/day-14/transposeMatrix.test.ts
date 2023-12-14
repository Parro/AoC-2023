import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import transposeMatrix from './transposeMatrix';

describe('Day 14 transposeMatrix tests', () => {
  it('should transpose a matrix', () => {
    const input = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ];
    const expectedOutput = [
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['3', '6', '9'],
    ];

    const output = transposeMatrix(input);

    assert.deepEqual(output, expectedOutput);
  });
});
