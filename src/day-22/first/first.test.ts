import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 22 first exercise tests', () => {
  it('should return the number of bricks that do not support other ones, so they can be disintegrated', () => {
    const input = `1,0,1~1,2,1
0,0,2~2,0,2
0,2,3~2,2,3
0,0,4~0,2,4
2,0,5~2,2,5
0,1,6~2,1,6
1,1,8~1,1,9`;

    const expectedOutput = 5;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
