let main, entrenando, start, finish, volver, comienzoHora, comienzoMinutos, finHora, finMinutos, diferenciaHora, diferenciaMinutos, entrenado, hora, horaFinal;
main = document.getElementById('main');
entrenando = document.getElementById('entrenando');
start = document.getElementById('start');
finish = document.getElementById('finish');
volver = document.getElementById('volver');
entrenado = document.getElementById('entrenado');
hora = document.getElementById('hora');
horaFinal = document.getElementById('horaFinal');

start.addEventListener('click', () => {
  main.style.display = "none";
  entrenando.style.display = "block";
  start.style.display = "none";
  finish.style.display = "block";
  comienzoHora = new Date().getHours();
  comienzoMinutos = new Date().getMinutes();
});
finish.addEventListener('click', (obtenerResultado) => {
  finHora = new Date().getHours();
  finMinutos = new Date().getMinutes();
  main.style.display = "block";
  main.innerHTML = "🎉 ¡Felicitaciones!";
  entrenando.style.display = "none";
  finish.style.display = "none";
  if (finHora > comienzoHora) {
    diferenciaHora = finHora - comienzoHora;
  } else {
    diferenciaHora = comienzoHora - finHora;
  }
  if (finMinutos > comienzoMinutos) {
    diferenciaMinutos = finMinutos - comienzoMinutos;
  } else {
    diferenciaMinutos = comienzoMinutos - finMinutos;
  }
  if (diferenciaHora === 0 && diferenciaMinutos === 1) {
    entrenado.innerHTML = `¡Entrenaste ${diferenciaMinutos} minuto!`;
  } else if (diferenciaHora === 0 && diferenciaMinutos != 1) {
    entrenado.innerHTML = `¡Entrenaste ${diferenciaMinutos} minutos!`;
  } else if (diferenciaHora != 0 && diferenciaMinutos === 1) {
    entrenado.innerHTML = `¡Entrenaste ${diferenciaMinutos} minuto!`;
  } else if (diferenciaHora != 0 && diferenciaMinutos != 1) {
    entrenado.innerHTML = `¡Entrenaste ${diferenciaMinutos} minutos!`;
  }
  hora.innerHTML = `Comenzaste a las ${comienzoHora}:${comienzoMinutos}hs`;
  horaFinal.innerHTML = `Terminaste a las ${finHora}:${finMinutos}hs`;
  volver.style.display = "block";
});
volver.addEventListener('click', () => {
  window.location.reload();
})