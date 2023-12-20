import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import applyRule from './applyRule';

describe('Day 19 applyRule tests', () => {
  it('should return A based on the workflow rules', () => {
    const rules = [
      { category: 'a', comparison: '>', number: '1716', destination: 'R' },
      { category: 'x', comparison: '<', number: '2000', destination: 'px' },
      { destination: 'A' },
    ];

    const partRating = { x: 2036, m: 264, a: 79, s: 2244 };

    const expectedOutput = 'A';

    const output = applyRule({ rules, partRating });

    assert.equal(output, expectedOutput);
  });

  it('should return R based on the workflow rules', () => {
    const rules = [
      { category: 'a', comparison: '>', number: '70', destination: 'R' },
      { category: 'x', comparison: '<', number: '2000', destination: 'px' },
      { destination: 'A' },
    ];

    const partRating = { x: 2036, m: 264, a: 79, s: 2244 };

    const expectedOutput = 'R';

    const output = applyRule({ rules, partRating });

    assert.equal(output, expectedOutput);
  });

  it('should return px based on the workflow rules', () => {
    const rules = [
      { category: 'a', comparison: '>', number: '1716', destination: 'R' },
      { category: 'x', comparison: '<', number: '2000', destination: 'px' },
      { destination: 'A' },
    ];

    const partRating = { x: 1900, m: 264, a: 79, s: 2244 };

    const expectedOutput = 'px';

    const output = applyRule({ rules, partRating });

    assert.equal(output, expectedOutput);
  });
});
