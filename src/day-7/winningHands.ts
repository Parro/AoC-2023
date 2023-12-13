type WinningHands = (hand: string) => number;

const winningHands: WinningHands = (hand) => {
  const cards = hand.split('');

  const charCount = cards.reduce<{ [key: string]: number }>((acc, char) => {
    if (acc[char] === undefined) {
      acc[char] = 1;
    } else {
      acc[char] += 1;
    }
    return acc;
  }, {});
  const charCountSort = Object.entries(charCount)
    .map(([char, count]) => [char, count])
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      }
      if (a[1] < b[1]) {
        return 1;
      }
      return 0;
    });

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
