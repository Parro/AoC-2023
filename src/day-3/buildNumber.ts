import adjacentIsSymbol from './adjacentIsSymbol';

type BuildNumber = (args: {
  previousNumber?: number;
  hasAdjacent?: boolean;
  coordinates?: Array<Array<number>>;
  matrix: Array<Array<string>>;
  x: number;
  y: number;
}) => {
  number: number;
  coordinates: Array<Array<number>>;
  hasAdjacentSymbol: boolean;
} | null;

const buildNumber: BuildNumber = ({
  previousNumber = null,
  hasAdjacent = false,
  coordinates = [],
  matrix,
  x,
  y,
}) => {
  // If matrix element is not a number return null
  if (isNaN(Number(matrix[y][x]))) {
    return null;
  }

  // If previous number has a value, concatenate with current
  const currentNumber =
    previousNumber !== undefined && previousNumber !== null
      ? Number(`${previousNumber}${matrix[y][x]}`)
      : Number(matrix[y][x]);

  const checkFunction = (matrixValue: string) =>
    matrixValue !== '.' && isNaN(Number(matrixValue));

  // If a previous number has not already an adjacent number, check for it
  const hasAdjacentSymbol =
    hasAdjacent === true
      ? hasAdjacent
      : adjacentIsSymbol({ matrix, x, y, checkFunction });

  coordinates.push([x, y]);

  // If the next element is still a number, recall this function
  if (!isNaN(Number(matrix[y][x + 1]))) {
    return buildNumber({
      previousNumber: currentNumber,
      hasAdjacent: hasAdjacentSymbol,
      coordinates,
      matrix,
      x: x + 1,
      y,
    });
  }

  return { number: currentNumber, coordinates, hasAdjacentSymbol };
};

export default buildNumber;
