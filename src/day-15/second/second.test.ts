import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import second from './second';

describe('Day 14 second exercise tests', () => {
  it('should move the rocks to the top of the panel', () => {
    const input = 'rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7';

    const expectedOutput = 145;

    const output = second(input);

    assert.strictEqual(output, expectedOutput);
  });
});
