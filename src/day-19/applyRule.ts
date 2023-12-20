
type ApplyRule = (args: {
  rules: Array<{
    category?: string;
    comparison?: string;
    number?: string;
    destination: string;
  }>;
  partRating: { [ket: string]: number };
}) => string;

const applyRule: ApplyRule = ({ rules, partRating }) => {
  // console.log("🚀 ~ file: applyRule.ts:13 ~ rules:", rules)
  return rules.reduce<string>((next, rule) => {
    const { category, comparison, number, destination } = rule;

    // If next has a value a match has been found so stop the comparison
    if (next !== '') {
      return next;
    }

    // If only destination is defined we have reached the last rule and we go to destination
    if (
      category === undefined ||
      comparison === undefined ||
      number === undefined
    ) {
      next = destination;
      return next;
    }

    // Compare rule number based on comparison symbol
    if (
      partRating[category] &&
      comparison === '>' &&
      partRating[category] > Number(number)
    ) {
      next = destination;
    } else if (
      partRating[category] &&
      comparison === '<' &&
      partRating[category] < Number(number)
    ) {
      next = destination;
    }

    return next;
  }, '');
};

export default applyRule;
