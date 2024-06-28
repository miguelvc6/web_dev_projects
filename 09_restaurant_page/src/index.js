import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import { loadMap } from "./map.js";
import { loadReservation } from "./reservation.js";
import './style.css';

loadHome();

function clearPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
};

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", function () {
    clearPage(); 
    loadHome();
})

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", function () {
    clearPage(); 
    loadMenu();
})

const aboutButton = document.querySelector("#about-button");
aboutButton.addEventListener("click", function () {
    clearPage();
    loadAbout();
});

const mapButton = document.querySelector("#map-button");
mapButton.addEventListener("click", function () {
    clearPage();
    loadMap();
});

const reservationButton = document.querySelector("#reservation-button");
reservationButton.addEventListener("click", function () {
    clearPage();
    loadReservation();
});
