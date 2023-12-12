type First = (input: string) => number;

const first: First = (input) => {
  const [timeData, distanceData] = input.split('\n');

  // Extract data
  const times = timeData
    .replace('Time:', '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  const distances = distanceData
    .replace('Distance:', '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');

  const combinations = times.map((timeString, index) => {
    const time = Number(timeString);
    const distance = Number(distances[index]);

    const winningRace = [];
    for (let speed = 0; speed < time; speed++) {
      // Get the distance for each race based on speed
      const raceDistance = (time - speed) * speed;

      // Get the winning races
      if (raceDistance > distance) {
        winningRace.push(raceDistance);
      }
    }
    return winningRace;
  });

  // Multiply the winning race combination
  return combinations.reduce<number>(
    (acc, combination) => combination.length * acc,
    1
  );
};

export default first;
