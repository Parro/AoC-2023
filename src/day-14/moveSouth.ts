type MoveSouth = (input: string[][]) => string[][];

const moveSouth: MoveSouth = (input) => {
  let hasSwapped = false;

  const movedColumn = [];
  for (let position = 0; position < input.length; position++) {
    const element = input[position][0];
    // If current element is a rock and the before is empty, swap them and mark as hasSwapped
    if (
      input[position + 1] !== undefined &&
      element === 'O' &&
      input[position + 1][0] === '.'
    ) {
      if(movedColumn[position + 1]===undefined){
        movedColumn[position + 1]=[]
      }
      if(movedColumn[position ]===undefined){
        movedColumn[position ]=[]
      }
      movedColumn[position + 1][0] = 'O';
      movedColumn[position][0] = '.';
      position++;

      hasSwapped = true;
    } else {
      movedColumn.push([element]);
    }
  }

  // Recall teh function until there  has been no swap
  if (hasSwapped === true) {
    return moveSouth(movedColumn);
  }

  return movedColumn;
};

export default moveSouth;
