//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.

// Black: 0
// Brown: 1
// Red: 2
// Orange: 3
// Yellow: 4
// Green: 5
// Blue: 6
// Violet: 7
// Grey: 8
// White: 9
//

export const colorCode = (colorName) => {
  const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }
  return colors[colorName]
};

export const COLORS = undefined;
