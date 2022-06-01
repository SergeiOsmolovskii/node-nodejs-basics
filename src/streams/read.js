import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const fileToReadPath = path.join(filesPath, 'fileToRead.txt');

export const read = async () => {
  const readStream = fs.createReadStream(fileToReadPath, 'utf8');
  readStream.on('data', (data) => {
    process.stdout.write(data);
  });
};

read();