type ConvertWordToNumber = (input: string) => string;

const convertWordToNumber: ConvertWordToNumber = (input) => {
  const replacements = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  let number = null;
  for (const [search, match] of Object.entries(replacements)) {
    if (input.indexOf(search) > -1) {
      number = input.replace(search, match);
      break;
    }
  }

  if (number === null) {
    return input;
  }

  return number;
};

export default convertWordToNumber;
