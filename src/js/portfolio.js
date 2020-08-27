'use strict';

(()=> {

    const portfolio_webworld = document.querySelector('.webworld') //portfolio item container

    const btn_portfolio_show = document.querySelector('.portfolio-show')
    btn_portfolio_show.addEventListener('click', webWorldShow)

    const btn_portfolio_hide = document.querySelector('.portfolio-hide')
    btn_portfolio_hide.addEventListener('click', webWorldHide)

    function webWorldShow() {

        portfolio_webworld.style.display = 'block'
        portfolio_webworld.classList.add('show-menssage')
        portfolio_webworld.classList.remove('hide-menssage')

    }
 
    function webWorldHide() {

        portfolio_webworld.classList.add('hide-menssage')

        setTimeout(()=> {

            portfolio_webworld.style.display = 'none'

        }, 1000)
    }

})();

(()=> {

    const portfolio_ustora = document.querySelector('.ustora') //portfolio item container

    const btn_portfolio_show = document.querySelector('.portfolio-show-ustora')
    btn_portfolio_show.addEventListener('click', ustoraShow)

    const btn_portfolio_hide = document.querySelector('.portfolio-hide-ustora')
    btn_portfolio_hide.addEventListener('click', ustoraHide)

    function ustoraShow() {

        portfolio_ustora.style.display = 'block'
        portfolio_ustora.classList.add('show-menssage')
        portfolio_ustora.classList.remove('hide-menssage')

    }

    function ustoraHide() {

        portfolio_ustora.classList.add('hide-menssage')

        setTimeout(()=> {

            portfolio_ustora.style.display = 'none'

        }, 1000)
    }

})(); 

(()=> {

    const portfolio_pizza_delicius = document.querySelector('.pizza-delicius') //portfolio item container

    const btn_portfolio_show = document.querySelector('.portfolio-show-pizza')
    btn_portfolio_show.addEventListener('click', pizzaShow)

    const btn_portfolio_hide = document.querySelector('.portfolio-hide-pizza')
    btn_portfolio_hide.addEventListener('click', pizzaHide)

    function pizzaShow() {

        portfolio_pizza_delicius.style.display = 'block'
        portfolio_pizza_delicius.classList.add('show-menssage')
        portfolio_pizza_delicius.classList.remove('hide-menssage')

    }

    function pizzaHide() {

        portfolio_pizza_delicius.classList.add('hide-menssage')

        setTimeout(()=> {

            portfolio_pizza_delicius.style.display = 'none'

        }, 1000)
    }

})();


(()=> {

    const portfolio_burger = document.querySelector('.burger') //portfolio item container
    
    const btn_portfolio_show = document.querySelector('.portfolio-show-burger')
    btn_portfolio_show.addEventListener('click', burgerShow)

    const btn_portfolio_hide = document.querySelector('.portfolio-hide-burger')
    btn_portfolio_hide.addEventListener('click', burgerHide)

    function burgerShow() {

        portfolio_burger.style.display = 'block'
        portfolio_burger.classList.add('show-menssage')
        portfolio_burger.classList.remove('hide-menssage')

    }

    function burgerHide() {

        portfolio_burger.classList.add('hide-menssage')

        setTimeout(()=> {

            portfolio_burger.style.display = 'none'

        }, 1000)
    }

})();