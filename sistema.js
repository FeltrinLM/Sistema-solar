/* Funções sol */
var sun = document.getElementById("sun");

sun.addEventListener("click", function () {
  sun.classList.toggle("clicado");
});

/* Mercúrio */
var mercurio = document.getElementById("mercurio");
var duracoesOriginais = [];
mercurio.addEventListener("click", function () {
  var planetas = document.getElementsByClassName("planetas");
  var orbitas = document.getElementsByClassName("orbita");

  if (duracoesOriginais.length === 0) {
    for (var i = 0; i < planetas.length; i++) {
      duracoesOriginais[i] = planetas[i].style.animationDuration;
    }
  }

  for (var i = 0; i < planetas.length; i++) {
    if (planetas[i].style.animationDuration === duracoesOriginais[i]) {
      var duracaoAleatoria = Math.random() * 8 + 0.1;
      planetas[i].style.animationDuration = duracaoAleatoria + "s";
      orbitas[i].style.animationDuration = duracaoAleatoria + "s";
    } else {
      planetas[i].style.animationDuration = duracoesOriginais[i];
      orbitas[i].style.animationDuration = duracoesOriginais[i];
    }
  }
});
/* Vênus */
var venus = document.getElementById("venus");
var body = document.body;

venus.addEventListener("click", function () {
  body.classList.toggle("white-bg");
});

var venus = document.getElementById("venus");
var orbitas = document.getElementsByClassName("orbita");

venus.addEventListener("click", function () {
  for (var i = 0; i < orbitas.length; i++) {
    orbitas[i].classList.toggle("white-bg");
  }
});

/* Terra */

var terra = document.getElementById("terra");

terra.addEventListener("click", function () {
  terra.classList.toggle("clicado");
});

/* Marte */

document.getElementById("marte").addEventListener("click", function() {
  var audio = document.getElementById("audio-marte");
  audio.play();
});

/* Júpiter */
var jupiter = document.getElementById("jupiter");
var planetas = document.getElementsByClassName("planetas");

jupiter.addEventListener("click", function () {
  for (var i = 0; i < planetas.length; i++) {
    planetas[i].classList.toggle("tamanho");
  }
});
/* Saturno */
var saturno = document.getElementById("saturno");

saturno.addEventListener("click", function () {
  var orbita = document.getElementsByClassName("orbita");

  for (var i = 0; i < orbita.length; i++) {
    var estadoAnimacao = orbita[i].style.animationPlayState;

    if (estadoAnimacao === "paused") {
      orbita[i].style.animationPlayState = "running";
    } else {
      orbita[i].style.animationPlayState = "paused";
    }
  }
});
/* Anel */

document.getElementById("anel").addEventListener("click", function() {
  var orbitas = document.getElementsByClassName("orbita");
  var visibilidadeAtual = orbitas[0].style.visibility;

  for (var i = 0; i < orbitas.length; i++) {
    if (orbitas[i].id !== "anel") {
      if (visibilidadeAtual === "hidden") {
        orbitas[i].style.visibility = "visible";
      } else {
        orbitas[i].style.visibility = "hidden";
      }
    }
  }
});

/* Urano */
var uranus = document.getElementById("uranus");
var duracoesOriginais = [];
uranus.addEventListener("click", function () {
  var planetas = document.getElementsByClassName("planetas");
  var orbitas = document.getElementsByClassName("orbita");

  if (duracoesOriginais.length === 0) {
    for (var i = 0; i < planetas.length; i++) {
      duracoesOriginais[i] = planetas[i].style.animationDuration;
    }
  }

  for (var i = 0; i < planetas.length; i++) {
    if (planetas[i].style.animationDuration === duracoesOriginais[i]) {
      var duracaoAleatoria = Math.random() * 30 + 10;
      planetas[i].style.animationDuration = duracaoAleatoria + "s";
      orbitas[i].style.animationDuration = duracaoAleatoria + "s";
    } else {
      planetas[i].style.animationDuration = duracoesOriginais[i];
      orbitas[i].style.animationDuration = duracoesOriginais[i];
    }
  }
});

/* Netuno */
var netuno = document.getElementById("netuno");

netuno.addEventListener("click", function () {
  var planetas = document.getElementsByClassName("planetas");
  var orbitas = document.getElementsByClassName("orbita");

  for (var i = 0; i < planetas.length; i++) {
    var estadoAnimacao = planetas[i].style.animationPlayState;

    if (estadoAnimacao === "paused") {
      planetas[i].style.animationPlayState = "running";
      orbitas[i].style.animationPlayState = "running";
    } else {
      planetas[i].style.animationPlayState = "paused";
      orbitas[i].style.animationPlayState = "paused";
    }
  }
});

