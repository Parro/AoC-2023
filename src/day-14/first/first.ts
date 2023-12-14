import moveNorth from '../moveLeft';
import transposeMatrix from '../transposeMatrix';

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

  // Transpose matrix to turn columns in rows
  const transposedMatrix = transposeMatrix(matrix);

  // Move the rocks
  const tiltedTransposedMatrix = transposedMatrix.reduce<string[][]>(
    (acc, row) => [...acc, moveNorth(row)],
    []
  );

  // Re transpose the tilted matrix to get correct order
  const tiltedMatrix = transposeMatrix(tiltedTransposedMatrix);

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
