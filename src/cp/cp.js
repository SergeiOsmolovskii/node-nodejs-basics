import * as path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const scriptPath = path.join(filesPath, 'script.js');
const args = process.argv.slice(2);

export const spawnChildProcess = async () => {
  const child = fork(scriptPath, args);

  child.on('message', (data) => {
    process.stdout.write(`stdout: ${data}`);
  });
};

spawnChildProcess();