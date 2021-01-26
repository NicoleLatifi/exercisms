const DnaToRna: {[k: string]: string}  = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U",
}

class Transcriptor {
  toRna(dna: string) {
    let result = "";
    [...dna].forEach((char: string) => {
      if (DnaToRna[char]) {
        result = result + DnaToRna[char]
      } else {
        throw new Error('Invalid input DNA.')
      }
    })
    return result
  }
}

export default Transcriptor
