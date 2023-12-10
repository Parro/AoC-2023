type AdjacentIsSymbol = (args: {
  matrix: Array<Array<string>>;
  x: number;
  y: number;
  checkFunction: (matrixValue: string, x: number, y: number) => boolean;
}) => boolean;

const adjacentIsSymbol: AdjacentIsSymbol = ({
  matrix,
  x,
  y,
  checkFunction,
}) => {
  const adjacentPositions = [
    [y - 1, x],
    [y - 1, x - 1],
    [y, x - 1],
    [y + 1, x - 1],
    [y + 1, x],
    [y + 1, x + 1],
    [y, x + 1],
    [y - 1, x + 1],
  ];

  return adjacentPositions.some((adjacentPosition) => {
    const [y, x] = adjacentPosition;
    if (matrix[y] === undefined || matrix[y][x] === undefined) {
      return false;
    }

    if (checkFunction(matrix[y][x], x, y)) {
      return true;
    }
  });
};

export default adjacentIsSymbol;
