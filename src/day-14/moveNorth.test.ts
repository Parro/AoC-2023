import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveNorth from './moveNorth';

describe('Day 14 moveNorth tests', () => {
  it('should move the O to the top of the column in empty space (.) stopping on blocks (#)', () => {
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
      ['O'],
      ['O'],
      ['O'],
      ['O'],
      ['.'],
      ['.'],
      ['.'],
      ['.'],
      ['#'],
      ['#'],
    ];

    const output = moveNorth(input);

    assert.deepEqual(output, expectedOutput);
  });
});
