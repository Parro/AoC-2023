type GrainPath = (args: {
  coord: { x: number; y: number };
  startCoord?: { x: number; y: number };
  velocity: { x: number; y: number };
  positions?: Array<Array<number>>;
  minPosition: number;
  maxPosition: number;
}) => { min: Array<number>; max: Array<number> };

const grainPath: GrainPath = ({
  coord,
  startCoord,
  velocity,
  positions = [],
  minPosition,
  maxPosition,
}) => {
  // const xPath: Array<number> = [];
  // const yPath: Array<number> = [];

  if (startCoord === undefined) {
    startCoord = { ...coord };
  }
  // let lastX: number = 0;
  // let lastY: number = 0;
  // if (velocity.x > 0) {
  //   for (let xPosition = 0; xPosition < velocity.x; xPosition++) {
  //     xPath.push(coord.x + xPosition);
  //   }
  //   lastX = xPath[xPath.length - 1] + 1;
  // }
  // if (velocity.x < 0) {
  //   for (let xPosition = 0; xPosition > velocity.x; xPosition--) {
  //     xPath.push(coord.x + xPosition);
  //   }
  //   lastX = xPath[xPath.length - 1] - 1;
  // }
  // if (velocity.y > 0) {
  //   for (let yPosition = 0; yPosition < velocity.y; yPosition++) {
  //     yPath.push(coord.y + yPosition);
  //   }
  //   lastY = yPath[yPath.length - 1] + 1;
  // }
  // if (velocity.y < 0) {
  //   for (let yPosition = 0; yPosition > velocity.y; yPosition--) {
  //     yPath.push(coord.y + yPosition);
  //   }
  //   lastY = yPath[yPath.length - 1] - 1;
  // }

  // console.log('🚀 ~ file: grainPath.ts:18 ~ xPath:', xPath);
  // console.log('🚀 ~ file: grainPath.ts:20 ~ yPath:', yPath);
  // console.log("🚀 ~ file: grainPath.ts:44 ~ lastX:", lastX)
  // console.log("🚀 ~ file: grainPath.ts:44 ~ lastY:", lastY)

  // positions = positions.concat(
  //   xPath.reduce<Array<Array<number>>>((accX, x) => {
  //     accX = accX.concat(
  //       yPath.reduce<Array<Array<number>>>((accY, y) => {
  //         accY.push([Number(x), Number(y)]);
  //         return accY;
  //       }, [])
  //     );
  //     return accX;
  //   }, [])
  // );
  // console.log('🚀 ~ file: grainPath.ts:52 ~ positions ~ positions:', positions);

  const xMaxLength =
    velocity.x > 0 ? maxPosition - coord.x : coord.x - minPosition;
  console.log('🚀 ~ file: grainPath.ts:70 ~ xMaxLength:', xMaxLength);
  const yMaxLength =
    velocity.y > 0 ? maxPosition - coord.y : coord.y - minPosition;
  console.log('🚀 ~ file: grainPath.ts:73 ~ yMaxLength:', yMaxLength);
  // let xNewPosition = coord.x;
  // let yNewPosition = coord.y;

  const xMaxStep = xMaxLength / Math.abs(velocity.x);
  console.log('🚀 ~ file: grainPath.ts:79 ~ xMaxStep:', xMaxStep);
  const yMaxStep = yMaxLength / Math.abs(velocity.y);
  console.log('🚀 ~ file: grainPath.ts:81 ~ yMaxStep:', yMaxStep);
  const maxStep = Math.min(Math.abs(xMaxStep), Math.abs(yMaxStep));

  const xEnd = coord.x + velocity.x * maxStep;
  const yEnd = coord.y + velocity.y * maxStep;
  // while (
  //   xNewPosition >= minPosition &&
  //   xNewPosition <= maxPosition &&
  //   yNewPosition >= minPosition &&
  //   yNewPosition <= maxPosition
  // ) {
  //   xNewPosition = xNewPosition + velocity.x;
  //   // console.log("🚀 ~ file: grainPath.ts:25 ~ xNewPosition:", xNewPosition)
  //   yNewPosition = yNewPosition + velocity.y;
  //   // console.log("🚀 ~ file: grainPath.ts:27 ~ yNewPosition:", yNewPosition)
  //   // const xPositions = positions.map((position) => Number(position[0]));
  //   // // console.log('🚀 ~ file: grainPath.ts:69 ~ xPositions:', xPositions);
  //   // const yPositions = positions.map((position) => Number(position[1]));
  //   // // console.log('🚀 ~ file: grainPath.ts:71 ~ yPositions:', yPositions);
  // }
  // const xLastPosition =
  //   xNewPosition < 0
  //     ? Math.max(minPosition, xNewPosition)
  //     : Math.min(maxPosition, xNewPosition);
  // const yLastPosition =
  //   yNewPosition < 0
  //     ? Math.max(minPosition, yNewPosition)
  //     : Math.min(maxPosition, yNewPosition);
  return {
    min: [startCoord.x, startCoord.y],
    max: [xEnd, yEnd],
  };
};

export default grainPath;
