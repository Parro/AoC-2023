import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import second from './second';

describe('Day 9 second exercise tests', () => {
  it('should sum all the predicted previous value for each row', () => {
    const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

    const expectedOutput = 2;

    const output = second(input);

    assert.strictEqual(output, expectedOutput);
  });
});
