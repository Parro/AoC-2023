type MoveNorth = (input: Array<string>) => Array<string>;

const moveNorth: MoveNorth = (input) => {
  let hasSwapped = false;

  const movedRow = [];
  for (let position = 0; position < input.length; position++) {
    const element = input[position];

    // If current element is a rock and the before is empty, swap them and mark as hasSwapped
    if (
      movedRow[position - 1] !== undefined &&
      element === 'O' &&
      input[position - 1] === '.'
    ) {
      movedRow[position - 1] = 'O';
      movedRow.push('.');
      hasSwapped = true;
    } else {
      movedRow.push(element);
    }
  }

  // Recall teh function until there has been no swap
  if (hasSwapped === true) {
    return moveNorth(movedRow);
  }

  return movedRow;
};

export default moveNorth;
