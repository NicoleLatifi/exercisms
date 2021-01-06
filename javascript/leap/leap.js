export const isLeap = (year) => {
  let leapDetermination = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  return leapDetermination
};
