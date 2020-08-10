/**
 * Projeto Site Pessoal Versão 1.1
 * @author Artur da Silva Rezende
 */

'use strict';

import { rotas } from './rotas'

//A estrutura abaixo faz o contorle da data e hora
(() => {

    const msgDia = document.querySelector('.msg-dia');//Esta variável mostra o bom dia / tarde / noite
    const messenger = document.querySelector('.show-data-hora')//Esta variável recebe a hora e exibe
    const dayName = new Array("domingo ", "segunda-feira ", "terça-feira ", "quarta-feira ", "quinta-feira ", "sexta-feira ", "sábado ")
    const monName = new Array("janeiro ", "fevereiro ", "março ", "abril ", "maio ", "junho ", "agosto ", "outubro ", "novembro ", "dezembro ")

   const control_time = setInterval(showDataHora, 500);

    function showDataHora() {
        const data = new Date()
        const hour = data.getHours()
        const minutes = ("0" + data.getMinutes()).slice(-2)
        const secound = ("0" + data.getSeconds()).slice(-2)

        msgDia.style.fontFamily = "arial";
        messenger.style.fontFamily = "arial";

        if (hour >= 5 && hour < 12) {
            msgDia.innerHTML = "Bom dia, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
            messenger.innerHTML = ` - ${hour}:${minutes}:${secound}`;

        } else if (hour >= 12 && hour < 18) {
            msgDia.innerHTML = "Boa tarde, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
            messenger.innerHTML = ` - ${hour}:${minutes}:${secound}`;
        } else {
            msgDia.innerHTML = "Boa noite, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
            messenger.innerHTML = ` - ${hour}:${minutes}:${secound}`;
        }

    }

})();

//A estrutura abaixo faz o controle do show e hide do menu de navegação
(() => {

    const menuHeader = document.querySelector('.nav-main')

    const btnShowMenu = document.querySelector('.btn-show-menu')
    btnShowMenu.addEventListener('click', showMenu)

    const btnCloseMenu = document.querySelector('.btn-close-menu')
    btnCloseMenu.addEventListener('click', hideMenu)

    function showMenu(){
        menuHeader.style.right = '0px'
        menuHeader.classList.add('animation-menu-show')
        menuHeader.classList.remove('animation-menu-hide')
        
    }

    function hideMenu() {
        menuHeader.style.right = '-54%'
        menuHeader.classList.add('animation-menu-hide')
    }

})();

//A estrutura abaixo faz o controle da animação (typewrite)
(()=> {

    const titleApresentation = document.querySelector('.full-name')
    setInterval(()=> {
        typeWriter(titleApresentation);
    }, 7000);

    function typeWriter(element) {
        const textAarray = element.innerHTML .split('');
        element.innerHTML = '';

        textAarray.forEach((letra, i) => {

            setTimeout(() => {
                element.innerHTML += letra;
            }, 80 * i)

        });
    }

})();



