"use strict";

// go back to top btn
mybutton = document.getElementById("topBtn"); //Get the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome
}

// hambergur btn
// jQuery 版本
$(function () {

    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
    });

});

// JavaScript 版本
document.addEventListener("DOMContentLoaded", function () {

    var btn_hamburger = document.getElementsByClassName("hamburger")[0];
    btn_hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
    });

});

 // modal box
 var modal = document.getElementById("myModal");
 var btn = document.getElementById("myBtn");
 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function () {
     modal.style.display = "block";
 }

 span.onclick = function () {
     modal.style.display = "none";
 }
 
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }


