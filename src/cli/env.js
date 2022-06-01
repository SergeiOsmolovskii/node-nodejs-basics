export const parseEnv = () => {
  let args = process.argv;
  let arg = 0;

  args.forEach((val, index) => {
    if (index > 1) {
      if (index % 2 === 0 && val.includes('RSS_')) {
        arg = val.slice(2);
      } else if (arg !== 0) {
        console.log(`${arg}=${val}`);
        arg = 0;
      }
    }
  });
};

parseEnv();