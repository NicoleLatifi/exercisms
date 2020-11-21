//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isEquilateral() {
    if (this.a === this.b && this.b === this.c && this.c === this.a) {
      return true
    }
  }

  isIsosceles() {
    throw new Error("Remove this statement and implement this function");
  }

  isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
