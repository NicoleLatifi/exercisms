// declare a variable pangram = true
// iterate over the unicodes for a-z (097 - 122)
// while pangram = true,for every unicode, check to see if it occurs in the input sentence
//     if it doesn't, pangram = false
// return pangram

export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase()
  let pangram = true;
  let i = 97;
  while (i <= 122 && pangram === true) {
    pangram = sentence.includes(String.fromCharCode(i))
    i++
  }
  return pangram
};
