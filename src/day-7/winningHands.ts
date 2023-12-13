type WinningHands = (hand: string, useJolly?: boolean) => number;

const winningHands: WinningHands = (hand, useJolly = false) => {
  const cards = hand.split('');
  // console.log('🚀 ~ file: winningHands.ts:5 ~ cards:', cards);

  // Count the occurrences of card in hand
  const cardsCount = cards.reduce<{ [key: string]: number }>((acc, char) => {
    if (acc[char] === undefined) {
      acc[char] = 1;
      return acc;
    }
    acc[char] += 1;

    return acc;
  }, {});

  // Sort card cont from more to less
  const charCountSortArray: [string, number][] = Object.entries(cardsCount).map(
    ([char, count]) => [char, count]
  );

  let charCountSort = charCountSortArray.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    return 0;
  });
  // console.log('🚀 ~ file: winningHands.ts:31 ~ charCountSort:', charCountSort);

  // If J is used as jolly increase the count of the card with more count
  if (useJolly === true) {
    if (cardsCount.J !== undefined) {
      // Already five J
      if (!(charCountSort[0][0] === 'J' && charCountSort.length === 1)) {
        // J is the highest card so go for the second
        if (charCountSort[0][0] !== 'J') {
          charCountSort[0][1] += cardsCount.J;
        } else if (charCountSort[1][0] !== 'J') {
          charCountSort[1][1] += cardsCount.J;
        } else if (charCountSort[2][0] !== 'J') {
          charCountSort[2][1] += cardsCount.J;
        } else if (charCountSort[3][0] !== 'J') {
          charCountSort[3][1] += cardsCount.J;
        }
        charCountSort = charCountSort.filter((count) => count[0] !== 'J');
      }
    }
  }

  // Rank based on game rule

  // Five of a kind
  if (charCountSort[0][1] === 5) {
    return 1;
  }
  // Four of a kind
  if (charCountSort[0][1] === 4) {
    return 2;
  }
  // Full house
  if (charCountSort[0][1] === 3 && charCountSort.length == 2) {
    return 3;
  }
  // Three of a kind
  if (charCountSort[0][1] === 3 && charCountSort.length == 3) {
    return 4;
  }
  // Two pair
  if (
    charCountSort[0][1] === 2 &&
    charCountSort[1][1] === 2 &&
    charCountSort.length == 3
  ) {
    return 5;
  }
  // One pair
  if (charCountSort[0][1] === 2 && charCountSort.length == 4) {
    return 6;
  }
  // High card
  if (charCountSort.length == 5) {
    return 7;
  }

  return 0;
};

export default winningHands;
