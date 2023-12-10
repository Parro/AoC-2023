import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './getNumbers';

describe('Day 4 getNumbers tests', () => {
  it('should get array of two chars numbers from string', () => {
    const input = ' 1 21 53 59 44';

    const expectedOutput = [' 1', '21', '53', '59', '44'];

    const output = first(input);

    assert.deepEqual(output, expectedOutput);
  });
});
