class Words {
  count(words: string) {
    words = words.replace('\n', ' ')
    words = words.replace('\t', ' ')
    words = words.trim()
    let wordList = words.split(' ')
    const wordCounts: {[k: string]: number} = {}
    wordList.forEach(word => {
      if (word !== '') {
        word = word.toLowerCase()
        wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1
      }
    })
    console.log(Object.entries(wordCounts))
    return new Map(Object.entries(wordCounts))
  }
}

export default Words
