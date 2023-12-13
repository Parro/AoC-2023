import higherCardCompare from '../higherCardCompare';
import winningHands from '../winningHands';

type Second = (input: string) => number;

const cardOrder = [
  'A',
  'K',
  'Q',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  'J',
];

const second: Second = (input) => {
  const rows = input.split('\n');

  // Get hands
  const hands = rows.map((row) => row.split(' '));
  // console.log('🚀 ~ file: second.ts:7 ~ hands:', hands);

  // Calculate rank of winning hand
  const winingHandValues: [string, string, number][] = hands.map((hand) => {
    return [hand[0], hand[1], winningHands(hand[0], true)];
  });

  // Sort hands by rank
  const rankedHands = winingHandValues.sort((a, b) => {
    if (a[2] > b[2]) {
      return -1;
    }
    if (b[2] > a[2]) {
      return 1;
    }
    if (a[2] === b[2]) {
      return higherCardCompare({
        cardOrder,
        firstHand: a[0].split(''),
        secondHand: b[0].split(''),
      });
    }
    return 0;
  });

  // Multiply rank per bid and sum
  return rankedHands.reduce<number>((acc, rankedHand, rank) => {
    const [, bid] = rankedHand;
    acc += Number(bid) * (rank + 1);

    return acc;
  }, 0);
};

export default second;
