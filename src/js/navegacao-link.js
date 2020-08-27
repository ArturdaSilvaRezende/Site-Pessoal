"use strict";

(() => {
  const menuHeader = document.querySelectorAll('.menu-header a[href^="#"]')
  
  menuHeader.forEach((item) => {
    item.addEventListener("click", scrollClick)
  });

  //A função abaixo vai identificar qual elemento foi clicado e faz a chamada da função getScroll
  function scrollClick(event) {
    event.preventDefault();
    const to = getScroll(event.target) - 106;
    scrollPosition(to);
  }
 
  //Afunção abaixo faz a suavização da navegação entre os links
  function scrollPosition(to) {

    /*
      window.scroll({
            top: to,
            behavior: "smooth",
        });
    */
    
   smoothScrollTo(0, to, 1000)
  }

  //A função abaixo vai pegar o atributo dos links de navegação (e seus valores) e fazer a referência das sections e pega seus valores de scroll
  function getScroll(element) {
    const id = element.getAttribute("href");

    if(id === '#sobre') {
      document.querySelector('.sobre').classList.add('active')
    } else {
      document.querySelector('.sobre').classList.remove('active')
    }

    if(id === '#skills') {
      document.querySelector('.skills').classList.add('active')
    } else {
      document.querySelector('.skills').classList.remove('active')
    }

    if(id === '#portfolio') {
      document.querySelector('.portfolio').classList.add('active')
    } else {
      document.querySelector('.portfolio').classList.remove('active')
    }

    if(id === '#contato') {
      document.querySelector('.contato').classList.add('active')
    } else {
      document.querySelector('.contato').classList.remove('active')
    }

    return document.querySelector(id).offsetTop;
  }

  // Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
  /**
   * Smooth scroll animation
   * @param {int} endX: destination x coordinate
   * @param {int) endY: destination y coordinate
   * @param {int} duration: animation duration in ms
   */
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }
})();
