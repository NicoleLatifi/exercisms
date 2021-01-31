export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    const result = []
    this.matrix.split(" ").forEach(num => {
      result.push(+num)
    })
    console.log(result)
    return result
  }

  get columns() {
    throw new Error('Remove this statement and implement this function');
  }
}
