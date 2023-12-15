import moveNorth from '../moveNorth';

type First = (input: string) => number;

const first: First = (input) => {
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
  // console.log('🚀 ~ file: first.ts:17 ~ matrix ~ matrix:', matrix);

  const tiltedMatrix: string[][] = [];
  for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
    // Extract single column
    const column: string[][] = [];
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      if (column[rowIndex] === undefined) {
        column.push([]);
      }
      column[rowIndex].push(matrix[rowIndex][columnIndex]);
    }

    // Move rocks in column to the north
    const newColumn = moveNorth(column);

    // Add moved column to position rowIndex in tilted matrix
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      if (tiltedMatrix[rowIndex] === undefined) {
        tiltedMatrix.push([]);
      }
      tiltedMatrix[rowIndex].push(newColumn[rowIndex][0]);
    }
  }

  // Calculate total load count ing rocks and multiplying per row load
  return tiltedMatrix.reduce<number>((tot, row, rowIndex) => {
    const rocksCount = row.reduce<number>(
      (totRocks, char) => (char === 'O' ? totRocks + 1 : totRocks),
      0
    );

    tot += rocksCount * (tiltedMatrix.length - rowIndex);

    return tot;
  }, 0);
};

export default first;
