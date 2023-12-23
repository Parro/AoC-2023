import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import bricksInContact from './bricksInContact';

describe('Day 22 bricksInContact tests', () => {
  it('should return the number of bricks that do not support other ones, so they can be disintegrated', () => {
    const brickMaps = [
      [],
      [{ '0': { x: [1], y: [0, 1, 2] } }],
      [{ '1': { x: [0, 1, 2], y: [0] } }, { '2': { x: [0, 1, 2], y: [2] } }],
      [],
      [{ '3': { x: [0], y: [0, 1, 2] } }],
      [{ '4': { x: [2], y: [0, 1, 2] } }],
      [{ '5': { x: [0, 1, 2], y: [1] } }],
      [],
      [{ '6': { x: [1], y: [1] } }],
      [{ '6': { x: [1], y: [1] } }],
    ];

    const brick = { '0': { x: [1], y: [0, 1, 2] } };

    const z = 1;
    const brickIndex = 0;

    const expectedOutput = '1_2';

    const output = bricksInContact({ brickMaps, brick, z, brickIndex });

    assert.deepEqual(output, expectedOutput);
  });
});
