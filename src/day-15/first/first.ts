import getHashForString from '../getHashForString';

type First = (input: string) => number;

const first: First = (input) => {
  return input
    .split(',')
    .reduce<number>((tot, step) => (tot += getHashForString(step)), 0);
};

export default first;
