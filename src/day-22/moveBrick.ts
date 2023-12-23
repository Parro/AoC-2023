import { Brick, BrickMap } from './first/first';

type MoveBrick = (args: {
  brickMaps: BrickMap;
  brick: Brick;
  z: number;
  brickIndex: number;
}) => {
  newBrickMaps: BrickMap;
  newBrickIndex: number;
};

const moveBrick: MoveBrick = ({ brickMaps, brick, z, brickIndex }) => {
  const newBrickMaps = [...brickMaps];

  if (newBrickMaps[z - 1] === undefined || newBrickMaps[z] === undefined) {
    return { newBrickMaps, newBrickIndex: brickIndex };
  }
  const [[key, val]] = Object.entries(brick);
  if (newBrickMaps[z - 1] === undefined) {
    newBrickMaps[z - 1] = [];
  }
  const newBrickIndex = newBrickMaps[z - 1].length;
  newBrickMaps[z - 1].push({ [key]: val });
  newBrickMaps[z].splice(brickIndex, 1);

  // console.log('🚀 ~ file: moveBrick.ts:47 ~ newBrickMaps:', newBrickMaps);
  return { newBrickMaps, newBrickIndex };
};

export default moveBrick;
