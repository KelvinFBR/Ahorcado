import { addModeStorage, getModeStorage, validaModeStorage } from "./modes.js";

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

const circleSwitch = document.getElementById("circle-switch");
let localStorageMode;

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

validaModeStorage(localStorageMode);

if (!localStorage.getItem("words")) {
  localStorage.setItem("words", JSON.stringify(wordsDefault));
}
