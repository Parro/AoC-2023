import applyRules from '../applyRules';

type First = (input: string) => number;

const first: First = (input) => {
  const [workflowsText, partsRatingsText] = input.split('\n\n');

  // Extract workflows rules
  const workflows = workflowsText.split('\n').reduce<{
    [key: string]: Array<{
      category?: string;
      comparison?: string;
      number?: string;
      destination: string;
    }>;
  }>((acc, workflow) => {
    const workflowMatches = workflow.match(
      /(?<name>[^{]*)\{(?<rulesText>.*)\}/
    );
    if (!workflowMatches) {
      return acc;
    }
    const { name, rulesText } = workflowMatches.groups as {
      name: string;
      rulesText: string;
    };

    // console.log(
    //   '🚀 ~ file: first.ts:8 ~ workflows ~ workflowMatches:',
    //   workflowMatches
    // );
    const rules = rulesText.split(',').map((rule) => {
      const ruleMatches = rule.match(
        /(?<category>[xmas]{1}(?![a-zA-Z]))?(?<comparison>[<>]{1})?(?<number>[0-9]*)?:?(?<destination>[a-zA-Z]+)/
      );
      // console.log(
      //   '🚀 ~ file: first.ts:21 ~ rules ~ ruleMatches:',
      //   ruleMatches
      // );

      return ruleMatches?.groups;
    }) as Array<{
      category?: string;
      comparison?: string;
      number?: string;
      destination: string;
    }>;

    acc[name] = rules;

    return acc;
  }, {});
  // console.log('🚀 ~ file: first.ts:7 ~ workflows:', workflows);

  // Extract parts ratings
  const partsRatings = partsRatingsText.split('\n').map((partRatings) => {
    return partRatings
      .replaceAll(/\{|\}/g, '')
      .split(',')
      .reduce<{ [key: string]: number }>((acc, rating) => {
        const category = rating.substring(0, 1);
        const rate = Number(rating.substring(2));
        acc[category] = rate;
        return acc;
      }, {});
  });

  // Find accepted parts applying rules of workflow to parts rating
  const acceptedParts = partsRatings.filter(
    (partRating) => applyRules({ workflows, partRating }) === 'A'
  );

  // Sum the number in the accepted parts
  return acceptedParts.reduce<number>((tot, acceptedPart) => {
    return (tot += Object.values(acceptedPart).reduce<number>(
      (totRating, rating) => {
        return (totRating += rating);
      },
      0
    ));
  }, 0);
};

export default first;
