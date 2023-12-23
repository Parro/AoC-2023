import { Brick, BrickMap } from './first/first';
import moveBrick from './moveBrick';

type BrickFall = (args: {
  brickMaps: BrickMap;
  brick: Brick;
  z: number;
  brickIndex: number;
}) => BrickMap;

const brickFall: BrickFall = ({ brickMaps, brick, z, brickIndex }) => {
  let brickFallMaps = [...brickMaps];

  let newBrickIndex = 0;
  let hasFallen = false;
  // console.log(
  //   '🚀 ~ file: first.ts:44 ~ brickFallMaps[z].forEach ~ brick:',
  //   brick
  // );

  const bricksBelow = brickFallMaps[z - 1];
  if (bricksBelow === undefined) {
    return brickFallMaps;
  }
  // console.log('🚀 ~ file: brickFall.ts:35 ~ bricksBelow:', bricksBelow);
  if (bricksBelow.length === 0 && z-1 > 0) {
    const { newBrickMaps, newBrickIndex: newBrickIndex2 } = moveBrick({
      brickMaps: brickFallMaps,
      brick,
      z,
      brickIndex,
    });

    newBrickIndex = newBrickIndex2;
    brickFallMaps = newBrickMaps;
    hasFallen = true;
  } else {
    for (
      let bricksBelowIndex = 0;
      bricksBelowIndex < bricksBelow.length;
      bricksBelowIndex++
    ) {
      const brickBelow = bricksBelow[bricksBelowIndex];
      // bricksBelow.forEach((brickBelow) => {
      // console.log(
      //   '🚀 ~ file: first.ts:48 ~ Object.values ~ brickBelow:',
      //   brickBelow
      // );
      const brickCoordinates = Object.values(brick)[0];
      const brickBelowCoordinates = Object.values(brickBelow)[0];

      const xContact = brickCoordinates.x.some((xBrick) => {
        return brickBelowCoordinates.x.indexOf(xBrick) > -1;
      });
      // console.log('🚀 ~ file: first.ts:62 ~ xContact ~ xContact:', xContact);

      const yContact = brickCoordinates.y.some((yBrick) => {
        return brickBelowCoordinates.y.indexOf(yBrick) > -1;
      });
      // console.log('🚀 ~ file: first.ts:66 ~ yContact ~ yContact:', yContact);

      if (xContact === false || yContact === false) {
        const { newBrickMaps, newBrickIndex: newBrickIndex2 } = moveBrick({
          brickMaps: brickFallMaps,
          brick,
          z,
          brickIndex,
        });

        newBrickIndex = newBrickIndex2;
        brickFallMaps = newBrickMaps;
        hasFallen = true;
        break;
      }
    }
    // );
  }

  if (hasFallen) {
    return brickFall({
      brickMaps: brickFallMaps,
      brick,
      z: z - 1,
      brickIndex: newBrickIndex,
    });
  }
  // console.log('🚀 ~ file: brickFall.ts:77 ~ brickFallMaps:', brickFallMaps);
  return brickFallMaps;
};

export default brickFall;
