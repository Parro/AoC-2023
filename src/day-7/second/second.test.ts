import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import second from './second';

describe('Day 7 second exercise tests', () => {
  it('should multiply the bid of each hand with the rank using J as jolly', () => {
    const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

    const expectedOutput = 5905;

    const output = second(input);

    assert.strictEqual(output, expectedOutput);
  });
});
