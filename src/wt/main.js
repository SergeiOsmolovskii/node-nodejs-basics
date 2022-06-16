import * as worker from 'worker_threads';
import * as os from 'os';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
  const CPUCount = os.cpus().length;
  const promisesArray = [];

  for (let i = 1; i <= CPUCount; i++) {
    promisesArray.push(new Promise((res, rej) => {
      const newWorker = new worker.Worker(workerPath, {
        workerData: i + 10
      });
      newWorker.on('message', res);
      newWorker.on('error', rej);
    }));
  }

  await Promise.allSettled(promisesArray).then((value) => {
    console.log(value);
  });
};

performCalculations();