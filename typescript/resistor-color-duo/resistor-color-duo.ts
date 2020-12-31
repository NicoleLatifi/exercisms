const colorCodes: {[k: string]: number}  = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
}

export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    this.colors = colors
  }

  value(): number {
    let total: number = 0
    total += colorCodes[this.colors[0]] * 10
    total += colorCodes[this.colors[1]]

    return total
  }
}
