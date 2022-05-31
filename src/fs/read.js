import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const fileToReadPath = path.join(filesPath, 'fileToRead.txt');

export const read = async (filePath) => {
  fs.access(filePath, async (error) => {
    if (!error) {
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      console.log(fileContent);
    } else throw new Error('FS operation failed');
  });
}

read(fileToReadPath);