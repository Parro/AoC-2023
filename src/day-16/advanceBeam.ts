type Position = { x: number; y: number };
type Move = {
  [key: string]: (args: Position) => Position;
};
type AdvanceBeam = (args: {
  matrix: string[][];
  start: { tile: Position; direction: string };
  direction?: string;
  energized?: Array<{ tile: Position; direction: string }>;
  splitBeam?: Array<{ start: Position; direction: string }>;
}) => Array<{ tile: Position; direction: string }>;

const move: Move = {
  toRight: ({ x, y }) => ({ x: x + 1, y }),
  toDown: ({ x, y }) => ({ x, y: y + 1 }),
  toLeft: ({ x, y }) => ({ x: x - 1, y }),
  toUp: ({ x, y }) => ({ x, y: y - 1 }),
};

const advanceBeam: AdvanceBeam = ({
  matrix,
  start,
  direction = 'toRight',
  energized = [],
  splitBeam = [],
}) => {
  let currentDirection = direction;
  // console.log('🚀 ~ file: advanceBeam.ts:28 ~ start:', start);
  // console.log(
  //   '🚀 ~ file: advanceBeam.ts:28 ~ currentDirection:',
  //   currentDirection
  // );
  const moveKeys = Object.keys(move).concat(Object.keys(move));

  // Found next tile position based on direction
  const nextTile = move[currentDirection]({ x: start.tile.x, y: start.tile.y });

  // console.log('🚀 ~ file: advanceBeam .ts:20 ~ nextTile:', nextTile);

  // console.log('🚀 ~ file: advanceBeam.ts:43 ~ energized:', energized);

  // If next tile x or y position is undefined the beam has reached the end of the layout
  if (
    matrix[nextTile.y] === undefined ||
    matrix[nextTile.y][nextTile.x] === undefined ||
    energized.some(
      (energizedTile) =>
        energizedTile.tile.x === nextTile.x &&
        energizedTile.tile.y === nextTile.y &&
        energizedTile.direction === currentDirection
    )
  ) {
    const matrixEnergized = [...matrix];

    energized.forEach((row) => {
      matrixEnergized[row.tile.y][row.tile.x] = '#';
    });
    
    console.log("🚀 ~ file: advanceBeam.ts:58 ~ energized.forEach ~ energized:", energized)
  console.log(
    '🚀 ~ file: advanceBeam.ts:72 ~ energized.forEach ~ matrixEnergized:',
    JSON.stringify(matrixEnergized)
  );
    // console.log('🚀 ~ file: advanceBeam.ts:55 ~ energized:', energized);
    // console.log('🚀 ~ file: adva nceBeam.ts:42 ~ splitBeam:', splitBeam);
    if (splitBeam.length > 0) {
      const newBeam = splitBeam.shift() as {
        start: Position;
        direction: string;
      };
      return advanceBeam({
        matrix,
        start: { tile: newBeam.start, direction: newBeam.direction },
        direction: newBeam.direction,
        energized,
        splitBeam,
      });
    }

    return energized;
  }
  // console.log(
  //   '🚀 ~ file: advanceBeam.ts:62 ~ matrix[nextTile.y][nextTile.x]:',
  //   matrix[nextTile.y][nextTile.x]
  // );
  // if (energized.indexOf(`${nextTile.x}-${nextTile.y}-${currentDirection}`) > -1) {
  //   console.log('already passed')
  //   return energized;
  // }

  // Add tile to list of energized
  energized.push({ tile: nextTile, direction: currentDirection });
  if (
    matrix[nextTile.y][nextTile.x] === '-' &&
    (currentDirection == 'toDown' || currentDirection == 'toUp')
  ) {
    currentDirection = moveKeys[moveKeys.indexOf(currentDirection) + 1];
    const splitDirection = moveKeys[moveKeys.indexOf(currentDirection) + 2];
    splitBeam.push({ start: nextTile, direction: splitDirection });
  }
  if (
    matrix[nextTile.y][nextTile.x] === '|' &&
    (currentDirection == 'toRight' || currentDirection == 'toLeft')
  ) {
    currentDirection = moveKeys[moveKeys.indexOf(currentDirection) + 1];
    const splitDirection = moveKeys[moveKeys.indexOf(currentDirection) + 2];
    splitBeam.push({ start: nextTile, direction: splitDirection });
  }
  // console.log('🚀 ~ file: advanceBeam.ts:52 ~ splitBeam:', splitBeam);

  // If there is a mirror in the next tile the direction change based on the list of move keys
  if (matrix[nextTile.y][nextTile.x] === '/') {
    if (currentDirection == 'toRight') {
      currentDirection = 'toUp';
    } else if (currentDirection == 'toDown') {
      currentDirection = 'toLeft';
    } else if (currentDirection == 'toLeft') {
      currentDirection = 'toDown';
    } else if (currentDirection == 'toUp') {
      currentDirection = 'toRight';
    }

    // console.log(
    //   '🚀 ~ file: advanceB eam.ts:44 ~ currentDirection:',
    //   currentDirection
    // );
  }

  if (matrix[nextTile.y][nextTile.x] === '\\') {
    if (currentDirection == 'toRight') {
      currentDirection = 'toDown';
    } else if (currentDirection == 'toDown') {
      currentDirection = 'toRight';
    } else if (currentDirection == 'toLeft') {
      currentDirection = 'toUp';
    } else if (currentDirection == 'toUp') {
      currentDirection = 'toLeft';
    }

    // console.log(
    //   '🚀 ~ file: advanceBeam.ts:44  ~ currentDirection:',
    //   currentDirection
    // );
  }

  return advanceBeam({
    matrix,
    start: { tile: nextTile, direction: currentDirection },
    direction: currentDirection,
    energized,
    splitBeam,
  });
};

export default advanceBeam;
