"use strict";

// go back to top btn

// mybutton = document.getElementById("topBtn"); //Get the button
// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// function topFunction() {
//     document.body.scrollTop = 0; // for safari
//     document.documentElement.scrollTop = 0; // for chrome
// }

// hamberger btn
let showmenu = document.getElementById('NavBtn');
let nav_close = document.getElementById('NavClose');
let menu = document.getElementById('NavBody');
showmenu.addEventListener('click', function () {
    showmenu.classList.toggle('js-none');
    nav_close.classList.toggle('js-none');
    menu.classList.add('js-active');
})
nav_close.addEventListener('click', function(){
    nav_btn.classList.toggle('js-none');
    nav_close.classList.toggle('js-none');
    nav_body.classList.remove('js-active');
})

/*
let nav_btn = document.getElementById('NavBtn');
let nav_close = document.getElementById('NavClose');
let nav_body = document.getElementById('NavBody');
nav_btn.addEventListener('click', function () {
    nav_btn.classList.toggle('js-none');
    nav_close.classList.toggle('js-none');
    nav_body.classList.add('js-active');
})
nav_close.addEventListener('click', function(){
    nav_btn.classList.toggle('js-none');
    nav_close.classList.toggle('js-none');
    nav_body.classList.remove('js-active');
})
*/