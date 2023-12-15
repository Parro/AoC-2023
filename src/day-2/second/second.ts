type Second = (input: string) => number;

const second: Second = (input) => {
  // Split input into rows
  const rows = input.split('\n');

  return rows.reduce((tot, row) => {
    // Get game number
    const gameNumber = row.match(/Game ([0-9]*)/)?.[1];

    // Get single balls extraction
    const ballsExtractions = row
      .replace(`Game ${gameNumber}:`, '')
      .split(';')
      .flatMap((gameExtraction) => gameExtraction.split(','));

    // Get the fewer number of balls per color to make the game possible
    const fewerBallsPerColor = ballsExtractions.reduce<{
      [key: string]: number;
    }>((acc, ballsExtraction) => {
      const [number, color] = ballsExtraction.trim().split(' ');

      if (acc[color] === undefined || Number(number) > acc[color]) {
        acc[color] = Number(number);
      }

      return acc;
    }, {});

    // Multiply the number of balls
    const multiplyBalls = Object.values(fewerBallsPerColor).reduce(
      (cube, balls) => cube * balls,
      1
    );

    tot += multiplyBalls;

    return tot;
  }, 0);
};

export default second;
