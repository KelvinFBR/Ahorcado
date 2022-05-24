import { getModeStorage } from "./modes.js";
let colorLetterAlert = "";
let colorBackgroundAlert = "";

// loading
const alertLoading = (text, time) => {
  let modeStorage = getModeStorage();
  //   alerta
  if (modeStorage.mode === "dark") {
    //   dark
    colorLetterAlert = "#fdfdffff";
    colorBackgroundAlert = "#62929eff";
  } else {
    // light
    colorLetterAlert = "#fdfdffff";
    colorBackgroundAlert = "#393d3fff";
  }

  Swal.fire({
    title: text,
    background: colorBackgroundAlert,
    color: colorLetterAlert,
    timer: time,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

// alerta normales
const normalAlert = (text, type, time) => {
  let modeStorage = getModeStorage();

  //   alerta
  if (modeStorage.mode === "dark") {
    //   dark
    colorLetterAlert = "#fdfdffff";
    colorBackgroundAlert = "#62929eff";
  } else {
    // light
    colorLetterAlert = "#fdfdffff";
    colorBackgroundAlert = "#393d3fff";
  }
  Swal.fire({
    position: "center",
    icon: type,
    title: text,
    showConfirmButton: false,
    background: colorBackgroundAlert,
    color: colorLetterAlert,
    timer: time,
  });
};

// alertas con iconos
const normalAlertIcon = (text, type, icon, time) => {
  let modeStorage = getModeStorage();

  //   alerta
  if (modeStorage.mode === "dark") {
    //   dark
    colorLetterAlert = "#fdfdffff";
    colorBackgroundAlert = "#62929eff";
  } else {
    // light
    colorLetterAlert = "#fdfdffff";
    colorBackgroundAlert = "#393d3fff";
  }

  Swal.fire({
    position: "center",
    icon: type,
    iconHtml: icon,
    title: text,
    background: colorBackgroundAlert,
    color: colorLetterAlert,
    showConfirmButton: false,
    timer: time,
  });
};

export { normalAlert, alertLoading, normalAlertIcon };
