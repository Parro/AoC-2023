import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import followPath from './followPath';

describe('Day 8 followPath tests', () => {
  it('should return the minimum steps required to reach ZZZ', () => {
    const entryPoint = 'AAA';
    const map = {
      AAA: { L: 'BBB', R: 'BBB' },
      BBB: { L: 'AAA', R: 'ZZZ' },
      ZZZ: { L: 'ZZZ', R: 'ZZZ' },
    };
    const instructions = ['L', 'L', 'R'];

    const expectedOutput = 6;

    const output = followPath({ entryPoint, map, instructions });

    assert.strictEqual(output, expectedOutput);
  });
});
