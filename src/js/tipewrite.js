'use strict';

//A estrutura abaixo faz o controle da animação (typewrite)
(() => {

    function typeWriter(element) {
        const textAarray = element.innerHTML.split('');
        element.innerHTML = '';

        textAarray.forEach((letra, i) => {

            setTimeout(() => {
                element.innerHTML += letra;
            }, 80 * i)

        });
    }

    //A estrutura abaixo faz o controle do typeWrite do título de apresentação
    const titleApresentation = document.querySelector('.full-name')
    setInterval(() => {
        typeWriter(titleApresentation)
    }, 7000);

})();