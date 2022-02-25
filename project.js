"use strict";

// go back to top btn
mybutton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 500; // for safari
  document.documentElement.scrollTop = 500; // for chrome
}

// hamburger btn
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
      x.className += "responsive";
    } else {
      x.className = "menu";
    }
  }

 // modal box
 var modal = document.getElementById("myModal");
 var btn = document.getElementById("myBtn");
 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function () {
   modal.style.display = "block";
 };

 span.onclick = function () {
   modal.style.display = "none";
 };

 window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };


 // fas fa-angle-double-down
 const links = document.querySelectorAll(".productList ul a");

 for (const link of links) {
   link.addEventListener("click", clickHandler);
 }

 function clickHandler(e) {
   e.preventDefault();
   const href = this.getAttribute("href");
   const offsetTop = document.querySelector(href).offsetTop;

   scroll({
     top: offsetTop,
     behavior: "smooth",
   });
 }