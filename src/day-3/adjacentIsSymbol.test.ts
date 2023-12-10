import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import adjacentIsSymbol from './adjacentIsSymbol';

describe('Day 3 adjacentIsSymbol tests', () => {
  it('should return false because in the adjacent position of the matrix there is no symbol that is not a dot - first row', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];
    const x = 0;
    const y = 0;
    const checkFunction = (matrixValue: string) =>
      matrixValue !== '.' && isNaN(Number(matrixValue));

    const expectedOutput = false;

    const output = adjacentIsSymbol({ matrix, x, y, checkFunction });

    assert.strictEqual(output, expectedOutput);
  });

  it('should return true because in the adjacent position of the matrix there is a symbol that is not a dot - first row', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];
    const x = 2;
    const y = 0;
    const checkFunction = (matrixValue: string) =>
      matrixValue !== '.' && isNaN(Number(matrixValue));

    const expectedOutput = true;

    const output = adjacentIsSymbol({ matrix, x, y, checkFunction });

    assert.strictEqual(output, expectedOutput);
  });

  it('should return false because in the adjacent position of the matrix there is no symbol that is not a dot - central row', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];
    const x = 8;
    const y = 2;
    const checkFunction = (matrixValue: string) =>
      matrixValue !== '.' && isNaN(Number(matrixValue));

    const expectedOutput = false;

    const output = adjacentIsSymbol({ matrix, x, y, checkFunction });

    assert.strictEqual(output, expectedOutput);
  });

  it('should return true because in the adjacent position of the matrix there is a symbol that is not a dot - central row', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];

    const x = 6;
    const y = 2;
    const checkFunction = (matrixValue: string) =>
      matrixValue !== '.' && isNaN(Number(matrixValue));

    const expectedOutput = true;

    const output = adjacentIsSymbol({ matrix, x, y, checkFunction });

    assert.strictEqual(output, expectedOutput);
  });

  it('should return false because in the adjacent position of the matrix there is no symbol that is not a dot - last row', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];
    const x = 7;
    const y = 9;
    const checkFunction = (matrixValue: string) =>
      matrixValue !== '.' && isNaN(Number(matrixValue));

    const expectedOutput = false;

    const output = adjacentIsSymbol({ matrix, x, y, checkFunction });

    assert.strictEqual(output, expectedOutput);
  });

  it('should return true because in the adjacent position of the matrix there is a symbol that is not a dot - last row', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];
    const x = 5;
    const y = 9;
    const checkFunction = (matrixValue: string) =>
      matrixValue !== '.' && isNaN(Number(matrixValue));

    const expectedOutput = true;

    const output = adjacentIsSymbol({ matrix, x, y, checkFunction });

    assert.strictEqual(output, expectedOutput);
  });

  it('should return true because one of the adjacent position match the parm coordinates', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];
    const x = 2;
    const y = 0;
    const checkFunction = (matrixValue: string, x: number, y: number) =>
      x === 3 && y == 1;
  
    const expectedOutput = true;
  
    const output = adjacentIsSymbol({ matrix, x, y, checkFunction });
  
    assert.strictEqual(output, expectedOutput);
  });

  it('should return false because none of the adjacent position match the parm coordinates', () => {
    const matrix = [
      ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
      ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
      ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
      ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
      ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
      ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.'],
    ];
    const x = 2;
    const y = 2;
    const checkFunction = (matrixValue: string, x: number, y: number) =>
      x === 4 && y == 4;
  
    const expectedOutput = false;
  
    const output = adjacentIsSymbol({ matrix, x, y, checkFunction });
  
    assert.strictEqual(output, expectedOutput);
  });
});
