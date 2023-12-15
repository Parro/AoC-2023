type MoveEast = (input: Array<string>) => Array<string>;

const moveEast: MoveEast = (input) => {
  let hasSwapped = false;

  const movedRow = [];
  for (let position = 0; position < input.length; position++) {
    const element = input[position];

    // If current element is a rock and the before is empty, swap them and mark as hasSwapped
    if (
      input[position + 1] !== undefined &&
      element === 'O' &&
      input[position + 1] === '.'
    ) {
      movedRow[position + 1] = 'O';
      movedRow[position] = '.';
      position++;

      hasSwapped = true;
    } else {
      movedRow.push(element);
    }
  }

  // Recall teh function until there has been no swap
  if (hasSwapped === true) {
    return moveEast(movedRow);
  }

  return movedRow;
};

export default moveEast;
