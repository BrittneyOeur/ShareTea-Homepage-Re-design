var slideIndex = 0;
var slides, dots, timer;
showSlides(slideIndex);

// Invokes the showSlides:
function showSlides(n) {
  var i;
  // Slideshow:
  slides = document.getElementsByClassName("Promo_1");
  // Slideshow dots:
  dots = document.getElementsByClassName("dot");

  // Slideshow:
  for (i = 0; i < slides.length; i++) {
     // slides[i] will not be displayed:
      slides[i].style.display = "none";
  }

  slideIndex++;

  // If slideIndex is MORE than slides.length:
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  // Slideshow dots:
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Displays the slides from the first slide then so on:
  slides[slideIndex - 1].style.display = "block";
  // Displays the dots from the first dot then so on:
  dots[slideIndex - 1].className += " active";

  // Calls the showSlides after 5 seconds:
  timer = setTimeout(showSlides, 5000);
}

// Invokes the plusSlides:
function plusSlides(n) {
  clearTimeout(timer);
  slideIndex += n;

  if (slideIndex> slides.length) {
    slideIndex = 1
  }

  else if (slideIndex < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Displays the slides from the first slide then so on:
  slides[slideIndex - 1].style.display = "block";
  // Displays the dots from the first dot then so on:
  dots[slideIndex - 1].className += " active";

  // Calls the showSlides after 5 seconds:
  timer = setTimeout(showSlides, 5000);
}

// Invokes the currentSlide:
function currentSlide(n) {
  clearTimeout(timer);

  if (n > slides.length) {
    n = 1
  }

  else if (n < 1) {
    n = slides.length
  }
  
  //set the slideIndex with the index of the function
  slideIndex = n;

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Displays the slides from the first slide then so on:
  slides[slideIndex - 1].style.display = "block";
  // Displays the dots from the first dot then so on:
  dots[slideIndex - 1].className += " active";

  // Calls the showSlides after 5 seconds:
  timer = setTimeout(showSlides, 5000);
}
