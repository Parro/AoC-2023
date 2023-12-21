import { Configuration } from './first/first';

type ApplyRule = (args: {
  configurations: { [key: string]: Configuration };
  name: string;
  moduleStatus: { [key: string]: boolean };
  pulses?: { low: number; high: number };
  pulse: boolean;
}) => {
  moduleStatus: { [key: string]: boolean };
  pulses: { low: number; high: number };
  pulse: boolean;
};

const applyRule: ApplyRule = ({
  configurations,
  name,
  moduleStatus,
  pulses = { low: 1, high: 0 },
  pulse = false,
}) => {
  console.log('🚀 ~ file: applyRule.ts:22 ~ name:', name);
  console.log('🚀 ~ file: applyRule.ts:22 ~ pulse:', pulse);
  if (configurations[name].type === 'broadcaster') {
    console.log('broadcaster');
    let nextPulse = pulse;
    configurations[name].destinations.forEach((destination, index) => {
      if (configurations[destination].type === '%') {
        if (pulse === false) {
          moduleStatus[destination] = !moduleStatus[destination];

          if (index === 0) {
            nextPulse = !pulse;
          }
        }
        pulses.low++;
      }
    });
    pulse = nextPulse;
  } else if (configurations[name].type === '%') {
    if (pulse === false) {
      moduleStatus[name] = !moduleStatus[name];
      pulses.low++;
      pulse = moduleStatus[name];
    } else {
      pulses.high++;
    }
  } else if (configurations[name].type === '&') {
    if (moduleStatus[name] === false) {
      pulses.low++;
    } else {
      pulses.high++;
    }
    // moduleStatus[name] = !moduleStatus[name];
    pulse = moduleStatus[name];
  }
  console.log('🚀 ~ file: applyRule.ts:22 ~ mod uleStatus:', moduleStatus);

  if (Object.values(moduleStatus).every((status) => status === false)) {
    return { moduleStatus, pulses, pulse: 0 };
  } else {
    return applyRule({
      configurations,
      name: configurations[name].destinations[0],
      moduleStatus,
      pulses,
      pulse,
    });
  }
};

export default applyRule;
