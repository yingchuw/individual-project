"use strict";

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


