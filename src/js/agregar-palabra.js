const btn = document.querySelector(".btn-primary");
const form = document.querySelector("#form");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  //* capturar datos del formulario
  let data = new FormData(form);
  const newWord = data.get("new_word").toUpperCase();

  //* validar formularios
  //   let reg = new RegExp("[0-9]", "g");
  let reg = new RegExp("^[a-zA-Z ]*$", "g");

  if (newWord.length <= 0 || newWord.length > 8) {
    //   alerta
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Cantidad de letras no valida",
      showConfirmButton: false,
      background: "#62929eff",
      color: "#fdfdffff",
      timer: 1800,
    });

    //   reset formulario
    form.reset();

    throw new Error("Cantidad de letras no valida");
  }

  if (!reg.test(newWord)) {
    // alerta;
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "No se permiten numeros o signos",
      showConfirmButton: false,
      background: "#62929eff",
      color: "#fdfdffff",
      timer: 1800,
    });

    //   reset formulario
    form.reset();

    throw new Error("No se permiten numeros");
  }

  //* Agregar palabra nueva a la lista de palabras y subirla a localStorage
  const wordsStorage = JSON.parse(localStorage.getItem("words"));
  wordsStorage["words"].push(newWord);
  localStorage.setItem("words", JSON.stringify(wordsStorage));

  //   alerta
  Swal.fire({
    title: "Guardando palabra...",
    background: "#62929eff",
    color: "#fdfdffff",
    timer: 1800,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  // *  redirecionar al juego
  setInterval(() => {
    window.location.href = "game.html";
  }, 2000);
});
