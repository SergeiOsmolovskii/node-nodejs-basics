import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const fileToWritePath = path.join(filesPath, 'fileToWrite.txt');

export const write = async () => {
  const writeStream = fs.createWriteStream(fileToWritePath);
  process.stdin.on('data', (data) => {
    writeStream.write(data);
    process.exit();
  });
};

write();