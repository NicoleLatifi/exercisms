export class Squares {
  num: number;
  squareOfSum: number;

  constructor(n: number) {
    this.num = n;
    this.squareOfSum = this.calcSquareOfSum();

  }

  calcSquareOfSum(): number {
    let result: number = 0;
    for (let i = this.num; i > 0; i--) {
      result = result + i
    }
    return (result ** 2)
  }
  
  sumOfSquares() {

  }

  difference() {

  }
}