class Gigasecond {
  inputDate: Date;

  constructor(inputDate: Date) {
    this.inputDate = inputDate
  }

  date() {
    const startingDate = Date.parse(this.inputDate.toString())
    const outputDate = startingDate + 1000000000000
    return new Date(outputDate)
  }
}

export default Gigasecond
