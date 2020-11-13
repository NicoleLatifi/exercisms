import { colorCode, COLORS } from '../resistor-color/resistor-color'

export const decodedValue = ([firstColor, secondColor]) => {
  // const [a, b] = inputColors
  return (colorCode(firstColor) * 10) + colorCode(secondColor)
}

// iteration 1
// export const decodedValue = (inputColors) => {
//   const [a, b] = inputColors
//   return (colorCode(a) * 10) + colorCode(b)
// };

// iteration 1
// export const decodedValue = (inputColors) => {
  //   const allColors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  //   const number1 = allColors.indexOf(inputColors[0]);
  //   const number2 = allColors.indexOf(inputColors[1]);
  //   const number = `${number1}${number2}`
  //   return parseInt(number);
  // };
