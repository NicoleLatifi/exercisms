// declare a variable pangram = true
// iterate over the unicodes for a-z (097 - 122)
// while pangram = true,for every unicode, check to see if it occurs in the input sentence
//     if it doesn't, pangram = false
// return pangram

const unicodes = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
]

export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase()
  const isCharIncluded = (currentChar) => sentence.includes(currentChar);
  return unicodes.every(isCharIncluded)
};
