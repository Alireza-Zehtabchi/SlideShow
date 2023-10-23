let slidesNumber = 1;
        
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) slidesNumber = 1;
    if (n < 1) slidesNumber = slides.length;

    for (let i=0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slidesNumber - 1].style.display = "block";

}

showSlides();


function changeSlide(n) {
    showSlides(slidesNumber +=n);
}