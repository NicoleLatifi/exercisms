const nucleotideComplements = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}

export const toRna = (dna) => {
  const rna = [...dna].map(dnaNucleotide => nucleotideComplements[dnaNucleotide] )
  return rna.join('')
};
