export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    const hours = (this.hours < 10 ? `0${this.hours}` : `${this.hours}`)
    const minutes = (this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`)
    return `${hours}:${minutes}`
  }

  plus() {
    
  }

  minus() {
    
  }

  equals() {
    
  }
}
