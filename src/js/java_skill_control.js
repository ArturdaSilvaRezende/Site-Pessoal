'use strict';

(()=>{

    const openjava = document.querySelector('.open-java')
    const closejava = document.querySelector('.close-java')
    const javaMenssage = document.querySelector('.java-menssage')

    openjava.addEventListener('click', showMessage)
    closejava.addEventListener('click', hideMenu)
    
    function showMessage(){
        javaMenssage.style.display = 'block'
        javaMenssage.classList.add('show-menssage')
        javaMenssage.classList.remove('hide-menssage');
    }

    function hideMenu() {
        
        javaMenssage.classList.add('hide-menssage')
        
        setTimeout(()=> {
            javaMenssage.style.display = 'none'
        }, 1000)
    }

})();