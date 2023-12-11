import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import getNumberFromMap from './getNumberFromMap';

describe('getNumberFromMap tests', () => {
  it.skip('should get the number from the range in map', () => {
    const number = 79;
    const map = [
      [50, 98, 2],
      [52, 50, 48],
    ];

    const expectedOutput = 81;

    const output = getNumberFromMap({ number, map });

    assert.strictEqual(output, expectedOutput);
  });

  it('should get the number from the range in map with three ranges', () => {
    const number = 14;
    const map = [
      [0, 15, 37],
      [37, 52, 2],
      [39, 0, 15],
    ];

    const expectedOutput = 53;

    const output = getNumberFromMap({ number, map });

    assert.strictEqual(output, expectedOutput);
  });

  it('should get the number from the range in map with number equal to source start', () => {
    const number = 53;
    const map = [
      [49, 53, 8],
      [0, 11, 42],
      [42, 0, 7],
      [57, 7, 4],
    ];

    const expectedOutput = 49;

    const output = getNumberFromMap({ number, map });

    assert.strictEqual(output, expectedOutput);
  });

  it("should return the original number because it's not in the range in map", () => {
    const number = 13;
    const map = [
      [50, 98, 2],
      [52, 50, 48],
    ];

    const expectedOutput = 13;

    const output = getNumberFromMap({ number, map });

    assert.strictEqual(output, expectedOutput);
  });
});
