//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let divisibleBy4
  let divisibleBy100
  let divisibleBy400
  let leapDetermination
  // if (year %= 4 === 0) {
  //   return true
  // } else {
  //   return false
  // }
  year % 4 === 0 ? divisibleBy4 = true : divisibleBy4 = false
  year % 100 === 0 ? divisibleBy100 = true : divisibleBy100 = false
  year % 400 === 0 ? divisibleBy400 = true : divisibleBy400 = false
  console.log(divisibleBy4)
  if (divisibleBy4 ) {
    leapDetermination = true
  } else {
    leapDetermination = false
  }
  return leapDetermination
};
