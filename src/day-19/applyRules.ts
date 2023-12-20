import applyRule from './applyRule';

type ApplyRules = (args: {
  workflows: {
    [key: string]: Array<{
      category?: string;
      comparison?: string;
      number?: string;
      destination: string;
    }>;
  };
  partRating: { [ket: string]: number };
  name?: string;
}) => string;

const applyRules: ApplyRules = ({ workflows, partRating, name = 'in' }) => {
  // Apply rules recursively until the result is Accepted or Rejected
  const res = applyRule({ rules: workflows[name], partRating });
  // console.log("🚀 ~ file: applyRules.ts:18 ~ res:", res)
  if (res === 'A' || res === 'R') {
    return res;
  }
  return applyRules({ workflows, partRating, name: res });
};

export default applyRules;
