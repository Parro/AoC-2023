import { promises as fs } from 'fs';

import first from './first';

async function execute() {
  try {
    const input = await fs.readFile(__dirname + '/input.txt');

    const output = first(input.toString());

    console.log('output', output);
  } catch (err) {
    console.log(err);
  }
}
execute();
