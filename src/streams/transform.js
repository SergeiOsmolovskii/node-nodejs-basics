import { Transform } from 'stream';

const myTransform = () => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const transformResult = chunk.toString().split('').reverse().join('').trim();
      callback(null, transformResult);
      process.exit();
    }
  });
}

export const transform = async () => {
  process.stdin.pipe(myTransform()).pipe(process.stdout);
};

transform();