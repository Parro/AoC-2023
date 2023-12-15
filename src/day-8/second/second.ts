import followPath from '../followPath';

type Second = (input: string) => number;

const second: Second = (input) => {
  const lines = input.split('\n');

  const instructions = lines[0].split('');

  const mapRaw = lines.splice(2);

  const map = mapRaw.reduce<{
    [key: string]: {
      [key: string]: string;
    };
  }>((mapNodes, line) => {
    const matches = line.match(
      /(?<index>[A-Z0-9]{3}) = \((?<left>[A-Z0-9]{3}), (?<right>[A-Z0-9]{3})\)/
    );
    if (matches?.groups) {
      mapNodes[matches.groups.index] = {
        L: matches.groups.left,
        R: matches.groups.right,
      };
    }
    return mapNodes;
  }, {});

  const entryPoints = Object.keys(map).filter((mapNode) => mapNode[2] === 'A');

  const allSteps = entryPoints.map((entryPoint) =>
    followPath({ entryPoint, map, instructions })
  );

  const gcd: (a: number, b: number) => number = (a, b) =>
    a ? gcd(b % a, a) : b;

  const lcm: (a: number, b: number) => number = (a, b) => (a * b) / gcd(a, b);
  
  return allSteps.reduce((minimum, steps) => lcm(minimum, steps), 1);
};

export default second;
