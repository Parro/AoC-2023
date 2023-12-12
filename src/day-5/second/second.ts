import getNumberFromMap from '../getNumberFromMap';

type Second = (input: string) => number;

const second: Second = (input) => {
  const dataMatches = input.match(
    /seeds: (?<seeds>[0-9\s]*)\n\n\s*seed-to-soil map:\n(?<seedToSoil>[0-9\s]*)\s*soil-to-fertilizer map:\n(?<soilToFertilizer>[0-9\s]*)\s*fertilizer-to-water map:\n(?<fertilizerToWater>[0-9\s]*)\s*water-to-light map:\n(?<waterToLight>[0-9\s]*)\s*light-to-temperature map:\n(?<lightToTemperature>[0-9\s]*)\s*temperature-to-humidity map:\n(?<temperatureToHumidity>[0-9\s]*)\s*humidity-to-location map:\n(?<humidityToLocation>[0-9\s]*)/
  );

  if (dataMatches?.groups !== undefined) {
    const { groups } = dataMatches;

    // Parse input to get the seeds number and the maps
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

    // Extract seeds form data
    const { seeds: seedsArr, ...mapData } = data;

    const [seedsRanges] = seedsArr;
    // console.log('🚀 ~ file: second.ts:34 ~ seedsRanges:', seedsRanges);

    const minLocation = seedsRanges.reduce<number>((min, seedsRange, index) => {
      if (index % 2 === 1) {
        // console.log('🚀 ~ file: second.ts:37 ~ seedsRange:', seedsRange);
        // Spread the seed number from the start (element before current) to the end of the range (current element)
        for (
          let seedNumber = seedsRanges[index - 1];
          seedNumber < seedsRanges[index - 1] + seedsRange;
          seedNumber++
        ) {
          // Parse maps to get the location for the seed number
          const locations = Object.values(mapData).reduce<Array<number>>(
            (acc, singleMap) => {
              acc = acc.map((seed) => {
                return getNumberFromMap({ number: seed, map: singleMap });
              });

              return acc;
            },
            [seedNumber]
          );
          const [location] = locations;

          // Calculate the minimum location number
          min = location < min ? location : min;
        }
      }
      // console.log('🚀 ~ file: second.ts:64 ~ seeds ~ min:', min);

      return min;
    }, Number.MAX_SAFE_INTEGER);
    // console.log('🚀 ~ file: second.ts:67 ~ minLocation ~ minLocation:', minLocation);

    return minLocation;
  }

  return 0;
};

export default second;
