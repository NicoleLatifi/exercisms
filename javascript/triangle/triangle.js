export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isTriangle() {
    if (
      this.a + this.b > this.c ||
      this.b + this.c > this.a ||
      this.c + this.a > this.b ||
      this.a + this.b + this.c > 0
      ) {
      return true
    }
  }

  isEquilateral() {
    if (this.isTriangle() && this.a === this.b && this.b === this.c && this.c === this.a) {
      return true
    } else {
      return false
    }
  }

  isIsosceles() {
    if (this.isTriangle() && this.a === this.b || this.b === this.c || this.c === this.a) {
      return true
    } else {
      return false
    }
  }

  isScalene() {
    if (this.isTriangle() && this.a !== this.b && this.b !== this.c && this.c !== this.a) {
      return true
    } else {
      return false
    }
  }
}
