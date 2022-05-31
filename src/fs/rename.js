import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const wrongFilePath = path.join(filesPath, 'wrongFilename.txt');
const newFilePath = path.join(filesPath, 'properFilename.md');

export const rename = (filePath, newFilePath) => {
  fs.access(filePath, function (error) {
    if (!error) {
      fs.promises.rename(filePath, newFilePath, () => {
        if (error) throw new Error('FS operation failed');
      });
    } else throw new Error('FS operation failed');
  });
}

rename(wrongFilePath, newFilePath);