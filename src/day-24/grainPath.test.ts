import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import grainPath from './grainPath';

describe('Day 24 grainPath tests', () => {
  it('should get the maximum and minimum coordinates for a grain path', () => {
    const coord = { x: 19, y: 20 };
    const velocity = { x: -2, y: 3 };
    const minPosition = 7;
    const maxPosition = 27;

    const expectedOutput = {
      min: [19, 20],
      max: [15, 26],
    };

    const output = grainPath({ coord, velocity, minPosition, maxPosition });

    assert.deepEqual(output, expectedOutput);
  });
});
