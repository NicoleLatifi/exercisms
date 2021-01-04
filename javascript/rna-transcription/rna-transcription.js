//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = []
  dna.split('').forEach(dnaNucleotide => {
    let rnaNucleotide
    if (dnaNucleotide === 'G') {
      rnaNucleotide = 'C'
    } else if (dnaNucleotide === 'C') {
      rnaNucleotide = 'G'
    } else if (dnaNucleotide === 'T') {
      rnaNucleotide = 'A'
    } else if (dnaNucleotide === 'A') {
      rnaNucleotide = 'U'
    }

    rna.push(rnaNucleotide)
  })
  return rna.join('')
};
