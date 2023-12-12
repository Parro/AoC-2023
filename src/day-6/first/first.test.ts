import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 6 first exercise tests', () => {
  it('should multiply all the possible time to win each race', () => {
    const input = `Time:      7  15   30
    Distance:  9  40  200`;

    const expectedOutput = 288;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
