type FollowPath = (args: {
  entryPoint: string;
  map: {
    [key: string]: {
      [key: string]: string;
    };
  };
  instructions: Array<string>;
  steps?: number;
}) => number;

const followPath: FollowPath = ({
  entryPoint,
  map,
  instructions,
  steps = 0,
}) => {
  let nextStep = entryPoint;
  let found = false;
  for (let pathStep = 0; pathStep < instructions.length; pathStep++) {
    nextStep = map[nextStep][instructions[pathStep]];

    steps++;

    if (nextStep[2] === 'Z') {
      found = true;
      break;
    }
  }

  if (found) {
    return steps;
  }
  return followPath({ entryPoint: nextStep, map, instructions, steps });
};

export default followPath;
