/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/artur-rezende.jpg":
/*!**************************************!*\
  !*** ./src/assets/artur-rezende.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "artur-rezende.jpg");

/***/ }),

/***/ "./src/assets/bootstrap.png":
/*!**********************************!*\
  !*** ./src/assets/bootstrap.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bootstrap.png");

/***/ }),

/***/ "./src/assets/close.png":
/*!******************************!*\
  !*** ./src/assets/close.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "close.png");

/***/ }),

/***/ "./src/assets/css3.png":
/*!*****************************!*\
  !*** ./src/assets/css3.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "css3.png");

/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "favicon.png");

/***/ }),

/***/ "./src/assets/git.png":
/*!****************************!*\
  !*** ./src/assets/git.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "git.png");

/***/ }),

/***/ "./src/assets/html5.png":
/*!******************************!*\
  !*** ./src/assets/html5.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "html5.png");

/***/ }),

/***/ "./src/assets/java.png":
/*!*****************************!*\
  !*** ./src/assets/java.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "java.png");

/***/ }),

/***/ "./src/assets/javascript.png":
/*!***********************************!*\
  !*** ./src/assets/javascript.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "javascript.png");

/***/ }),

/***/ "./src/assets/jquery.png":
/*!*******************************!*\
  !*** ./src/assets/jquery.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "jquery.png");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "logo.png");

/***/ }),

/***/ "./src/assets/mysql.png":
/*!******************************!*\
  !*** ./src/assets/mysql.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "mysql.png");

/***/ }),

/***/ "./src/assets/open-menu.png":
/*!**********************************!*\
  !*** ./src/assets/open-menu.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "open-menu.png");

/***/ }),

/***/ "./src/assets/php.png":
/*!****************************!*\
  !*** ./src/assets/php.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "php.png");

/***/ }),

/***/ "./src/assets/sass.png":
/*!*****************************!*\
  !*** ./src/assets/sass.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "sass.png");

/***/ }),

/***/ "./src/assets/webpack.png":
/*!********************************!*\
  !*** ./src/assets/webpack.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "webpack.png");

/***/ }),

/***/ "./src/css/header.scss":
/*!*****************************!*\
  !*** ./src/css/header.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/main-content.scss":
/*!***********************************!*\
  !*** ./src/css/main-content.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/mixin-variaveis.scss":
/*!**************************************!*\
  !*** ./src/css/mixin-variaveis.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/reset.scss":
/*!****************************!*\
  !*** ./src/css/reset.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/full_data_time.js":
/*!**********************************!*\
  !*** ./src/js/full_data_time.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //A estrutura abaixo faz o contorle da data e hora

(function () {
  var control_time = setInterval(showDataHora, 500);

  function showDataHora() {
    var msgDia = document.querySelector('.msg-dia'); //Esta variável mostra o bom dia / tarde / noite

    var messenger = document.querySelector('.show-data-hora'); //Esta variável recebe a hora e exibe

    var dayName = new Array("domingo ", "segunda-feira ", "terça-feira ", "quarta-feira ", "quinta-feira ", "sexta-feira ", "sábado ");
    var monName = new Array("janeiro ", "fevereiro ", "março ", "abril ", "maio ", "junho ", "agosto ", "outubro ", "novembro ", "dezembro ");
    var data = new Date();
    var hour = ("0" + data.getHours()).slice(-2);
    var minutes = ("0" + data.getMinutes()).slice(-2);
    var secound = ("0" + data.getSeconds()).slice(-2);
    msgDia.style.fontFamily = "arial";
    messenger.style.fontFamily = "arial";

    if (hour >= 5 && hour < 12) {
      msgDia.innerHTML = "Bom dia, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
      messenger.innerHTML = " - ".concat(hour, ":").concat(minutes, ":").concat(secound);
    } else if (hour >= 12 && hour < 18) {
      msgDia.innerHTML = "Boa tarde, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
      messenger.innerHTML = " - ".concat(hour, ":").concat(minutes, ":").concat(secound);
    } else {
      msgDia.innerHTML = "Boa noite, " + dayName[data.getDay()] + data.getDate() + " " + "de " + monName[data.getMonth()] + "de " + data.getFullYear();
      messenger.innerHTML = " - ".concat(hour, ":").concat(minutes, ":").concat(secound);
    }
  }
})();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rotas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotas */ "./src/js/rotas.js");
/* harmony import */ var _menu_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_main */ "./src/js/menu_main.js");
/* harmony import */ var _menu_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_main__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _full_data_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full_data_time */ "./src/js/full_data_time.js");
/* harmony import */ var _full_data_time__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_full_data_time__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tipewrite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipewrite */ "./src/js/tipewrite.js");
/* harmony import */ var _tipewrite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tipewrite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _java_skill_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./java_skill_control */ "./src/js/java_skill_control.js");
/* harmony import */ var _java_skill_control__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_java_skill_control__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Projeto Site Pessoal Versão 1.1
 * @author Artur da Silva Rezende
 */








