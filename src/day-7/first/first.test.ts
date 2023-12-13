import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import first from './first';

describe('Day 7 first exercise tests', () => {
  it('should multiply the bid of each hand with the rank', () => {
    const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

    const expectedOutput = 6440;

    const output = first(input);

    assert.strictEqual(output, expectedOutput);
  });
});
