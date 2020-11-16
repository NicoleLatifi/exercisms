// iteration 3, recursion
// export const reverseString = (str) => {
//   if (str === "") { // This is the terminal case that will end the recursion
//     return "";
//   } else {
//     return reverseString(str.substr(1)) + str.charAt(0);
//   }
// }

// iteration 2, decrementing for loop and concatenation
export const reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString
}

// iteration 1
// export const reverseString = (str) => {
//   return str.split("").reverse().join("")
// }
