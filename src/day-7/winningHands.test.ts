import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import winningHands from './winningHands';

describe('Day 7 winningHands tests', () => {
  it('should return 1 because the hand has all five cards with the same label', () => {
    const hand = 'AAAAA';
    const expectedOutput = 1;

    const output = winningHands(hand);

    assert.strictEqual(output, expectedOutput);
  });

  it('should return 2 because the hand has four cards have the same label and one card has a different label', () => {
    const hand = 'AA8AA';
    const expectedOutput = 2;

    const output = winningHands(hand);

    assert.strictEqual(output, expectedOutput);
  });

  it('should return 3 because the hand has three cards have the same label, and the remaining two cards share a different label', () => {
    const hand = '23332';
    const expectedOutput = 3;

    const output = winningHands(hand);

    assert.strictEqual(output, expectedOutput);
  });

  it('should return 4 because the hand has three cards have the same label, and the remaining two cards are each different from any other card in the hand', () => {
    const hand = 'TTT98';
    const expectedOutput = 4;

    const output = winningHands(hand);

    assert.strictEqual(output, expectedOutput);
  });

  it('should return 5 because the hand has two cards share one label, two other cards share a second label, and the remaining card has a third label', () => {
    const hand = '23432';
    const expectedOutput = 5;

    const output = winningHands(hand);

    assert.strictEqual(output, expectedOutput);
  });

  it('should return 6 because the hand has two cards share one label, and the other three cards have a different label from the pair and each other', () => {
    const hand = 'A23A4';
    const expectedOutput = 6;

    const output = winningHands(hand);

    assert.strictEqual(output, expectedOutput);
  });
  
  it("should return 7 because the hand has all cards' labels are distinct", () => {
    const hand = '23456';
    const expectedOutput = 7;

    const output = winningHands(hand);

    assert.strictEqual(output, expectedOutput);
  });
});
