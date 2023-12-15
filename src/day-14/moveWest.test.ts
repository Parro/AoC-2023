import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveWest from './moveWest';

describe('Day 14 moveWest tests', () => {
  it('should move the O to the beginning of the row in empty space (.) stopping on blocks (#)', () => {
    const input = ['O', 'O', '.', 'O', '.', 'O', '.', '.', '#', '#'];

    const expectedOutput = ['O', 'O', 'O', 'O', '.', '.', '.', '.', '#', '#'];

    const output = moveWest(input);

    assert.deepEqual(output, expectedOutput);
  });
});
