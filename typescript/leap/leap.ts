function isLeapYear(year: number) {
  let leapDetermination = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  return leapDetermination
}

export default isLeapYear
