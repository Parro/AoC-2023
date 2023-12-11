import getNumberFromMap from '../getNumberFromMap';

type First = (input: string) => number;

const first: First = (input) => {
  const dataMatches = input.match(
    /seeds: (?<seeds>[0-9\s]*)\n\n\s*seed-to-soil map:\n(?<seedToSoil>[0-9\s]*)\s*soil-to-fertilizer map:\n(?<soilToFertilizer>[0-9\s]*)\s*fertilizer-to-water map:\n(?<fertilizerToWater>[0-9\s]*)\s*water-to-light map:\n(?<waterToLight>[0-9\s]*)\s*light-to-temperature map:\n(?<lightToTemperature>[0-9\s]*)\s*temperature-to-humidity map:\n(?<temperatureToHumidity>[0-9\s]*)\s*humidity-to-location map:\n(?<humidityToLocation>[0-9\s]*)/
  );

  if (dataMatches?.groups !== undefined) {
    const { groups } = dataMatches;

    const data = Object.entries(groups).reduce<{
      [key: string]: Array<Array<number>>;
    }>((acc, [groupName, groupNumbers]) => {
      const groupNumbersRows = groupNumbers
        .replace(/ +/g, ' ')
        .trim()
        .split('\n');

      acc[groupName] = groupNumbersRows.map((groupNumbersRow) =>
        groupNumbersRow
          .replace(/\n/g, '')
          .trim()
          .split(' ')
          .map((number) => Number(number))
      );
      return acc;
    }, {});
    const { seeds: seedsArr, ...mapData } = data;

    const [seeds] = seedsArr;

    const locations = Object.values(mapData).reduce<Array<number>>(
      (acc, singleMap) => {
        acc = acc.map((seed) => {
          return getNumberFromMap({ number: seed, map: singleMap });
        });

        return acc;
      },
      seeds
    );

    return locations.reduce<number>(
      (min, location) => (location < min ? location : min),
      Number.MAX_SAFE_INTEGER
    );
  }

  return 0;
};

export default first;
