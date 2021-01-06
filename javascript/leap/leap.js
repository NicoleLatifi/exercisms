export const isLeap = (year) => {
  let check = {
    divisibleBy4: year % 4 === 0 ? true : false,
    divisibleBy100: year % 100 === 0 ? true : false,
    divisibleBy400: year % 400 === 0 ? true : false,
  }
  let leapDetermination = false
  if (
    check.divisibleBy4 && !check.divisibleBy100 ||
    check.divisibleBy4 && check.divisibleBy100 && check.divisibleBy400
    ) {
    leapDetermination = true
  }
  return leapDetermination
};
