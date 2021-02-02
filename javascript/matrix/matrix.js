export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    const rows = []
    this.matrix.split("\n").forEach(row => {
      rows.push(row.split(" ").map(num => +num))

    })
    return rows
  }

  get columns() {
    const columns = [];
    for (let i = 0; i < this.rows[0].length; i++) {
      columns.push([])
      for (let j = 0; j < this.rows.length; j++) {
        columns[i].push(this.rows[j][i])
      }
    }
    return(columns)
  }
}
