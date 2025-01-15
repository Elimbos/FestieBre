// **************************************************************************
// ************************** MENÚ HAMBURGUESA ******************************
// **************************************************************************

//Declaració de constants i assignació de la classe
const navBurguer = document.querySelector(".nav-burguer");
const navMenu = document.querySelector(".nav-menu");
const navMenuItems = document.querySelectorAll(".nav-menu_item");
const menuOverlay = document.querySelector(".menu-overlay");

//Control per obrir i tancar el menú hamburguesa
navBurguer.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  menuOverlay.classList.toggle("menu-overlay_visible"); 

  if (navMenu.classList.contains("nav-menu_visible")) {
    navBurguer.setAttribute("aria-label", "Tancar menú");
  }
  else {
    navBurguer.setAttribute("aria-label", "Obrir menú");
  }
});

// Control per obrir i tancar els submenus sense hover
navMenuItems.forEach(item => {
  item.addEventListener("click", () => {
      const subMenu = item.querySelector(".sub-menu");
      
      if (subMenu) {
          subMenu.classList.toggle("sub-menu_visible");
      }
  });
});

//Control del fons per a esclarir-lo quan està obert el menú hamburguesa
menuOverlay.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
    menuOverlay.classList.remove("menu-overlay_visible");
    navBurguer.setAttribute("aria-label", "Obrir menú");
});

// **************************************************************************
// ************************** SLIDESHOW *************************************
// **************************************************************************

// Variables globals per controlar el slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Control dels botons "següent" i "anterior"
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

// Control dels punts indicadors
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index + 1));
});

// Funció per avançar o retrocedir diapositives
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Funció per anar a una diapositiva específica
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Funció principal per mostrar les diapositives
function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Amagar totes les diapositives
    slides.forEach(slide => slide.style.display = "none");

    // Treure la classe "active" de tots els punts
    dots.forEach(dot => dot.classList.remove("active"));

    // Mostrar la diapositiva actual i activar el punt corresponent
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
