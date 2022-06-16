export const parseEnv = () => {
  let env = process.env;
  const keys = Object.keys(env);
  keys.forEach((val) => {
    if (val.includes('RSS_')) {
      let arg = val;
      console.log(`${arg}=${env[val]}`);
    }
  });
};

parseEnv();