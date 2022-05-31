import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const fileToRemovePath = path.join(filesPath, 'fileToRemove.txt');

export const remove = async (fileToRemove) => {
  fs.access(fileToRemove, function (error) {
    if (!error) {
      fs.unlink(fileToRemove, (err) => {
        if (err) throw new Error('FS operation failed');
      });
    } else throw new Error('FS operation failed');
  });
}

remove(fileToRemovePath);