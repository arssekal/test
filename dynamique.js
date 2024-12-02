const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// code concernant le button vers le haut
// Sélectionner le bouton "Retour en haut"
let backToTopButton = document.getElementById("backToTopBtn");

// Afficher le bouton lorsque l'utilisateur fait défiler la page de plus de 500 pixels
window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopButton.style.display = "block";  // Afficher le bouton
    } else {
        backToTopButton.style.display = "none";  // Cacher le bouton
    }
};

// Lorsque le bouton est cliqué, faire défiler la page vers le haut
backToTopButton.onclick = function() {
    document.body.scrollTop = 0;  // Pour les navigateurs Webkit (Safari)
    document.documentElement.scrollTop = 0;  // Pour les autres navigateurs
};