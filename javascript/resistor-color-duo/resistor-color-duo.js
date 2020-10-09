//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (inputColors) => {
  const allColors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  const number1 = allColors.indexOf(inputColors[0]);
  const number2 = allColors.indexOf(inputColors[1]);
  const number = `${number1}${number2}`
  return parseInt(number);
};
