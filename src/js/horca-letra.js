const letterContainer = document.getElementById("letter-container");
const wrongLineContainer = document.querySelector(".letter-wrong");
const fragmentLineLetterValid = document.createDocumentFragment();
const fragmentLineLetterWrong = document.createDocumentFragment();

const createFieldLetter = (lengthWord) => {
  letterContainer.textContent = "";
  for (let i = 1; i <= lengthWord; i++) {
    const span = document.createElement("span");
    span.classList.add("lineSpan");
    span.dataset.linespan = i - 1;
    fragmentLineLetterValid.appendChild(span);
  }
  letterContainer.appendChild(fragmentLineLetterValid);
};

const createFieldLetterWrong = () => {
  wrongLineContainer.textContent = "";
  for (let i = 1; i <= 9; i++) {
    const span = document.createElement("span");
    span.classList.add("lineSpan");
    span.dataset.linespan = i - 1;
    fragmentLineLetterWrong.appendChild(span);
  }
  wrongLineContainer.appendChild(fragmentLineLetterWrong);
};

export { createFieldLetter, createFieldLetterWrong };
