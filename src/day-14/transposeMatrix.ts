type TransposeMatrix = (matrix: string[][]) => string[][];

const transposeMatrix: TransposeMatrix = (matrix) => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create an empty matrix  with switched dimensions
  const transposedMatrix = Array.from({ length: numCols }, () =>
    Array(numRows).fill(0)
  );

  // Loop through the original matrix and transpose the values
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
};

export default transposeMatrix;
