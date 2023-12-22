type CanMove = (args: {
  matrix: Array<Array<string>>;
  x: number;
  y: number;
  checkFunction: (matrixValue: string, x: number, y: number) => boolean;
}) => Array<Array<number>>;

const canMove: CanMove = ({ matrix, x, y, checkFunction }) => {
  const adjacentPositions = [
    [y - 1, x],
    [y, x - 1],
    [y + 1, x],
    [y, x + 1],
  ];

  return adjacentPositions.reduce<number[][]>((positions, adjacentPosition) => {
    const [y, x] = adjacentPosition;
    if (matrix[y] === undefined || matrix[y][x] === undefined) {
      return positions;
    }

    if (checkFunction(matrix[y][x], x, y)) {
      positions.push([x, y]);
    }
    return positions;
  }, []);
};

export default canMove;
