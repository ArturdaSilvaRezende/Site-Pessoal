!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,o,a,i,u,c,l,d;n(0),n(1),n(2),n.p,n.p,n.p,n.p;i=document.querySelector(".msg-dia"),u=document.querySelector(".show-data-hora"),c=new Array("domingo ","segunda-feira ","terça-feira ","quarta-feira ","quinta-feira ","sexta-feira ","sábado "),l=new Array("janeiro ","fevereiro ","março ","abril ","maio ","junho ","agosto ","outubro ","novembro ","dezembro "),setInterval((r=new Date,o=r.getHours(),a=("0"+r.getMinutes()).slice(-2),i.style.fontFamily="arial",u.style.fontFamily="arial",void(o>=5&&o<12?(i.innerHTML="Bom Dia, "+c[r.getDay()]+r.getDate()+" de "+l[r.getMonth()]+"de "+r.getFullYear(),u.innerHTML="Agora são ".concat(o,":").concat(a)):o>=12&&o<18?(i.innerHTML="Boa Tarde, "+c[r.getDay()]+r.getDate()+" de "+l[r.getMonth()]+"de "+r.getFullYear(),u.innerHTML=" - ".concat(o,":").concat(a)):(i.innerHTML="Boa Noite, "+c[r.getDay()]+r.getDate()+" de "+l[r.getMonth()]+"de "+r.getFullYear(),u.innerHTML=" - ".concat(o,":").concat(a))))),d=document.querySelector(".nav-main"),document.querySelector(".btn-show-menu").addEventListener("click",(function(){d.style.right="0px",d.classList.add("animation-menu-show")})),document.querySelector(".btn-close-menu").addEventListener("click",(function(){d.style.right="-54%",d.classList.add("animation-menu-hide")}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmF2aWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL29wZW4tbWVudS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jbG9zZS5wbmciXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJkYXRhIiwiaG91ciIsIm1pbnV0ZXMiLCJtc2dEaWEiLCJtZXNzZW5nZXIiLCJkYXlOYW1lIiwibW9uTmFtZSIsIm1lbnVIZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcnJheSIsInNldEludGVydmFsIiwiRGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsInNsaWNlIiwic3R5bGUiLCJmb250RmFtaWx5IiwiaW5uZXJIVE1MIiwiZ2V0RGF5IiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9C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QUFjLE1BQVFyQixFQUFLc0IsY0FDbklsQixFQUFVYyxVQUFWLGFBQTRCakIsRUFBNUIsWUFBb0NDLEtBRXBDQyxFQUFPZSxVQUFZLGNBQWdCYixFQUFRTCxFQUFLbUIsVUFBWW5CLEVBQUtvQixVQUE5QyxPQUF3RWQsRUFBUU4sRUFBS3FCLFlBQWMsTUFBUXJCLEVBQUtzQixjQUNuSWxCLEVBQVVjLFVBQVYsYUFBNEJqQixFQUE1QixZQUFvQ0MsT0FVdENLLEVBQWFDLFNBQVNDLGNBQWMsYUFFdEJELFNBQVNDLGNBQWMsa0JBQy9CYyxpQkFBaUIsU0FLN0IsV0FDSWhCLEVBQVdTLE1BQU1RLE1BQVEsTUFDekJqQixFQUFXa0IsVUFBVUMsSUFBSSwwQkFMUmxCLFNBQVNDLGNBQWMsbUJBQy9CYyxpQkFBaUIsU0FPOUIsV0FDSWhCLEVBQVdTLE1BQU1RLE1BQVEsT0FDekJqQixFQUFXa0IsVUFBVUMsSUFBSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLyoqXHJcbiAqIFByb2pldG8gU2l0ZSBQZXNzb2FsIFZlcnPDo28gMS4xXHJcbiAqIEBhdXRob3IgQXJ0dXIgZGEgU2lsdmEgUmV6ZW5kZVxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IHJvdGFzIH0gZnJvbSAnLi9yb3RhcydcclxuXHJcbi8vQSBlc3RydXR1cmEgYWJhaXhvIGZheiBvIGNvbnRvcmxlIGRhIGRhdGEgZSBob3JhXHJcbigoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbXNnRGlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZy1kaWEnKTsvL0VzdGEgdmFyacOhdmVsIG1vc3RyYSBvIGJvbSBkaWEgLyB0YXJkZSAvIG5vaXRlXHJcbiAgICBjb25zdCBtZXNzZW5nZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1kYXRhLWhvcmEnKS8vRXN0YSB2YXJpw6F2ZWwgcmVjZWJlIGEgaG9yYSBlIGV4aWJlXHJcbiAgICBjb25zdCBkYXlOYW1lID0gbmV3IEFycmF5KFwiZG9taW5nbyBcIiwgXCJzZWd1bmRhLWZlaXJhIFwiLCBcInRlcsOnYS1mZWlyYSBcIiwgXCJxdWFydGEtZmVpcmEgXCIsIFwicXVpbnRhLWZlaXJhIFwiLCBcInNleHRhLWZlaXJhIFwiLCBcInPDoWJhZG8gXCIpXHJcbiAgICBjb25zdCBtb25OYW1lID0gbmV3IEFycmF5KFwiamFuZWlybyBcIiwgXCJmZXZlcmVpcm8gXCIsIFwibWFyw6dvIFwiLCBcImFicmlsIFwiLCBcIm1haW8gXCIsIFwianVuaG8gXCIsIFwiYWdvc3RvIFwiLCBcIm91dHVicm8gXCIsIFwibm92ZW1icm8gXCIsIFwiZGV6ZW1icm8gXCIpXHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoc2hvd0RhdGFIb3JhKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dEYXRhSG9yYSgpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGNvbnN0IGhvdXIgPSBkYXRhLmdldEhvdXJzKClcclxuICAgICAgICBjb25zdCBtaW51dGVzID0gKFwiMFwiICsgZGF0YS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxyXG5cclxuICAgICAgICBtc2dEaWEuc3R5bGUuZm9udEZhbWlseSA9IFwiYXJpYWxcIjtcclxuICAgICAgICBtZXNzZW5nZXIuc3R5bGUuZm9udEZhbWlseSA9IFwiYXJpYWxcIjtcclxuXHJcbiAgICAgICAgaWYgKGhvdXIgPj0gNSAmJiBob3VyIDwgMTIpIHtcclxuICAgICAgICAgICAgbXNnRGlhLmlubmVySFRNTCA9IFwiQm9tIERpYSwgXCIgKyBkYXlOYW1lW2RhdGEuZ2V0RGF5KCldICsgZGF0YS5nZXREYXRlKCkgKyBcIiBcIiArIFwiZGUgXCIgKyBtb25OYW1lW2RhdGEuZ2V0TW9udGgoKV0gKyBcImRlIFwiICsgZGF0YS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBtZXNzZW5nZXIuaW5uZXJIVE1MID0gYEFnb3JhIHPDo28gJHtob3VyfToke21pbnV0ZXN9YDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChob3VyID49IDEyICYmIGhvdXIgPCAxOCkge1xyXG4gICAgICAgICAgICBtc2dEaWEuaW5uZXJIVE1MID0gXCJCb2EgVGFyZGUsIFwiICsgZGF5TmFtZVtkYXRhLmdldERheSgpXSArIGRhdGEuZ2V0RGF0ZSgpICsgXCIgXCIgKyBcImRlIFwiICsgbW9uTmFtZVtkYXRhLmdldE1vbnRoKCldICsgXCJkZSBcIiArIGRhdGEuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgbWVzc2VuZ2VyLmlubmVySFRNTCA9IGAgLSAke2hvdXJ9OiR7bWludXRlc31gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1zZ0RpYS5pbm5lckhUTUwgPSBcIkJvYSBOb2l0ZSwgXCIgKyBkYXlOYW1lW2RhdGEuZ2V0RGF5KCldICsgZGF0YS5nZXREYXRlKCkgKyBcIiBcIiArIFwiZGUgXCIgKyBtb25OYW1lW2RhdGEuZ2V0TW9udGgoKV0gKyBcImRlIFwiICsgZGF0YS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBtZXNzZW5nZXIuaW5uZXJIVE1MID0gYCAtICR7aG91cn06JHttaW51dGVzfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbi8vQSBlc3RydXR1cmEgYWJhaXhvIGZheiBvIGNvbnRyb2xlIGRvIHNob3cgZSBoaWRlIGRvIG1lbnUgZGUgbmF2ZWdhw6fDo29cclxuXHJcbigoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbWFpbicpXHJcblxyXG4gICAgY29uc3QgYnRuU2hvd01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNob3ctbWVudScpXHJcbiAgICBidG5TaG93TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNZW51KVxyXG5cclxuICAgIGNvbnN0IGJ0bkNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UtbWVudScpXHJcbiAgICBidG5DbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTWVudSlcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TWVudSgpe1xyXG4gICAgICAgIG1lbnVIZWFkZXIuc3R5bGUucmlnaHQgPSAnMHB4J1xyXG4gICAgICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLW1lbnUtc2hvdycpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZU1lbnUoKSB7XHJcbiAgICAgICAgbWVudUhlYWRlci5zdHlsZS5yaWdodCA9ICctNTQlJ1xyXG4gICAgICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLW1lbnUtaGlkZScpXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibG9nby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwib3Blbi1tZW51LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjbG9zZS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9