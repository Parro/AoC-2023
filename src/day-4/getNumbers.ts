type GetNumbers = (input: string) => Array<string>;

const getNumbers: GetNumbers = (input) => {
  const inputCharsArray = input.split('');
  return inputCharsArray.reduce<Array<string>>((acc, char, index) => {
    if (index % 3 === 1) {
      acc.push(`${inputCharsArray[index - 1]}${inputCharsArray[index]}`);
    }
    return acc;
  }, []);
};

export default getNumbers;
