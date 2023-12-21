export type Configuration ={
  name: string;
  type: string;
  destinations: Array<string>;
}
type First = (input: string) => number;

const first: First = (input) => {
  const configurations = input.split('\n').reduce<{
    [key: string]: Configuration;
  }>((acc, configuration) => {
    const configurationMatches = configuration.match(
      /(?<type>[b%&])(?<name>[^\s]*) ->(?<destinations>.*)/
    );
    if (!configurationMatches) {
      return acc;
    }
    const { type, name, destinations } = configurationMatches.groups as {
      type: string;
      name: string;
      destinations: string;
    };

    if (type === 'b' && name === 'roadcaster') {
      acc['broadcaster'] = {
        name: 'broadcaster',
        type: 'broadcaster',
        destinations: destinations.trim().split(', '),
      };
      return acc;
    }
    acc[name] = {
      type,
      name,
      destinations: destinations.trim().split(', '),
    };
    return acc;
  }, {});

  console.log('🚀 ~ file: first.ts:7 ~ configurations:', configurations);
  return 0;
};

export default first;
