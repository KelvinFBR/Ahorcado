import { validaModeStorage, getModeStorage, addModeStorage } from "./modes.js";
import { alertLoading, normalAlert } from "./alerts.js";
const btn = document.querySelector(".btn-primary");
const form = document.querySelector("#form");
const circleSwitch = document.getElementById("circle-switch");

let localStorageMode;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // capturar palabra en el localStorage
  const wordsStorage = JSON.parse(localStorage.getItem("words"));

  //* capturar datos del formulario
  let data = new FormData(form);
  const newWord = data.get("new_word").trim().toUpperCase();

  //* validar formularios
  let reg = new RegExp("^[a-zA-Z ]*$", "g");

  if (newWord.length < 3 || newWord.length > 8) {
    //   alerta

    normalAlert("Cantidad de letras no valida", "warning", 1800);

    //   reset formulario
    form.reset();

    throw new Error("Cantidad de letras no valida");
  }

  if (!reg.test(newWord)) {
    // alerta;
    normalAlert("No se permiten numeros o signos", "warning", 1800);

    //   reset formulario
    form.reset();

    throw new Error("No se permiten numeros");
  }

  if (wordsStorage["words"].includes(newWord)) {
    //   alerta

    normalAlert("Esta palabra ya existe", "warning", 1800);

    //   reset formulario
    form.reset();

    throw new Error("Esta palabra ya existe");
  }

  //* Agregar palabra nueva a la lista de palabras y subirla a localStorage
  wordsStorage["words"].push(newWord);
  localStorage.setItem("words", JSON.stringify(wordsStorage));

  //   loading
  alertLoading("Guardando palabra...", 1800);

  // *  redirecionar al juego
  setInterval(() => {
    window.location.href = "game.html";
  }, 2000);
});

circleSwitch.addEventListener("click", () => {
  localStorageMode = getModeStorage();
  if (localStorageMode.mode !== "dark") {
    document.body.classList.remove("light");
    addModeStorage("dark");
  } else {
    document.body.classList.add("light");
    addModeStorage("light");
  }
});

validaModeStorage();
