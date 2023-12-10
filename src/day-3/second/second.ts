import adjacentIsSymbol from '../adjacentIsSymbol';
import buildNumber from '../buildNumber';

type Second = (input: string) => number;

const second: Second = (input) => {
  // Split input into rows
  const rows: string[] = input.split('\n');

  // Build matrix from text
  const matrix = rows.reduce<Array<Array<string>>>((acc, row, y) => {
    acc.push([]);
    const columns = row.split('');

    columns.forEach((column) => {
      acc[y].push(column);
    });
    return acc;
  }, []);

  // Loop through matrix elements
  const allNumbers = [];
  for (let columnIndex = 0; columnIndex < matrix.length; columnIndex++) {
    for (let rowIndex = 0; rowIndex < matrix[columnIndex].length; rowIndex++) {
      // Try to build part number with series of digits
      const partNumber = buildNumber({ matrix, x: rowIndex, y: columnIndex });
      if (partNumber !== null) {
        allNumbers.push(partNumber);
        // Move the index after the built number
        rowIndex += `${partNumber.number}`.length;
        // }
      }
    }
  }

  const gearPositions: Array<Array<number>> = [];
  for (let columnIndex = 0; columnIndex < matrix.length; columnIndex++) {
    for (let rowIndex = 0; rowIndex < matrix[columnIndex].length; rowIndex++) {
      if (matrix[rowIndex][columnIndex] === '*') {
        gearPositions.push([columnIndex, rowIndex]);
      }
    }
  }

  const gearNumbers = allNumbers.reduce<{ [key: number]: Array<number> }>(
    (acc, number) => {
      number.coordinates.forEach((coordinate) => {
        gearPositions.forEach((gearPosition, gearIndex) => {
          const checkFunction = (matrixValue: string, x: number, y: number) =>
            x === coordinate[0] && y == coordinate[1];

          if (
            adjacentIsSymbol({
              matrix,
              x: gearPosition[0],
              y: gearPosition[1],
              checkFunction,
            })
          ) {
            if (acc[gearIndex] === undefined) {
              acc[gearIndex] = [];
            }
            if (acc[gearIndex].indexOf(number.number) === -1) {
              acc[gearIndex].push(number.number);
            }
          }
        });
      });
      return acc;
    },
    {}
  );

  const tot = Object.values(gearNumbers).reduce<number>((acc, gearNumber) => {
    if (gearNumber.length === 2) {
      acc += gearNumber[0] * gearNumber[1];
    }
    return acc;
  }, 0);

  return tot;
};

export default second;
