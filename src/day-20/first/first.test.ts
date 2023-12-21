import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 20 first exercise tests', () => {
  it('should multiply all the low pulses sent with all the high pulses', () => {
    const input = `broadcaster -> a, b, c
    %a -> b
    %b -> c
    %c -> inv
    &inv -> a`;

    const expectedOutput = 32000000;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
