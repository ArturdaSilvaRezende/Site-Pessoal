'use strict';

(()=> {

    const portifolio_webworld = document.querySelector('.webworld') //portifolio item container

    //Buttons control Projeto WebWorld
    const btn_portifolio_show = document.querySelector('.portifolio-show')
    btn_portifolio_show.addEventListener('click', webWorldShow)

    const btn_portifolio_hide = document.querySelector('.portifolio-hide')
    btn_portifolio_hide.addEventListener('click', webWorldHide)

    function webWorldShow() {

        portifolio_webworld.style.display = 'block'
        portifolio_webworld.classList.add('show-menssage')
        portifolio_webworld.classList.remove('hide-menssage')

    }

    function webWorldHide() {

        portifolio_webworld.classList.add('hide-menssage')

        setTimeout(()=> {

            portifolio_webworld.style.display = 'none'

        }, 1000)
    }

})();

(()=> {

    const portifolio_ustora = document.querySelector('.ustora') //portifolio item container

    //Buttons control Projeto WebWorld
    const btn_portifolio_show = document.querySelector('.portifolio-show-ustora')
    btn_portifolio_show.addEventListener('click', ustoraShow)

    const btn_portifolio_hide = document.querySelector('.portifolio-hide-ustora')
    btn_portifolio_hide.addEventListener('click', ustoraHide)

    function ustoraShow() {

        portifolio_ustora.style.display = 'block'
        portifolio_ustora.classList.add('show-menssage')
        portifolio_ustora.classList.remove('hide-menssage')

    }

    function ustoraHide() {

        portifolio_ustora.classList.add('hide-menssage')

        setTimeout(()=> {

            portifolio_ustora.style.display = 'none'

        }, 1000)
    }

})();

(()=> {

    const portifolio_pizza_delicius = document.querySelector('.pizza-delicius') //portifolio item container

    //Buttons control Projeto WebWorld
    const btn_portifolio_show = document.querySelector('.portifolio-show-pizza')
    btn_portifolio_show.addEventListener('click', pizzaShow)

    const btn_portifolio_hide = document.querySelector('.portifolio-hide-pizza')
    btn_portifolio_hide.addEventListener('click', pizzaHide)

    function pizzaShow() {

        portifolio_pizza_delicius.style.display = 'block'
        portifolio_pizza_delicius.classList.add('show-menssage')
        portifolio_pizza_delicius.classList.remove('hide-menssage')

    }

    function pizzaHide() {

        portifolio_pizza_delicius.classList.add('hide-menssage')

        setTimeout(()=> {

            portifolio_pizza_delicius.style.display = 'none'

        }, 1000)
    }

})();


(()=> {

    const portifolio_burger = document.querySelector('.burger') //portifolio item container

    //Buttons control Projeto WebWorld
    const btn_portifolio_show = document.querySelector('.portifolio-show-burger')
    btn_portifolio_show.addEventListener('click', burgerShow)

    const btn_portifolio_hide = document.querySelector('.portifolio-hide-burger')
    btn_portifolio_hide.addEventListener('click', burgerHide)

    function burgerShow() {

        portifolio_burger.style.display = 'block'
        portifolio_burger.classList.add('show-menssage')
        portifolio_burger.classList.remove('hide-menssage')

    }

    function burgerHide() {

        portifolio_burger.classList.add('hide-menssage')

        setTimeout(()=> {

            portifolio_burger.style.display = 'none'

        }, 1000)
    }

})();