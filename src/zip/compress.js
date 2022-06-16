import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const fileToCompressPath = path.join(filesPath, 'fileToCompress.txt');
const resultFilePath =  path.join(filesPath, 'archive.gz');

export const compress = async () => {
  const readStream = fs.createReadStream(fileToCompressPath, 'utf8');
  const writeStream = fs.createWriteStream(resultFilePath);
  const gzip = zlib.createGzip();
  readStream.pipe(gzip).pipe(writeStream);
};

compress();