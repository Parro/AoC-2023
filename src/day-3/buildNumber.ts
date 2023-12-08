import adjacentIsSymbol from './adjacentIsSymbol';

type BuildNumber = (args: {
  previousNumber?: number;
  hasAdjacent?: boolean;
  matrix: Array<Array<string>>;
  x: number;
  y: number;
}) => number | null;

const buildNumber: BuildNumber = ({
  previousNumber=null,
  hasAdjacent = false,
  matrix,
  x,
  y,
}) => {
  // If matrix element is not a number return null
  if (isNaN(Number(matrix[y][x]))) {
    return previousNumber;
  }

  // If previous number has a value, concatenate with current
  const currentNumber =
    previousNumber !== undefined && previousNumber!==null
      ? Number(`${previousNumber}${matrix[y][x]}`)
      : Number(matrix[y][x]);

  // If a previous number has not already an adjacent number, check for it
  const hasAdjacentSymbol =
    hasAdjacent === true ? hasAdjacent : adjacentIsSymbol({ matrix, x, y });

  // If the next element is still a number, recall this function
  if (!isNaN(Number(matrix[y][x + 1]))) {
    return buildNumber({
      previousNumber: currentNumber,
      hasAdjacent: hasAdjacentSymbol,
      matrix,
      x: x + 1,
      y,
    });
  }

  // If one of the digits has an adjacent symbol, return the number
  if (hasAdjacentSymbol === true) {
    return currentNumber;
  }

  return null;
};

export default buildNumber;
