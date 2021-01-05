export const toRna = (dna) => {
  const rna = dna.split('').map(dnaNucleotide => {
    const nucleotideComplements = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    }
    return nucleotideComplements[dnaNucleotide]
  })
  return rna.join('')
};