/***/ }),

/***/ "./src/js/java_skill_control.js":
/*!**************************************!*\
  !*** ./src/js/java_skill_control.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var openjava = document.querySelector('.open-java');
  var closejava = document.querySelector('.close-java');
  var javaMenssage = document.querySelector('.java-menssage');
  openjava.addEventListener('click', showMessage);
  closejava.addEventListener('click', hideMenu);

  function showMessage() {
    javaMenssage.style.display = 'block';
    javaMenssage.classList.add('show-java-menssage');
    javaMenssage.classList.remove('hide-java-menssage');
  }

  function hideMenu() {
    javaMenssage.classList.add('hide-java-menssage');
    setTimeout(function () {
      javaMenssage.style.display = 'none';
    }, 1000);
  }
})();

/***/ }),

/***/ "./src/js/menu_main.js":
/*!*****************************!*\
  !*** ./src/js/menu_main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //A estrutura abaixo faz o controle do show e hide do menu de navegação

(function () {
  var menuHeader = document.querySelector('.nav-main');
  var btnShowMenu = document.querySelector('.btn-show-menu');
  btnShowMenu.addEventListener('click', showMenu);
  var btnCloseMenu = document.querySelector('.btn-close-menu');
  btnCloseMenu.addEventListener('click', hideMenu);

  function showMenu() {
    menuHeader.style.right = '0px';
    menuHeader.classList.add('animation-menu-show');
    menuHeader.classList.remove('animation-menu-hide');
  }

  function hideMenu() {
    menuHeader.style.right = '-54%';
    menuHeader.classList.add('animation-menu-hide');
  }
})();

/***/ }),

/***/ "./src/js/rotas.js":
/*!*************************!*\
  !*** ./src/js/rotas.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/reset.scss */ "./src/css/reset.scss");
/* harmony import */ var _css_reset_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_reset_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_mixin_variaveis_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/mixin-variaveis.scss */ "./src/css/mixin-variaveis.scss");
/* harmony import */ var _css_mixin_variaveis_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_mixin_variaveis_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/header.scss */ "./src/css/header.scss");
/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_main_content_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/main-content.scss */ "./src/css/main-content.scss");
/* harmony import */ var _css_main_content_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_main_content_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/favicon.png */ "./src/assets/favicon.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_open_menu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/open-menu.png */ "./src/assets/open-menu.png");
/* harmony import */ var _assets_close_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/close.png */ "./src/assets/close.png");
/* harmony import */ var _assets_artur_rezende_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/artur-rezende.jpg */ "./src/assets/artur-rezende.jpg");
/* harmony import */ var _assets_html5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/html5.png */ "./src/assets/html5.png");
/* harmony import */ var _assets_css3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/css3.png */ "./src/assets/css3.png");
/* harmony import */ var _assets_javascript_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/javascript.png */ "./src/assets/javascript.png");
/* harmony import */ var _assets_bootstrap_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/bootstrap.png */ "./src/assets/bootstrap.png");
/* harmony import */ var _assets_jquery_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/jquery.png */ "./src/assets/jquery.png");
/* harmony import */ var _assets_sass_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/sass.png */ "./src/assets/sass.png");
/* harmony import */ var _assets_webpack_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/webpack.png */ "./src/assets/webpack.png");
/* harmony import */ var _assets_php_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/php.png */ "./src/assets/php.png");
/* harmony import */ var _assets_mysql_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/mysql.png */ "./src/assets/mysql.png");
/* harmony import */ var _assets_git_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/git.png */ "./src/assets/git.png");
/* harmony import */ var _assets_java_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/java.png */ "./src/assets/java.png");
//custom style




 //header image

 //favicon

 //logo

 //open menu

 //close menu
