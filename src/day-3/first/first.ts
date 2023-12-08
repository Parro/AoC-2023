import buildNumber from '../buildNumber';

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

  // Loop through matrix elements
  const partNumbers = [];
  for (let columnIndex = 0; columnIndex < matrix.length; columnIndex++) {
    for (let rowIndex = 0; rowIndex < matrix[columnIndex].length; rowIndex++) {
      // Try to build part number with series of digits
        const partNumber = buildNumber({ matrix, x: rowIndex, y: columnIndex });
        if (partNumber !== null) {
          partNumbers.push(partNumber);
          // Move the index after the built number
          rowIndex += `${partNumber}`.length;
        // }
      }
    }
  }

  const tot = partNumbers.reduce<number>(
    (acc, partNumber) => acc + partNumber,
    0
  );

  return tot;
};

export default first;
