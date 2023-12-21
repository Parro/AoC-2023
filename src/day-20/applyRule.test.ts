import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import applyRule from './applyRule';

describe('Day 20 applyRule tests', () => {
  it('should apply rule', () => {
    const configurations = {
      broadcaster: {
        name: 'broadcaster',
        type: 'broadcaster',
        destinations: ['a', 'b', 'c'],
      },
      a: { type: '%', name: 'a', destinations: ['b'] },
      b: { type: '%', name: 'b', destinations: ['c'] },
      c: { type: '%', name: 'c', destinations: ['inv'] },
      inv: { type: '&', name: 'inv', destinations: ['a'] },
    };
    const name = 'broadcaster';
    const moduleStatus = { a: false, b: false, c: false };

    const expectedOutput = {
      moduleStatus: { a: true, b: true, c: true },
      pulses: { low: 3, high: 0 },
      pulse: 0,
    };

    const output = applyRule({
      configurations,
      name,
      moduleStatus,
      pulse: false,
    });

    assert.deepEqual(output, expectedOutput);
  });
});
