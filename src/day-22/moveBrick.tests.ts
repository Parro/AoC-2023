import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import moveBrick from './moveBrick';

describe('Day 22 brickFall tests', () => {
  it('should move a brick in the level below', () => {
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

    const brick = { '4': { x: [2], y: [0, 1, 2] } };

    const z = 5;
    const brickIndex = 0;

    const expectedOutput = {
      newBrickMaps: [
        [],
        [{ '0': { x: [1], y: [0, 1, 2] } }],
        [{ '1': { x: [0, 1, 2], y: [0] } }, { '2': { x: [0, 1, 2], y: [2] } }],
        [],
        [{ '3': { x: [0], y: [0, 1, 2] } }, { '4': { x: [2], y: [0, 1, 2] } }],
        [],
        [{ '5': { x: [0, 1, 2], y: [1] } }],
        [],
        [{ '6': { x: [1], y: [1] } }],
        [{ '6': { x: [1], y: [1] } }],
      ],
      newBrickIndex: 1,
    };

    const output = moveBrick({ brickMaps, brick, z, brickIndex });

    assert.deepEqual(output, expectedOutput);
  });
});
