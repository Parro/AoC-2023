import canMove from '../canMove';

type First = (input: string, steps: number) => number;

const first: First = (input, steps) => {
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
  // console.log('🚀 ~ file: first.ts:16 ~ matrix ~ matrix:', matrix);

  const startPosition = [];
  for (let columnIndex = 0; columnIndex < matrix.length; columnIndex++) {
    for (let rowIndex = 0; rowIndex < matrix[columnIndex].length; rowIndex++) {
      if (matrix[columnIndex][rowIndex] === 'S') {
        startPosition.push(rowIndex, columnIndex);
      }
    }
  }
  // console.log('🚀 ~ file: first.ts:20 ~ startPosition:', startPosition);

  let gardenPlots = [startPosition];
  for (let step = 0; step < steps; step++) {
    // console.log('🚀 ~ file: first.ts:33 ~ step:', step);
    const newGardePlots = gardenPlots.flatMap((position) => {
      // console.log("🚀 ~ file: first.ts:35 ~ newGardenPlots ~ position:", position)
      const newPositions = canMove({
        matrix,
        x: position[0],
        y: position[1],
        checkFunction: (matrixValue) =>
          matrixValue === '.' || matrixValue === 'S',
      });
      // console.log("🚀 ~ file: first.ts:42 ~ newGardenPlots ~ newPositions:", newPositions)
      return newPositions;
    });
    const gardePlotsUnique = newGardePlots.filter(
      (plot, index) =>
        newGardePlots.findIndex((innerPlot) => {
          return innerPlot[0] === plot[0] && innerPlot[1] === plot[1];
        }) === index
    );
    // console.log("🚀 ~ file: first.ts:52 ~ gardePlotsUnique:", gardePlotsUnique)
    gardenPlots = gardePlotsUnique;

    // console.log(
    //   '🚀 ~ file: first.ts:38 ~ gardenPlots=startPositions.map ~ gardenPlots:',
    //   gardenPlots
    // );
  }
  return gardenPlots.length;
};

export default first;
