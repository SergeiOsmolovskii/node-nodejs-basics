import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, 'files');
const fileToDecompressPath = path.join(filesPath, 'archive.gz');
const resultFilePath = path.join(filesPath, 'fileToCompress.txt');

export const decompress = async () => {
  const readStream = fs.createReadStream(fileToDecompressPath);
  const writeStream = fs.createWriteStream(resultFilePath);
  const gunzip = zlib.createGunzip();
  readStream.pipe(gunzip).pipe(writeStream);
};

decompress();