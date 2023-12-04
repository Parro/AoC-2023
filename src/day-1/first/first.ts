type First = (input: string) => number;

const first: First = (input) => {
  // Split input into rows
  const rows = input.split('\n');

  return rows.reduce((tot, row) => {
    // Search for all numbers in row, convert iterator result from matchAll() to array
    const numbersFound = Array.from(row.matchAll(/[0-9]/g));

    // Convert regexp result in array of numbers
    const numbers = numbersFound.map((number) => number[0]);

    // Combine two digits in number and sum
    tot += Number(`${numbers[0]}${numbers.slice(-1)}`);

    return tot;
  }, 0);
};

export default first;
