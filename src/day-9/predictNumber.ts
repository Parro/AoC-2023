type PredictNumber = (args: {
  sequence: Array<number>;
  precedentSequences?: Array<Array<number>>;
}) => number;

const predictNumber: PredictNumber = ({
  sequence,
  precedentSequences = [],
}) => {
  const differenceSequence = sequence.reduce<Array<number>>(
    (newSequence, value, index) => {
      const nextValue = sequence[index + 1];
      if (nextValue !== undefined) {
        const difference = nextValue - value;
        newSequence.push(difference);
      }
      return newSequence;
    },
    []
  );

  precedentSequences.push(differenceSequence);

  if (differenceSequence.every((value) => value === 0)) {
    const lastElements = precedentSequences.map(
      (sequence) => sequence[sequence.length - 1]
    );
    const nextStep = lastElements.reduce<number>(
      (tot, value) => (tot += value),
      0
    );

    return nextStep;
  }

  return predictNumber({ sequence: differenceSequence, precedentSequences });
};

export default predictNumber;
