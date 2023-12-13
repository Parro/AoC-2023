import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import higherCardCompare from './higherCardCompare';

const cardOrder = [
  'A',
  'K',
  'Q',
  'J',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
];
describe('Day 7 higherCardCompare exercise tests', () => {
  it('should return 1 because the first hand has the higher card', () => {
    const firstHand = ['Q', 'Q', 'Q', 'J', 'A'];
    const secondHand = ['T', '5', '5', 'J', '5'];

    const expectedOutput = 1;

    const output = higherCardCompare({ cardOrder, firstHand, secondHand });

    assert.strictEqual(output, expectedOutput);
  });
  it('should return -1 because the second hand has the higher card', () => {
    const firstHand = ['2', 'A', 'A', 'A', 'A'];
    const secondHand = ['3', '3', '3', '3', '2'];

    const expectedOutput = -1;

    const output = higherCardCompare({ cardOrder, firstHand, secondHand });

    assert.strictEqual(output, expectedOutput);
  });
});
