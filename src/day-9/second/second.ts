import predictNumber from '../predictNumber';

type Second = (input: string) => number;

const second: Second = (input) => {
  // Get sequences from input
  const sequences = input.split('\n').map((row) => row.split(' '));

  const nextNumbersInSequences = sequences.map((sequence) => {
    // Convert sequence values to number
    const numberSequence = sequence.map((value) => Number(value));

    // Reverse the sequence to find the previous value
    const originalSequence = [...numberSequence];
    const reverseSequence = numberSequence.reverse();

    // Calculate next step in sequence
    const nextStep = predictNumber({ sequence: reverseSequence });

    // Get last value in sequence
    const firstValue = originalSequence.shift() as number;

    return firstValue + nextStep;
  });

  // Sum next value in all sequences
  return nextNumbersInSequences.reduce<number>(
    (tot, number) => (tot += number),
    0
  );
};

export default second;
