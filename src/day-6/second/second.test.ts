import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import second from './second';

describe('Day 6 second exercise tests', () => {
  it('should multiply all the possible time to win each race', () => {
    const input = `Time:      7  15   30
    Distance:  9  40  200`;

    const expectedOutput = 71503;

    const output = second(input);

    assert.strictEqual(output, expectedOutput);
  });
});
