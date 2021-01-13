export class Squares {
  num: number;
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  constructor(n: number) {
    this.num = n;
    this.squareOfSum = this.calcSquareOfSum();
    this.sumOfSquares = this.calcSumOfSquares();
    this.difference = this.squareOfSum - this.sumOfSquares
  }

  calcSquareOfSum(): number {
    let result: number = 0;
    for (let i = this.num; i > 0; i--) {
      result += i
    }
    return result ** 2
  }
  
  calcSumOfSquares(): number {
    let result: number = 0;
    for (let i = this.num; i > 0; i--) {
      result += (i ** 2)
    }
    return result
  }
}