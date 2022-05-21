const wordsDefault = {
  words: [
    "PADRE",
    "MADRE",
    "PISCINA",
    "IGLESIA",
    "JAVA",
    "PYTHON",
    "CENAR",
    "COMER",
    "PAPEL",
  ],
};

console.log(wordsDefault.words);

if (!localStorage.getItem("words")) {
  localStorage.setItem("words", JSON.stringify(wordsDefault));
}
