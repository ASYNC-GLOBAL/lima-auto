let header = document.getElementById('header');
const limautosDiv = document.getElementById('info-limautos-div');
const contactoDiv = document.getElementById('contact-div');
const servicioDiv = document.getElementById('servicio-div');


eventFunction();

function eventFunction() {
    window.addEventListener('scroll', scrollHeader);
}

function scrollHeader() {
    if (scrollY() > 90) {
        header.classList.add("headercolor");
    } else {
        header.classList.remove("headercolor")
    }
}


function nosotrosScroll() {
    setScrollY(limautosDiv.offsetTop);
}

function contactoScroll() {
    setScrollY(contactoDiv.offsetTop);
}

function serviciosScroll() {
    setScrollY(servicioDiv.offsetTop);
}



function scrollY() {
    return document.documentElement.scrollTop;
}

function setScrollY(distancia) {
    document.documentElement.scrollTop = distancia - 80;
}





/* SWIPER */
var mySwiper = new Swiper('#mask-swiper-container', {
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    loopedSlides: 3,


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.mask-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '#mask-button-next',
        prevEl: '#mask-button-prev',
    },
})