//About imgage

 //Artur img about
//Skills front end 













/***/ }),

/***/ "./src/js/tipewrite.js":
/*!*****************************!*\
  !*** ./src/js/tipewrite.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //A estrutura abaixo faz o controle da animação (typewrite)

(function () {
  function typeWriter(element) {
    var textAarray = element.innerHTML.split('');
    element.innerHTML = '';
    textAarray.forEach(function (letra, i) {
      setTimeout(function () {
        element.innerHTML += letra;
      }, 80 * i);
    });
  } //A estrutura abaixo faz o controle do typeWrite do título de apresentação


  var titleApresentation = document.querySelector('.full-name');
  setInterval(function () {
    typeWriter(titleApresentation);
  }, 7000);
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnR1ci1yZXplbmRlLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jvb3RzdHJhcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jbG9zZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jc3MzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Zhdmljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZ2l0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2h0bWw1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcXVlcnkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9teXNxbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9vcGVuLW1lbnUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcGhwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Nhc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd2VicGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9oZWFkZXIuc2Nzcz85N2RlIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi1jb250ZW50LnNjc3M/YzFjNyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21peGluLXZhcmlhdmVpcy5zY3NzPzY1NjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9yZXNldC5zY3NzP2IwZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzYyYWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Z1bGxfZGF0YV90aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvamF2YV9za2lsbF9jb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51X21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JvdGFzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90aXBld3JpdGUuanMiXSwibmFtZXMiOlsiY29udHJvbF90aW1lIiwic2V0SW50ZXJ2YWwiLCJzaG93RGF0YUhvcmEiLCJtc2dEaWEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzZW5nZXIiLCJkYXlOYW1lIiwiQXJyYXkiLCJtb25OYW1lIiwiZGF0YSIsIkRhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJzbGljZSIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb3VuZCIsImdldFNlY29uZHMiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJpbm5lckhUTUwiLCJnZXREYXkiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIm9wZW5qYXZhIiwiY2xvc2VqYXZhIiwiamF2YU1lbnNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dNZXNzYWdlIiwiaGlkZU1lbnUiLCJkaXNwbGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2V0VGltZW91dCIsIm1lbnVIZWFkZXIiLCJidG5TaG93TWVudSIsInNob3dNZW51IiwiYnRuQ2xvc2VNZW51IiwicmlnaHQiLCJ0eXBlV3JpdGVyIiwiZWxlbWVudCIsInRleHRBYXJyYXkiLCJzcGxpdCIsImZvckVhY2giLCJsZXRyYSIsImkiLCJ0aXRsZUFwcmVzZW50YXRpb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztR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Q0s7O0NBQ0o7QUFFOUI7O0NBQ3NDO0FBRXRDOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0NDeEJBOztBQUNBLENBQUMsWUFBTTtBQUVILFdBQVNRLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQTZCO0FBQ3pCLFFBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDdEIsU0FBUixDQUFrQndCLEtBQWxCLENBQXdCLEVBQXhCLENBQW5CO0FBQ0FGLFdBQU8sQ0FBQ3RCLFNBQVIsR0FBb0IsRUFBcEI7QUFFQXVCLGNBQVUsQ0FBQ0UsT0FBWCxDQUFtQixVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUU3QlosZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JPLGVBQU8sQ0FBQ3RCLFNBQVIsSUFBcUIwQixLQUFyQjtBQUNILE9BRlMsRUFFUCxLQUFLQyxDQUZFLENBQVY7QUFJSCxLQU5EO0FBT0gsR0FiRSxDQWVIOzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRzdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUEzQjtBQUNBSixhQUFXLENBQUMsWUFBTTtBQUNkeUMsY0FBVSxDQUFDTyxrQkFBRCxDQUFWO0FBQ0gsR0FGVSxFQUVSLElBRlEsQ0FBWDtBQUlILENBckJELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFydHVyLXJlemVuZGUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJvb3RzdHJhcC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2xvc2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNzczMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdpdC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaHRtbDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImphdmEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImphdmFzY3JpcHQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImpxdWVyeS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibG9nby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibXlzcWwucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm9wZW4tbWVudS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicGhwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzYXNzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ3ZWJwYWNrLnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vQSBlc3RydXR1cmEgYWJhaXhvIGZheiBvIGNvbnRvcmxlIGRhIGRhdGEgZSBob3JhXHJcbigoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udHJvbF90aW1lID0gc2V0SW50ZXJ2YWwoc2hvd0RhdGFIb3JhLCA1MDApO1xyXG4gXHJcbiAgICAgZnVuY3Rpb24gc2hvd0RhdGFIb3JhKCkge1xyXG4gICAgICAgICBjb25zdCBtc2dEaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWRpYScpOy8vRXN0YSB2YXJpw6F2ZWwgbW9zdHJhIG8gYm9tIGRpYSAvIHRhcmRlIC8gbm9pdGVcclxuICAgICAgICAgY29uc3QgbWVzc2VuZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctZGF0YS1ob3JhJykvL0VzdGEgdmFyacOhdmVsIHJlY2ViZSBhIGhvcmEgZSBleGliZVxyXG4gICAgICAgICBjb25zdCBkYXlOYW1lID0gbmV3IEFycmF5KFwiZG9taW5nbyBcIiwgXCJzZWd1bmRhLWZlaXJhIFwiLCBcInRlcsOnYS1mZWlyYSBcIiwgXCJxdWFydGEtZmVpcmEgXCIsIFwicXVpbnRhLWZlaXJhIFwiLCBcInNleHRhLWZlaXJhIFwiLCBcInPDoWJhZG8gXCIpXHJcbiAgICAgICAgIGNvbnN0IG1vbk5hbWUgPSBuZXcgQXJyYXkoXCJqYW5laXJvIFwiLCBcImZldmVyZWlybyBcIiwgXCJtYXLDp28gXCIsIFwiYWJyaWwgXCIsIFwibWFpbyBcIiwgXCJqdW5obyBcIiwgXCJhZ29zdG8gXCIsIFwib3V0dWJybyBcIiwgXCJub3ZlbWJybyBcIiwgXCJkZXplbWJybyBcIilcclxuICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBEYXRlKClcclxuICAgICAgICAgY29uc3QgaG91ciA9IChcIjBcIiArIGRhdGEuZ2V0SG91cnMoKSkuc2xpY2UoLTIpXHJcbiAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSAoXCIwXCIgKyBkYXRhLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpXHJcbiAgICAgICAgIGNvbnN0IHNlY291bmQgPSAoXCIwXCIgKyBkYXRhLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpXHJcbiBcclxuICAgICAgICAgbXNnRGlhLnN0eWxlLmZvbnRGYW1pbHkgPSBcImFyaWFsXCI7XHJcbiAgICAgICAgIG1lc3Nlbmdlci5zdHlsZS5mb250RmFtaWx5ID0gXCJhcmlhbFwiO1xyXG4gXHJcbiAgICAgICAgIGlmIChob3VyID49IDUgJiYgaG91ciA8IDEyKSB7XHJcbiAgICAgICAgICAgICBtc2dEaWEuaW5uZXJIVE1MID0gXCJCb20gZGlhLCBcIiArIGRheU5hbWVbZGF0YS5nZXREYXkoKV0gKyBkYXRhLmdldERhdGUoKSArIFwiIFwiICsgXCJkZSBcIiArIG1vbk5hbWVbZGF0YS5nZXRNb250aCgpXSArIFwiZGUgXCIgKyBkYXRhLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICBtZXNzZW5nZXIuaW5uZXJIVE1MID0gYCAtICR7aG91cn06JHttaW51dGVzfToke3NlY291bmR9YDtcclxuIFxyXG4gICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPj0gMTIgJiYgaG91ciA8IDE4KSB7XHJcbiAgICAgICAgICAgICBtc2dEaWEuaW5uZXJIVE1MID0gXCJCb2EgdGFyZGUsIFwiICsgZGF5TmFtZVtkYXRhLmdldERheSgpXSArIGRhdGEuZ2V0RGF0ZSgpICsgXCIgXCIgKyBcImRlIFwiICsgbW9uTmFtZVtkYXRhLmdldE1vbnRoKCldICsgXCJkZSBcIiArIGRhdGEuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgIG1lc3Nlbmdlci5pbm5lckhUTUwgPSBgIC0gJHtob3VyfToke21pbnV0ZXN9OiR7c2Vjb3VuZH1gO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgbXNnRGlhLmlubmVySFRNTCA9IFwiQm9hIG5vaXRlLCBcIiArIGRheU5hbWVbZGF0YS5nZXREYXkoKV0gKyBkYXRhLmdldERhdGUoKSArIFwiIFwiICsgXCJkZSBcIiArIG1vbk5hbWVbZGF0YS5nZXRNb250aCgpXSArIFwiZGUgXCIgKyBkYXRhLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICBtZXNzZW5nZXIuaW5uZXJIVE1MID0gYCAtICR7aG91cn06JHttaW51dGVzfToke3NlY291bmR9YDtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgfVxyXG4gXHJcbiB9KSgpOyIsIi8qKlxyXG4gKiBQcm9qZXRvIFNpdGUgUGVzc29hbCBWZXJzw6NvIDEuMVxyXG4gKiBAYXV0aG9yIEFydHVyIGRhIFNpbHZhIFJlemVuZGVcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgeyByb3RhcyB9IGZyb20gJy4vcm90YXMnXHJcbmltcG9ydCB7IG1lbnVOYXZlZ2FjYW8gfSBmcm9tICcuL21lbnVfbWFpbidcclxuaW1wb3J0IHsgZnVsbERhdGFUaW1lIH0gZnJvbSAnLi9mdWxsX2RhdGFfdGltZSdcclxuaW1wb3J0IHsgdGlwZVdyaXRlIH0gZnJvbSAnLi90aXBld3JpdGUnXHJcbmltcG9ydCB7IGphdmFNZXNzYWdlIH0gZnJvbSAnLi9qYXZhX3NraWxsX2NvbnRyb2wnXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuKCgpPT57XHJcblxyXG4gICAgY29uc3Qgb3BlbmphdmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1qYXZhJylcclxuICAgIGNvbnN0IGNsb3NlamF2YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1qYXZhJylcclxuICAgIGNvbnN0IGphdmFNZW5zc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qYXZhLW1lbnNzYWdlJylcclxuXHJcbiAgICBvcGVuamF2YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNZXNzYWdlKVxyXG4gICAgY2xvc2VqYXZhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1lbnUpXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlKCl7XHJcbiAgICAgICAgamF2YU1lbnNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgamF2YU1lbnNzYWdlLmNsYXNzTGlzdC5hZGQoJ3Nob3ctamF2YS1tZW5zc2FnZScpXHJcbiAgICAgICAgamF2YU1lbnNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtamF2YS1tZW5zc2FnZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVNZW51KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGphdmFNZW5zc2FnZS5jbGFzc0xpc3QuYWRkKCdoaWRlLWphdmEtbWVuc3NhZ2UnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGphdmFNZW5zc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy9BIGVzdHJ1dHVyYSBhYmFpeG8gZmF6IG8gY29udHJvbGUgZG8gc2hvdyBlIGhpZGUgZG8gbWVudSBkZSBuYXZlZ2HDp8Ojb1xyXG4oKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1haW4nKVxyXG5cclxuICAgIGNvbnN0IGJ0blNob3dNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zaG93LW1lbnUnKVxyXG4gICAgYnRuU2hvd01lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSlcclxuXHJcbiAgICBjb25zdCBidG5DbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsb3NlLW1lbnUnKVxyXG4gICAgYnRuQ2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1lbnUpXHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd01lbnUoKXtcclxuICAgICAgICBtZW51SGVhZGVyLnN0eWxlLnJpZ2h0ID0gJzBweCdcclxuICAgICAgICBtZW51SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbi1tZW51LXNob3cnKVxyXG4gICAgICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uLW1lbnUtaGlkZScpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZU1lbnUoKSB7XHJcbiAgICAgICAgbWVudUhlYWRlci5zdHlsZS5yaWdodCA9ICctNTQlJ1xyXG4gICAgICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLW1lbnUtaGlkZScpXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuIiwiLy9jdXN0b20gc3R5bGVcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3Jlc2V0LnNjc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9taXhpbi12YXJpYXZlaXMuc2Nzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2hlYWRlci5zY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi1jb250ZW50LnNjc3MnO1xyXG5cclxuLy9oZWFkZXIgaW1hZ2VcclxuaW1wb3J0ICcuLi9hc3NldHMvZmF2aWNvbi5wbmcnOyAvL2Zhdmljb25cclxuaW1wb3J0ICcuLi9hc3NldHMvbG9nby5wbmcnOyAvL2xvZ29cclxuaW1wb3J0ICcuLi9hc3NldHMvb3Blbi1tZW51LnBuZyc7IC8vb3BlbiBtZW51XHJcbmltcG9ydCAnLi4vYXNzZXRzL2Nsb3NlLnBuZyc7IC8vY2xvc2UgbWVudVxyXG5cclxuLy9BYm91dCBpbWdhZ2VcclxuaW1wb3J0ICcuLi9hc3NldHMvYXJ0dXItcmV6ZW5kZS5qcGcnOyAvL0FydHVyIGltZyBhYm91dFxyXG5cclxuLy9Ta2lsbHMgZnJvbnQgZW5kIFxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9odG1sNS5wbmcnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3MzLnBuZyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL2phdmFzY3JpcHQucG5nJztcclxuaW1wb3J0ICcuLi9hc3NldHMvYm9vdHN0cmFwLnBuZyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL2pxdWVyeS5wbmcnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zYXNzLnBuZyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3dlYnBhY2sucG5nJztcclxuaW1wb3J0ICcuLi9hc3NldHMvcGhwLnBuZyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL215c3FsLnBuZyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL2dpdC5wbmcnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9qYXZhLnBuZyc7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vQSBlc3RydXR1cmEgYWJhaXhvIGZheiBvIGNvbnRyb2xlIGRhIGFuaW1hw6fDo28gKHR5cGV3cml0ZSlcclxuKCgpID0+IHtcclxuXHJcbiAgICBmdW5jdGlvbiB0eXBlV3JpdGVyKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCB0ZXh0QWFycmF5ID0gZWxlbWVudC5pbm5lckhUTUwuc3BsaXQoJycpO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIHRleHRBYXJyYXkuZm9yRWFjaCgobGV0cmEsIGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gbGV0cmE7XHJcbiAgICAgICAgICAgIH0sIDgwICogaSlcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BIGVzdHJ1dHVyYSBhYmFpeG8gZmF6IG8gY29udHJvbGUgZG8gdHlwZVdyaXRlIGRvIHTDrXR1bG8gZGUgYXByZXNlbnRhw6fDo29cclxuICAgIGNvbnN0IHRpdGxlQXByZXNlbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLW5hbWUnKVxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHR5cGVXcml0ZXIodGl0bGVBcHJlc2VudGF0aW9uKVxyXG4gICAgfSwgNzAwMCk7XHJcblxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=