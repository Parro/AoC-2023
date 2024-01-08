import grainPath from '../grainPath';

type First = (input: string) => number;
type IsIntersecting = (args: {
  start1: Array<number>;
  end1: Array<number>;
  start2: Array<number>;
  end2: Array<number>;
}) => boolean;

// Copied from https://stackoverflow.com/a/28866825
const isIntersecting: IsIntersecting = ({ start1, end1, start2, end2 }) => {
  const CCW: (args: {
    p1: Array<number>;
    p2: Array<number>;
    p3: Array<number>;
  }) => boolean = ({ p1, p2, p3 }) => {
    return (
      (p3[1] - p1[1]) * (p2[0] - p1[0]) > (p2[1] - p1[1]) * (p3[0] - p1[0])
    );
  };
  return (
    CCW({ p1: start1, p2: start2, p3: end2 }) !=
      CCW({ p1: end1, p2: start2, p3: end2 }) &&
    CCW({ p1: start1, p2: end1, p3: start2 }) !=
      CCW({ p1: start1, p2: end1, p3: end2 })
  );
};
const first: First = (input) => {
  const hailGrains = input.split('\n').map((grain) => {
    const [position, velocity] = grain.split(' @ ');
    return {
      position: position.split(', ').map((val) => Number(val)),
      velocity: velocity.split(', ').map((val) => Number(val)),
    };
  });
  // console.log('🚀 ~ file: first.ts:11 ~ hailGrains ~ hailGrains:', hailGrains);

  const minPosition = 200000000000000;
  const maxPosition = 400000000000000;
  const hailPaths = hailGrains.map((grain) => {
    return grainPath({
      coord: { x: grain.position[0], y: grain.position[1] },
      startCoord:{ x: grain.position[0], y: grain.position[1] },
      velocity: { x: grain.velocity[0], y: grain.velocity[1] },
      positions: [],
      minPosition,
      maxPosition,
    });
  });
  console.log('🚀 ~ file: first.ts:27 ~ hailPaths ~ hailPaths:', hailPaths);

  let collisions = 0;
  for (let baseIndex = 0; baseIndex < hailPaths.length; baseIndex++) {
    console.log('🚀 ~ file: first.ts:29 ~ baseIndex:', baseIndex);
    for (let index = baseIndex + 1; index < hailPaths.length; index++) {
      console.log('🚀 ~ file: first.ts:31 ~ index:', index);
      // console.log(
      //   '🚀 ~ file: first.ts:46 ~ hailPaths[baseIndex]:',
      //   hailPaths[baseIndex]
      // );
      // console.log(
      //   '🚀 ~ file: first.ts:50 ~ hailPaths[index]:',
      //   hailPaths[index]
      // );
      if (
        isIntersecting({
          start1: hailPaths[baseIndex].min,
          end1: hailPaths[baseIndex].max,
          start2: hailPaths[index].min,
          end2: hailPaths[index].max,
        })
      ) {
        console.log('collide');
        collisions++;
      }
      // const intersection =  hailPaths[baseIndex].filter((val) =>
      //   hailPaths[index].includes(val)
      // );
      // if (intersection.length > 0) {
      //   collisions++;
      // }
      // }
    }
  }
  // console.log('🚀 ~ file: first.ts:46 ~ collisions:', collisions);

  return collisions;
  // return hailPaths.reduce<number>((collisions, baseHailPath, baseIndex) => {
  //   const collision = hailPaths.reduce<number>((acc, hailPath, index) => {
  //     console.log("🚀 ~ file: first.ts:55 ~ baseIndex:", baseIndex)
  //     console.log("🚀 ~ file: first.ts:29 ~ collision ~ index:", index)
  //     if (index !== baseIndex) {
  //       const intersection = baseHailPath.filter((val) =>
  //         hailPath.includes(val)
  //       );
  //       console.log(
  //         '🚀 ~ file: first.ts:33 ~ collision ~ baseHailPath:',
  //         baseHailPath
  //       );
  //       console.log('🚀 ~ file: first.ts:32 ~ collision ~ hailPath:', hailPath);
  //       console.log(
  //         '🚀 ~ file: first.ts:33 ~ collision ~ intersection:',
  //         intersection
  //       );
  //       if (intersection.length > 0) {
  //         acc = 1;
  //       }
  //     }
  //     return acc;
  //   }, 0);

  //   collisions += collision;

  //   return collisions;
  // }, 0);
};

export default first;
