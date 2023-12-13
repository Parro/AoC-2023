import higherCardCompare from '../higherCardCompare';
import winningHands from '../winningHands';

type First = (input: string) => number;

const first: First = (input) => {
  const rows = input.split('\n');

  const hands = rows.map((row) => row.split(' '));
  // console.log('🚀 ~ file: first.ts:7 ~ hands:', hands);

  const rankedHands = hands.sort((a, b) => {
    if (winningHands(a[0]) > winningHands(b[0])) {
      return -1;
    }
    if (winningHands(b[0]) > winningHands(a[0])) {
      return 1;
    }
    if (winningHands(a[0]) === winningHands(b[0])) {
      return higherCardCompare({
        firstHand: a[0].split(''),
        secondHand: b[0].split(''),
      });
    }
    return 0;
  });
  // console.log(
  //   '🚀 ~ file: first.ts:24 ~ rankedHands ~ rankedHands:',
  //   rankedHands
  // );

  return rankedHands.reduce<number>((acc, rankedHand, rank) => {
    const [, bid] = rankedHand;
    acc += Number(bid) * (rank + 1);

    return acc;
  }, 0);
};

export default first;
