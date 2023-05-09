//fonction navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// fonction galerie
function showSlides(n) {// Fonction qui affiche la diapositive correspondant au numéro donné
  let i;
  let slides = document.getElementsByClassName("mySlides");// Récupère tous les éléments avec la classe "mySlides"
  let dots = document.getElementsByClassName("dot");// Récupère tous les éléments avec la classe "dot"
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let slideIndex = 1; // Initialise le numéro de la diapositive
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);// Affiche la diapositive en cours
}

function currentSlide(n) {// Fonction pour afficher une diapositive spécifique
  showSlides(slideIndex = n);
}


function showSlides(n) {// Fonction qui affiche la diapositive correspondant au numéro donné
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}





