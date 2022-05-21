const getWordSecret = (wordsStorage, wordSecret) => {
  const numRandom = Math.round(Math.random() * (wordsStorage.words.length - 1));
  return wordSecret(wordsStorage.words[numRandom]);
};

export { getWordSecret };
