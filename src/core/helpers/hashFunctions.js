export const hashFn = () => {
  const R_NUM = Math.random() * 100;
  const NUM = 1500000000000;
  const currentTime = new Date().getTime();
  const hash = parseInt((currentTime - NUM) / R_NUM);
  return hash.toString();
};
