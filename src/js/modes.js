const localStorageMode = {
  mode: "",
};

const addModeStorage = (mode) => {
  localStorageMode.mode = mode;
  localStorage.setItem("mode", JSON.stringify(localStorageMode));
};

const getModeStorage = () => {
  return JSON.parse(localStorage.getItem("mode"));
};

const addMode = () => {
  let darkValid = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (darkValid) {
    addModeStorage("dark");
  } else {
    addModeStorage("light");
  }
};

// validaciones
const validateMode = () => {
  localStorageMode = getModeStorage();
  if (localStorageMode.mode !== "dark") {
    document.body.classList.remove("light");
    addModeStorage("dark");
  } else {
    document.body.classList.add("light");
    addModeStorage("light");
  }
};

const validaModeStorage = (localStorageMode) => {
  if (!localStorage.getItem("mode")) {
    // mode preferencia del ususarios
    addMode();
    localStorageMode = getModeStorage();
    changeMode(localStorageMode.mode);
  } else {
    // mode del localStorage
    localStorageMode = getModeStorage();
    changeMode(localStorageMode.mode);
  }
};

// dark or light
const changeMode = (mode) => {
  if (mode !== "dark") {
    document.body.classList.add("light");
    return;
  }
  document.body.classList.remove("light");
};

export {
  addModeStorage,
  addMode,
  getModeStorage,
  changeMode,
  validateMode,
  validaModeStorage,
};
