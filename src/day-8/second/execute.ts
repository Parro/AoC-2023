import { performance } from 'node:perf_hooks';

import { promises as fs } from 'fs';

import second from './second';

async function execute() {
  try {
    performance.mark('start');
    const input = await fs.readFile(__dirname + '/../input.txt');

    const output = second(input.toString());

    console.log('output', output);
    performance.mark('end');
    const measure = performance.measure('measure fn', 'start', 'end');
    const executionTime = `${measure.duration.toFixed(3)} ms`;

    console.log('executionTime:', executionTime);
  } catch (err) {
    console.log(err);
  }
}
execute();
