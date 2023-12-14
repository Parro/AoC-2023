import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveLeft from './moveLeft';

describe('Day 14 moveLeft tests', () => {
  it('should multiply the bid of each hand with the rank', () => {
    const input = ['O', 'O', '.', 'O', '.', 'O', '.', '.', '#', '#'];

    const expectedOutput = ['O', 'O', 'O', 'O', '.', '.', '.', '.', '#', '#'];

    const output = moveLeft(input);

    assert.deepEqual(output, expectedOutput);
  });
});
