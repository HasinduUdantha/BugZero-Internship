const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling){
        // Add current to next sibling
        current.nextElementSibling.classList.add('');
    }else{
        // add current start
        slides[slides.length - 1].classList.add('current');

    }
    setTimeout(()  => current.classList.remove('current'));

};

// Button events
next.addEventListener('click', e => {
    nextSlide();
});

next.addEventListener('click', e => {
    prevSlide();
});
