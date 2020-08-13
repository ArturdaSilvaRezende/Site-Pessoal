'use strict';

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

