import * as fs from 'fs';
/* TO FIX */
export const transform = async () => {
  process.stdin.on('data', (data) => {
    
    process.stdout.write(data.toString().split('').reverse().join('').trim());
    process.exit();
  });
};

transform();