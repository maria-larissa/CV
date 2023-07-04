const icnOpenMenu = document.getElementById("icn-menu");
const icnCloseMenu = document.getElementById("icn-close");
const menuNav = document.querySelector(".menu");

icnOpenMenu.onclick = function(){
    console.log("clicou");
    menuNav.style.display = "flex";
    icnCloseMenu.style.display = "block";
    icnOpenMenu.style.display = "none";
};

icnCloseMenu.onclick = function(){
    menuNav.style.display = "none";
    icnOpenMenu.style.display = "block";
    icnCloseMenu.style.display = "none";
};