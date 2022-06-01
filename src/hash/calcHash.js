import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const fileToReadPath = path.join(filesPath, 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  const fileToReadContent = await fs.promises.readFile(fileToReadPath, 'utf8');
  const hash = crypto.createHash('sha256');
  hash.update(fileToReadContent);
  const fileHash = hash.digest('hex');
  console.log(fileHash);
};

calculateHash();