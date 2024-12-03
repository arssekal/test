const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// code concernant le button vers le haut
// Sélectionner le bouton "Retour en haut"
let backToTopButton = document.getElementById("backToTopBtn");

// Afficher le bouton lorsque l'utilisateur fait défiler la page de plus de 500 pixels
window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Lorsque le bouton est cliqué, faire défiler la page vers le haut
backToTopButton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
///////////////////////////////////////////
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

document.getElementById("submit").addEventListener("click", function () {
  var firstName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  setCookie("firstName", firstName, 30);
  setCookie("email", email, 30);
  setCookie("password", password, 30);
});

document.getElementById("getCookieBtn").addEventListener("click", function () {
  var storedFirstName = getCookie("firstName");
  var storedLastName = getCookie("lastName");
  var storedEmail = getCookie("email");
  alert(`user name :  ${storedFirstName} ${storedLastName}\nThe stored storedEmail is:  ${storedEmail}
      `);
});
// Vérifiez si l'utilisateur a déjà accepté les cookies
const cookieAlert = document.getElementById("cookie-alert");
const acceptButton = document.getElementById("accept-cookies");
cookieAlert.style.display = "flex";

acceptButton.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieAlert.style.display = "none";
  console.log(true);
});
