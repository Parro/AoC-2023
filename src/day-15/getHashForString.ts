type GetHashForString = (input: string) => number;

const getHashForString: GetHashForString = (input) => {
  return input.split('').reduce<number>((tot, char) => {
    tot += char.charCodeAt(0);

    tot = (tot * 17) % 256;

    return tot;
  }, 0);
};

export default getHashForString;
