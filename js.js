"use strict";

// go back to top btn

mybutton = document.getElementById("topBtn"); //Get the button
window.onscroll = function () {
    scrollFunction()
};

// When the user scrolls down 100px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome
}

// hamberger btn
