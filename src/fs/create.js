import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');

export const create = async () => {
  fs.access(filePath, function (error) {
    if (error) {
      fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else throw new Error('FS operation failed');
  });
}

create();