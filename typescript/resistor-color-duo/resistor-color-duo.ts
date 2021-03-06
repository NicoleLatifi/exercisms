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
    if (this.colors.length < 2) {
      throw new Error('At least two colors need to be present')
    }
  }

  value(): number {
    return colorCodes[this.colors[0]] * 10 + colorCodes[this.colors[1]]
  }
}
