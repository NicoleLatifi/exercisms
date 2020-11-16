// declare a result variable that will hold the ipnut number as it changes
// declare a numOfSteps counter variable that will count the number of steps
// create while statement that runs if the result is not 1
//  if number is even, divide it by 2
//  if number is odd, multiply it by 3 and add 1
//  increment the numOfSteps counter variable
// return the numOfSteps counter variable

export const steps = (num) => {
  let result = num
  let numOfSteps = 0
  if (result <= 0) {
    throw new Error("Only positive numbers are allowed")
  } else {
    while (result !== 1) {
      if (result % 2 === 0) {
        result = result / 2
      } else {
        result = result * 3 + 1
      }
      numOfSteps++
    }
    return numOfSteps
  }
}
