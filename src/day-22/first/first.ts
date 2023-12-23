import brickFall from '../brickFall';
import bricksInContact from '../bricksInContact';

export type Brick = {
  [key: string]: {
    x: Array<number>;
    y: Array<number>;
  };
};
export type BrickMap = Array<Array<Brick>>;

type First = (input: string) => number;

const first: First = (input) => {
  let maxZ = 0;
  const brickMapsWithEmptyLevel = input
    .split('\n')
    .reduce<BrickMap>((acc, line, lineIndex) => {
      const [start, end] = line.split('~');
      const startCoord = start.split(',').map((val) => Number(val));
      const endCoord = end.split(',').map((val) => Number(val));

      const x = [];
      for (let xPart = startCoord[0]; xPart <= endCoord[0]; xPart++) {
        x.push(xPart);
      }
      const y = [];
      for (let yPart = startCoord[1]; yPart <= endCoord[1]; yPart++) {
        y.push(yPart);
      }

      for (let zPart = startCoord[2]; zPart <= endCoord[2]; zPart++) {
        if (zPart > maxZ) {
          maxZ = zPart;
        }
        if (acc[zPart] === undefined) {
          acc[zPart] = [];
        }
        acc[zPart].push({ [`${lineIndex}`]: { x, y } });
      }

      return acc;
    }, []);

  const brickMaps: BrickMap = [];

  console.log('🚀 ~ file: first.ts:44 ~ maxZ:', maxZ);
  for (let z = 0; z <= maxZ; z++) {
    if (brickMapsWithEmptyLevel[z] === undefined) {
      brickMaps[z] = [];
    } else {
      brickMaps[z] = brickMapsWithEmptyLevel[z];
    }
  }
  console.dir(brickMaps, { depth: 10 });

  let stackedBrickMaps = [...brickMaps];
  for (let z = 1; z <= maxZ; z++) {
    // console.log('🚀 ~ file: first.ts:40 ~ z:', z);
    if (stackedBrickMaps[z] !== undefined) {
      stackedBrickMaps[z].forEach((brick, brickIndex) => {
        if (z > 1) {
          stackedBrickMaps = brickFall({
            brickMaps: stackedBrickMaps,
            brick,
            z,
            brickIndex,
          });
          // console.log("🚀 ~ file: first.ts:64 ~ stackedBrickMaps[z].forEach ~ stackedBrickMaps:", stackedBrickMaps)
        }
      });
    }
  }
  console.dir(stackedBrickMaps, { depth: 10 });
  const bricksSupported = {};
  for (let z = 1; z <= maxZ; z++) {
    console.log('🚀 ~ file: first.ts:40 ~ z:', z);
    if (stackedBrickMaps[z] !== undefined) {
      stackedBrickMaps[z].forEach((brick, brickIndex) => {
        const [[key]] = Object.entries(brick);
        bricksSupported[key] = bricksInContact({
          brickMaps: stackedBrickMaps,
          brick,
          z,
        });
      });
    }
  }
  console.log('🚀 ~ file: first.ts:75 ~ bricksContacts:', bricksSupported);

  return Object.entries(bricksSupported).reduce<number>(
    (disintegrate, [brick, supporting], index) => {
      // console.log('🚀 ~ file: first.ts:102 ~ supporting:', supporting);
      if (supporting === '') {
        return disintegrate;
      }
      const bricksSupportedCount = Object.values(bricksSupported).filter(
        (val) => val === supporting
      );
      // console.log(
      //   '🚀 ~ file: first.ts:95 ~ bricksSupportedCount:',
      //   bricksSupportedCount
      // );
      if (bricksSupportedCount.length > 1 || supporting === '') {
        disintegrate++;
      }

      return disintegrate;
    },
    0
  );
};

export default first;
