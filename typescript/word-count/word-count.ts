class Words {
  count(words: string) {
    const wordList = words.split(' ')
    const wordCounts: {[k: string]: number} = {}
    wordList.forEach(word => {
      wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1
    }) 
    return new Map(Object.entries(wordCounts))
  }
}

export default Words
