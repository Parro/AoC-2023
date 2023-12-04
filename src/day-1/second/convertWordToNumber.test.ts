import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import convertWordToNumber from './convertWordToNumber';

describe('convertWordToNumber tests', () => {
  it('should convert a number spelled with letters in the correspondent variable of type number', () => {
    const input = 'three';

    const expectedOutput = '3';

    const output = convertWordToNumber(input);

    assert.strictEqual(output, expectedOutput);
  });

  it('should return original string if it is not a number spelled with letters', () => {
    const input = 'three';

    const expectedOutput = '3';

    const output = convertWordToNumber(input);

    assert.strictEqual(output, expectedOutput);
  });
});
