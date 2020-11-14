//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// iteration 3, recursion
export const reverseString = (str) => {
  if (str === "") { // This is the terminal case that will end the recursion
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
/*
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls

Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
*/

// iteration 2, decrementing for loop and concatenation
// export const reverseString = (str) => {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   return newString;
// };

// iteration 1
// export const reverseString = (str) => {
//   return str.split("").reverse().join("")
// };
