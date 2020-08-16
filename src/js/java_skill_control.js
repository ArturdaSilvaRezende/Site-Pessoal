'use strict';

(()=>{

    const openjava = document.querySelector('.open-java')
    const closejava = document.querySelector('.close-java')
    const javaMenssage = document.querySelector('.java-menssage')

    openjava.addEventListener('click', showMessage)
    closejava.addEventListener('click', hideMenu)
    
    function showMessage(){
        javaMenssage.style.display = 'block'
        javaMenssage.classList.add('show-java-menssage')
        javaMenssage.classList.remove('hide-java-menssage');
    }

    function hideMenu() {
        
        javaMenssage.classList.add('hide-java-menssage')
        
        setTimeout(()=> {
            javaMenssage.style.display = 'none'
        }, 1000)
    }

})();