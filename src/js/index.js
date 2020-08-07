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

    setInterval(showDataHora());

    function showDataHora() {
        const data = new Date()
        const hour = data.getHours()
        const minutes = ("0" + data.getMinutes()).slice(-2)

        msgDia.style.fontFamily = "arial";
        messenger.style.fontFamily = "arial";

        if (hour >= 5 && hour < 12) {
            msgDia.innerHTML = "Bom Dia, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
            messenger.innerHTML = `Agora são ${hour}:${minutes}`;

        } else if (hour >= 12 && hour < 18) {
            msgDia.innerHTML = "Boa Tarde, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
            messenger.innerHTML = ` - ${hour}:${minutes}`;
        } else {
            msgDia.innerHTML = "Boa Noite, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
            messenger.innerHTML = ` - ${hour}:${minutes}`;
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



