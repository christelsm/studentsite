
document.addEventListener('DOMContentLoaded', function () {

    // TOGGLE NAV 
    var menubutton = document.querySelector(".menu-button");
    var i;
    for (i=0; i < menubutton.length; i++) {
        menubutton[i].onclick = function() {
            this.classList.toggle("expanded");
        };
    };

    //STICKY NAV - REMOVE EXPANDED CLASS FOR MOBILE
    var stickynavlinks = document.querySelectorAll(".sticky nav a");
    var j;
    for (j = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function() {
            var stickymenu = document.querySelector(".sticky .menu-button");
            var k;
            for (k=0; k < stickymenu.length; k++) {
                stickymenu[k].classList.remove("expanded");
            }
        };
    }
});

