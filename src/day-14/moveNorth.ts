type MoveNorth = (input: string[][]) => string[][];

const moveNorth: MoveNorth = (input) => {
  let hasSwapped = false;

  const movedColumn = [];
  for (let position = 0; position < input.length; position++) {
    const element = input[position][0];

    // If current element is a rock and the before is empty, swap them and mark as hasSwapped
    if (
      movedColumn[position - 1] !== undefined &&
      element === 'O' &&
      input[position - 1][0] === '.'
    ) {
      movedColumn[position - 1][0] = 'O';
      movedColumn.push(['.']);
      hasSwapped = true;
    } else {
      movedColumn.push([element]);
    }
  }

  // Recall teh function until there has been no swap
  if (hasSwapped === true) {
    return moveNorth(movedColumn);
  }

  return movedColumn;
};

export default moveNorth;
