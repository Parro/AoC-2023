import followPath from '../followPath';

type First = (input: string) => number;

const first: First = (input) => {
  const lines = input.split('\n');

  const instructions = lines[0].split('');

  const mapRaw = lines.splice(2);

  const map = mapRaw.reduce<{
    [key: string]: {
      [key: string]: string;
    };
  }>((mapNodes, line) => {
    const matches = line.match(
      /(?<index>[A-Z]{3}) = \((?<left>[A-Z]{3}), (?<right>[A-Z]{3})\)/
    );
    if (matches?.groups) {
      mapNodes[matches.groups.index] = {
        L: matches.groups.left,
        R: matches.groups.right,
      };
    }
    return mapNodes;
  }, {});

  return followPath({ entryPoint: 'AAA', map, instructions });
};

export default first;
