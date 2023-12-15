import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import predictNumber from './predictNumber';

describe('Day 9 predictNumber tests', () => {
  it('should predict the next step in a sequence', () => {
    const sequence = [10, 13, 16, 21, 30, 45];
    const expectedOutput = 23;

    const output = predictNumber({sequence});

    assert.deepEqual(output, expectedOutput);
  });
});
