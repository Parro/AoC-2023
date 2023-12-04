import convertWordToNumber from './convertWordToNumber';

type Second = (input: string) => number;

const second: Second = (input) => {
  // Split input into rows
  const rows = input.split('\n');

  return rows.reduce((tot, row) => {
    // Search for all numbers in row, convert iterator result from matchAll() to array
    const numbersFound = Array.from(
      row.matchAll(
        /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine|zero))/g
      )
    );

    // Convert regexp result in array of numbers
    const numbers = numbersFound.map((number) => number[1]);

    // Convert number spelled with letters in number
    const firstDigit = convertWordToNumber(numbers[0]);

    const secondDigit = convertWordToNumber(numbers.slice(-1)[0]);

    // Combine two digits in number and sum
    tot += Number(`${firstDigit}${secondDigit}`);

    return tot;
  }, 0);
};

export default second;
