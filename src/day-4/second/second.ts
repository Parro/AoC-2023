import getNumbers from '../getNumbers';

type Second = (input: string) => number;

const second: Second = (input) => {
  // Split input into rows
  const rows: string[] = input.split('\n');

  const winningScores = rows.reduce<{ [key: number]: Array<string> }>(
    (acc, row, index) => {
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

        acc[index] = correctNumbers;
      }
      return acc;
    },
    {}
  );

  const bonusCards: Array<number> = rows.map(() => 1);
  Object.values(winningScores).forEach((winningScore, index) => {
    for (let bonus = 0; bonus < bonusCards[index]; bonus++) {
      for (let win = 0; win < winningScore.length; win++) {
        if (bonusCards[index + 1 + win] === undefined) {
          bonusCards[index + 1 + win] = 1;
        } else {
          bonusCards[index + 1 + win] += 1;
        }
      }
    }
  });

  return bonusCards.reduce<number>((acc, bonusCard) => (acc += bonusCard), 0);
};

export default second;
