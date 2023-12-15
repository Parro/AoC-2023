import predictNumber from '../predictNumber';

type First = (input: string) => number;

const first: First = (input) => {
  // Get sequences from input
  const sequences = input.split('\n').map((row) => row.split(' '));

  const nextNumbersInSequences = sequences.map((sequence) => {
    // Convert sequence values to number
    const numberSequence = sequence.map((value) => Number(value));

    // Calculate next step in sequence
    const nextStep = predictNumber({ sequence: numberSequence });

    // Get last value in sequence
    const lastValue = numberSequence.pop() as number;

    return lastValue + nextStep;
  });
  // console.log(
  //   '🚀 ~ file: first.ts:15 ~ nextNumbersInSequences ~ nextNumbersInSequences:',
  //   nextNumbersInSequences
  // );

  // Sum next value in all sequences
  return nextNumbersInSequences.reduce<number>(
    (tot, number) => (tot += number),
    0
  );
};

export default first;
