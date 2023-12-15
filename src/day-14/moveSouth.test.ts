import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveSouth from './moveSouth';

describe('Day 14 moveSouth tests', () => {
  it('should move the O to the bottom of the column in empty space (.) stopping on blocks (#)', () => {
    const input = [
      ['O'],
      ['O'],
      ['.'],
      ['O'],
      ['.'],
      ['O'],
      ['.'],
      ['.'],
      ['#'],
      ['#'],
    ];

    const expectedOutput = [
      ['.'],
      ['.'],
      ['.'],
      ['.'],
      ['O'],
      ['O'],
      ['O'],
      ['O'],
      ['#'],
      ['#'],
    ];

    const output = moveSouth(input);

    assert.deepEqual(output, expectedOutput);
  });
});
