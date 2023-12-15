import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveEast from './moveEast';

describe('Day 14 moveEast tests', () => {
  it('should move the O to the end of the row in empty space (.) stopping on blocks (#)', () => {
    const input = ['O', 'O', '.', 'O', '.', 'O', '.', '.', '#', '#'];

    const expectedOutput = ['.', '.', '.', '.', 'O', 'O', 'O', 'O', '#', '#'];

    const output = moveEast(input);

    assert.deepEqual(output, expectedOutput);
  });
});
