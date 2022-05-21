import {
  createTree,
  createBranch,
  createRope,
  createHead,
  createBody,
  createFirtsArm,
  createSecondArm,
  createFirstFoot,
  createSecondFoot,
  restartGame,
  radio,
} from "./canvas-horca.js";

import { getWordSecret } from "./palabra-secreta.js";
import { createFieldLetter, createFieldLetterWrong } from "./horca-letra.js";

const newGame = document.getElementById("new-game");
const wrongLineContainer = document.querySelectorAll(".letter-wrong");

// obteniendo datos de local Storage
const wordsStorage = JSON.parse(localStorage.getItem("words"));

let wordSecret;
let contadorHorca = 1;
let letterNotValid = true;

// horca letra
getWordSecret(wordsStorage, (word) => {
  let lengthWord = word.length;
  wordSecret = word;
  createFieldLetter(lengthWord);
});

createFieldLetterWrong();

let arrayWordSecret = [...wordSecret];

// restart
newGame.addEventListener("click", () => {
  restartGame();
  contadorHorca = 1;

  Swal.fire({
    position: "center",
    icon: "success",
    iconHtml: "👍🏻",
    title: "Buena Suerte",
    background: "#62929eff",
    color: "#fdfdffff",
    showConfirmButton: false,
    // timer: 1500,
  });

  getWordSecret(wordsStorage, (word) => {
    let lengthWord = word.length;
    wordSecret = word;
    createFieldLetter(lengthWord);
    arrayWordSecret = [...wordSecret];
  });

  createFieldLetterWrong();
});

// agregar letra
const addLetter = (letter, i) => {
  const lettersWord = document.querySelectorAll(".letter-container .lineSpan");
  lettersWord[i].textContent = letter;
};

const drawParts = (keyPress) => {
  // erroneos
  if (contadorHorca === 1) {
    createTree();
  }
  if (contadorHorca === 2) {
    createBranch();
  }
  if (contadorHorca === 3) {
    createRope();
  }
  if (contadorHorca === 4) {
    createHead("face1", radio);
  }
  if (contadorHorca === 5) {
    createBody();
    createHead("face2", radio);
  }
  if (contadorHorca === 6) {
    createFirtsArm();
    createHead("face3", radio);
  }
  if (contadorHorca === 7) {
    createSecondArm();
    createHead("face4", radio);
  }
  if (contadorHorca === 8) {
    createFirstFoot();
    createHead("face5", radio);
  }
  if (contadorHorca === 9) {
    createSecondFoot();
    createHead("face6", radio);
  }

  // letras erroneas
  if (contadorHorca <= 9) {
    const wrongLineSpan = document.querySelectorAll(".letter-wrong .lineSpan");
    wrongLineSpan[contadorHorca - 1].textContent = keyPress;
  }

  if (contadorHorca === 9) {
    Swal.fire({
      position: "center",
      icon: "warning",
      iconHtml: "😥",
      title: "Que mal, Casi lo logras",
      background: "#62929eff",
      color: "#fdfdffff",
      showConfirmButton: false,
      //   timer: 1500,
    });

    contadorHorca = 1;
  }

  contadorHorca++;
};

// start
document.addEventListener("keyup", (e) => {
  const reg = RegExp("[a-z]", "i");
  let keyPress = e.key.toUpperCase();

  //* validar si la tecla presionada es una letra
  if (reg.test(keyPress) && keyPress.length === 1) {
    // validar letra
    for (let i = 0; i < arrayWordSecret.length; i++) {
      let letter = arrayWordSecret[i];

      console.log({ wordSecret, letter });
      if (letter === keyPress) {
        console.log("palabra valida");
        arrayWordSecret.splice(i, 1, "0");
        addLetter(letter, i);
        return;
      }
    }

    if (letterNotValid) {
      drawParts(keyPress);
      letterNotValid = true;
    }
  }
});
