import getNumbers from '../getNumbers';

type First = (input: string) => number;

const first: First = (input) => {
  // Split input into rows
  const rows: string[] = input.split('\n');

  return rows.reduce<number>((acc, row) => {
    // Extract winning and played numbers for each card
    const rowNumbersMatch = row.match(
      /Card\s*([0-9]*): ([0-9\s]*) \| ([0-9\s]*)/
    );

    if (rowNumbersMatch !== null) {
      // Transform winning number string to array
      const winningNumbers = getNumbers(rowNumbersMatch[2]);

      // Transform played number string to array
      const playedNumbers = getNumbers(rowNumbersMatch[3]);

      // Get played numbers that are winning
      const correctNumbers = playedNumbers.filter((playedNumber) => {
        return winningNumbers.indexOf(playedNumber) > -1;
      });

      // Get winning score per card
      const winningScore = correctNumbers.reduce(
        (acc, correctNumber, index) => {
          if (index === 0) {
            return 1;
          }
          return acc * 2;
        },
        0
      );

      acc += winningScore;
    }
    return acc;
  }, 0);
};

export default first;
