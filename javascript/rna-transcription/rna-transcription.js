export const toRna = (dna) => {
  const nucleotideComplements = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U',
  }
  const rna = dna.split('').map(dnaNucleotide => {
    return nucleotideComplements[dnaNucleotide]
  })
  return rna.join('')
};
