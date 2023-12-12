import { promises as fs } from 'fs';

import second from './second';

async function execute() {
  try {
    const input = await fs.readFile(__dirname + '/../input.txt');

    const output = second(input.toString());

    console.log('output', output);
  } catch (err) {
    console.log(err);
  }
}
execute();
