import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import second from './second';

describe('Day 1 second exercise tests', () => {
  it('should combine first and last digit or word number in row and sum with other rows', () => {
    const input = `two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen
    9sbxg
    8five8vjnzglnrbsbxmjqzfvrsoneightlpx`;

    const expectedOutput = 468;

    const output = second(input);

    assert.strictEqual(output, expectedOutput);
  });
});
