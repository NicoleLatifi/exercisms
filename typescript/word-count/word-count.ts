class Words {
  count(words: string): Map<string, number> {
    words = words.trim()
    words = words.toLowerCase()
    let wordList = words.split(/\s+/)
    return wordList.reduce((wordCounts, word) => {
      return wordCounts.set(word, wordCounts.get(word) + 1 || 1)
    }, new Map())
  }
}

export default Words
