class Gigasecond {
  private inputDate: Date;

  constructor(inputDate: Date) {
    this.inputDate = inputDate;
  }

  date(): Date {
    const startingDate = this.inputDate.getTime()
    const outputDate = startingDate + 10 ** 12
    return new Date(outputDate)
  }
}

export default Gigasecond
