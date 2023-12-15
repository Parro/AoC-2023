import getHashForString from '../getHashForString';

type Second = (input: string) => number;

const second: Second = (input) => {
  const steps = input.split(',');

  const boxesConfiguration = steps.reduce<string[][]>((boxes, step) => {
    // Get step parts
    const matches = step.match(
      /(?<label>[a-z]*)(?<operation>-|=)?(?<focalLength>[0-9]*)/
    );

    if (matches?.groups) {
      const { label, operation, focalLength } = matches.groups;

      const box = getHashForString(label);

      if (boxes[box] === undefined) {
        boxes[box] = [];
      }

      const lensIndex = boxes[box].findIndex((lens) => lens.includes(label));
      const lensLabel = `${label} ${focalLength}`;

      // If operation = add or replace lens
      if (operation === '=') {
        if (lensIndex > -1) {
          boxes[box][lensIndex] = lensLabel;
        } else {
          boxes[box].push(`${label} ${focalLength}`);
        }
      }

      // If operation - remove lens
      if (operation === '-') {
        if (lensIndex > -1) {
          boxes[box].splice(lensIndex, 1);
        }
      }
    }

    return boxes;
  }, []);
  // console.log(
  //   '🚀 ~ file: second.ts:39 ~ boxesConfiguration ~ boxesConfiguration:',
  //   boxesConfiguration
  // );

  // Calculate total focusing power
  return boxesConfiguration.reduce<number>(
    (totFocusingPower, box, boxNumber) => {
      if (box.length === 0) {
        return totFocusingPower;
      }
      const focusingPower = box.reduce<number>((power, lens, slot) => {
        return (power +=
          (boxNumber + 1) * (slot + 1) * Number(lens.split(' ')[1]));
      }, 0);

      return (totFocusingPower += focusingPower);
    },
    0
  );
};

export default second;
