type HigherCardCompare = (args: {
  firstHand: Array<string>;
  secondHand: Array<string>;
}) => number;

const cardOrder = [
  'A',
  'K',
  'Q',
  'J',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
];

const higherCardCompare: HigherCardCompare = ({ firstHand, secondHand }) => {
  const firstCard = firstHand.shift() as string;
  const secondCard = secondHand.shift() as string;

  if (cardOrder.indexOf(firstCard) < cardOrder.indexOf(secondCard)) {
    return 1;
  }
  if (cardOrder.indexOf(secondCard) < cardOrder.indexOf(firstCard)) {
    return -1;
  }
  return higherCardCompare({ firstHand, secondHand });
};

export default higherCardCompare;
