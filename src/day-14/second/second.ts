import moveWest from '../moveWest';
import moveNorth from '../moveNorth';
import moveEast from '../moveEast';
import moveSouth from '../moveSouth';

type second = (input: string) => number;

const second: second = (input) => {
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
  // console.log('🚀 ~ file: second.ts:17 ~ matrix ~ matrix:', matrix);

  const cycle = 1000000000;
  let tiltedMatrix: string[][] = matrix;

  for (let cycleNumber = 0; cycleNumber < cycle; cycleNumber++) {
    const tiltedMatrixToNorth: string[][] = [];
    for (let columnIndex = 0; columnIndex < tiltedMatrix[0].length; columnIndex++) {
      // Extract single column
      const column: string[][] = [];
      for (let rowIndex = 0; rowIndex < tiltedMatrix.length; rowIndex++) {
        if (column[rowIndex] === undefined) {
          column.push([]);
        }
        column[rowIndex].push(tiltedMatrix[rowIndex][columnIndex]);
      }
  
      // Move rocks in column to the north
      const newColumn = moveNorth(column);
  
      // Add moved column to position rowIndex in tilted matrix
      for (let rowIndex = 0; rowIndex < tiltedMatrix.length; rowIndex++) {
        if (tiltedMatrixToNorth[rowIndex] === undefined) {
          tiltedMatrixToNorth.push([]);
        }
        tiltedMatrixToNorth[rowIndex].push(newColumn[rowIndex][0]);
      }
    }
    // console.log(
    //   '🚀 ~ file: second.ts:37 ~ tiltedMatrixToNorth:\n',
    //   tiltedMatrixToNorth.map((row)=>row.join('')).join('\n')
    // );

    // Move the rocks to west
    const tiltedMatrixToWest = tiltedMatrixToNorth.reduce<string[][]>(
      (acc, row) => [...acc, moveWest(row)],
      []
    );

    // console.log(
    //   '🚀 ~ file: second.ts:46 ~ tiltedMatrixToWest:\n',
    //   tiltedMatrixToWest.map((row)=>row.join('')).join('\n')
    // );

    // Move the rocks to south
    const tiltedMatrixToSouth: string[][] = [];
    for (let columnIndex = 0; columnIndex < tiltedMatrixToWest[0].length; columnIndex++) {
      // Extract single column
      const column: string[][] = [];
      for (let rowIndex = 0; rowIndex < tiltedMatrixToWest.length; rowIndex++) {
        if (column[rowIndex] === undefined) {
          column.push([]);
        }
        column[rowIndex].push(tiltedMatrixToWest[rowIndex][columnIndex]);
      }
  
      // Move rocks in column to the north
      const newColumn = moveSouth(column);
  
      // Add moved column to position rowIndex in tilted matrix
      for (let rowIndex = 0; rowIndex < tiltedMatrixToWest.length; rowIndex++) {
        if (tiltedMatrixToSouth[rowIndex] === undefined) {
          tiltedMatrixToSouth.push([]);
        }
        tiltedMatrixToSouth[rowIndex].push(newColumn[rowIndex][0]);
      }
    }
    // console.log(
    //   '🚀 ~ file: second.ts:54 ~ tiltedMatrixToSouth:\n',
    //   tiltedMatrixToSouth.map((row)=>row.join('')).join('\n')
    // );

    // Move the rocks to east
    const tiltedTransposedMatrixToEast = tiltedMatrixToSouth.reduce<string[][]>(
      (acc, row) => [...acc, moveEast(row)],
      []
    );

    tiltedMatrix = tiltedTransposedMatrixToEast;
    // console.log('🚀 ~ file: second.ts:60 ~  tiltedMatrix:\n', cycleNumber, tiltedMatrix.map((row)=>row.join('')).join('\n'));
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

export default second;
