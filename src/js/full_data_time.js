"use strict";

//A estrutura abaixo faz o contorle da data e hora
(() => {
  const control_time = setInterval(showDataHora, 500);

  function showDataHora() {
    const msgDia = document.querySelector(".msg-dia"); //Esta variável mostra o bom dia / tarde / noite
    const messenger = document.querySelector(".show-data-hora"); //Esta variável recebe a hora e exibe

    const dayName = new Array(
      "domingo ",
      "segunda-feira ",
      "terça-feira ",
      "quarta-feira ",
      "quinta-feira ",
      "sexta-feira ",
      "sábado "
    );

    const monName = new Array(
      "janeiro ",
      "fevereiro ",
      "março ",
      "abril ",
      "maio ",
      "junho ",
      "agosto ",
      "outubro ",
      "novembro ",
      "dezembro "
    );

    const data = new Date();
    const hour = ("0" + data.getHours()).slice(-2);
    const minutes = ("0" + data.getMinutes()).slice(-2);
    const secound = ("0" + data.getSeconds()).slice(-2);

    msgDia.style.fontFamily = "arial";
    messenger.style.fontFamily = "arial";

    if (hour >= 5 && hour < 12) {
      msgDia.innerHTML = `Bom dia, 
        ${dayName[data.getDay()]} 
        ${[data.getDate()]} de 
        ${monName[data.getMonth()]} de 
        ${data.getFullYear()}`;

      messenger.innerHTML = ` - ${hour}:${minutes}:${secound}`;
    } else if (hour >= 12 && hour < 18) {
      msgDia.innerHTML = `Boa tarde, 
        ${dayName[data.getDay()]} 
        ${[data.getDate()]} de 
        ${monName[data.getMonth()]} de 
        ${data.getFullYear()}`;

      messenger.innerHTML = ` - ${hour}:${minutes}:${secound}`;
    } else {
      msgDia.innerHTML = `Boa noite, 
        ${dayName[data.getDay()]} 
        ${[data.getDate()]} de 
        ${monName[data.getMonth()]} de 
        ${data.getFullYear()}`;

      messenger.innerHTML = ` - ${hour}:${minutes}:${secound}`;
    }
  }
})();
