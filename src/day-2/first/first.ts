type First = (input: string) => number;

const first: First = (input) => {
  const maxBalls: { [key: string]: number } = {
    red: 12,
    green: 13,
    blue: 14,
  };

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

    // Verify that there are no extraction exceeding the max number of balls per color
    const notExceeding = ballsExtractions.every((ballsExtraction) => {
      const [number, color] = ballsExtraction.trim().split(' ');

      return Number(number) <= maxBalls[color];
    });

    // if no extraction exceeds, sum the game number to total
    if (notExceeding === true) {
      tot += Number(gameNumber);
    }

    return tot;
  }, 0);
};

export default first;
