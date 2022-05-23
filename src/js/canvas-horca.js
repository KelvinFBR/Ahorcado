import { getModeStorage } from "./modes.js";

const canvasDrew = document.getElementById("canvas-drew");
const ctx = canvasDrew.getContext("2d");

let fillColor;
let strokeColor;
let lineDarkMode;
let linelightMode;

const switchColorCanvas = () => {
  let { mode } = getModeStorage();
  //   alerta
  if (mode === "dark") {
    //   dark
    strokeColor = "#fdfdffff";
  } else {
    // light
    strokeColor = "#393d3fff";
  }
};

switchColorCanvas();

ctx.fillStyle = strokeColor;
ctx.lineWidth = 2;
ctx.lineCap = "round";
ctx.lineJoin = "round";
let radio = 25;

const faces = {
  face1: "assets/img/face-1.svg",
  face2: "assets/img/face-2.svg",
  face3: "assets/img/face-3.svg",
  face4: "assets/img/face-4.svg",
  face5: "assets/img/face-5.svg",
  face6: "assets/img/face-6.svg",
};

// X
const midPointX = canvasDrew.width / 2;
const maxPointX = canvasDrew.width;
// Y
const midPointY = canvasDrew.height / 2;
const maxPointY = canvasDrew.height;

const createTree = () => {
  ctx.strokeStyle = strokeColor;
  ctx.beginPath();
  ctx.moveTo(midPointX * 0.6, maxPointY);
  // arbol
  ctx.lineTo(midPointX * 0.6, maxPointY * 0.1);
  // trazo
  ctx.stroke();
};

const createBranch = () => {
  ctx.beginPath();
  // rama
  ctx.moveTo(midPointX * 0.6, maxPointY * 0.1);
  ctx.lineTo(midPointX, maxPointY * 0.1);
  // trazo
  ctx.stroke();
};

const createRope = () => {
  ctx.beginPath();
  // soga
  ctx.moveTo(midPointX, maxPointY * 0.1);
  ctx.lineTo(midPointX, maxPointY * 0.16);
  // trazo
  ctx.stroke();
};

const createHead = (face, radio) => {
  ctx.beginPath();
  let img = new Image();
  img.src = faces[face];
  //   borrador
  ctx.clearRect(midPointX - 35, midPointY * 0.32, 65, 51.4);
  //   circulo face

  ctx.strokeStyle = "#fdfdffff";
  ctx.arc(midPointX * 0.834 + radio, maxPointY * 0.33, radio, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = strokeColor;
  //   img face
  img.addEventListener("load", () => {
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.drawImage(img, midPointX * 0.84, maxPointY * 0.172, 48, 48);
  });
};

const createBody = () => {
  ctx.beginPath();
  // cuerpo
  ctx.moveTo(midPointX, maxPointY * 0.5);
  ctx.lineTo(midPointX, maxPointY * 0.8);
  // trazo
  ctx.stroke();
};

const createFirstFoot = () => {
  ctx.beginPath();
  // pierna;
  ctx.moveTo(midPointX, maxPointY * 0.8);
  ctx.lineTo(midPointX * 0.9, maxPointY * 0.95);
  // trazo
  ctx.stroke();
};

const createSecondFoot = () => {
  ctx.beginPath();
  //  pierna
  ctx.moveTo(midPointX, maxPointY * 0.8);
  ctx.lineTo(midPointX * 1.09, maxPointY * 0.95);
  // trazo
  ctx.stroke();
};

const createFirtsArm = () => {
  ctx.beginPath();
  // brazo;
  ctx.moveTo(midPointX, maxPointY * 0.55);
  ctx.lineTo(midPointX * 0.9, maxPointY * 0.7);
  // trazo
  ctx.stroke();
};

const createSecondArm = () => {
  ctx.beginPath();
  // brazo
  ctx.moveTo(midPointX, maxPointY * 0.55);
  ctx.lineTo(midPointX * 1.09, maxPointY * 0.7);
  // trazo
  ctx.stroke();
};

const restartGame = (contadorHorca) => {
  ctx.clearRect(0, 0, maxPointX, maxPointY);
};

export {
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
  switchColorCanvas,
};
