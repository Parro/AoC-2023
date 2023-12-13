type HigherCardCompare = (args: {
  cardOrder: Array<string>;
  firstHand: Array<string>;
  secondHand: Array<string>;
}) => number;

const higherCardCompare: HigherCardCompare = ({
  cardOrder,
  firstHand,
  secondHand,
}) => {
  // Remove first card form hand and compare
  const firstCard = firstHand.shift() as string;
  const secondCard = secondHand.shift() as string;

  if (cardOrder.indexOf(firstCard) < cardOrder.indexOf(secondCard)) {
    return 1;
  }
  if (cardOrder.indexOf(secondCard) < cardOrder.indexOf(firstCard)) {
    return -1;
  }

  // If card are equals, recall function passing hands without firs card
  return higherCardCompare({ cardOrder, firstHand, secondHand });
};

export default higherCardCompare;
