import * as worker from 'worker_threads';
import * as os from 'os';

export const performCalculations = async () => {
  const CPUCount = os.cpus().length;
  const promisesArray = [];

  for (let i = 1; i <= CPUCount; i++) {
    promisesArray.push(new Promise((res, rej) => {
      const newWorker = new worker.Worker('./wt/worker.js', {
        workerData: i + 10
      })
      newWorker.on('message', res);
      newWorker.on('error', rej);
    }));
  }

  await Promise.allSettled(promisesArray).then((value) => {
    console.log(value);
  });
};

performCalculations();