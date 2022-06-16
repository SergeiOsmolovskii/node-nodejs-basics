export const parseArgs = () => {
  let args = process.argv;
  let arg = 0;

  args.forEach((val, index) => {
    if (index > 1) {
      if (index % 2 === 0) {
        arg = val.slice(2);
      } else {
        console.log(`${arg} is ${val}`);
      }
    }
  });
};

parseArgs();