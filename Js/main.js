$(document).ready(function() {

    $('.slider__list').slick ({
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });


}); 


const nav = document.querySelector('.nav');
const topNav = nav.offsetTop;
const header = document.querySelector('.header');

function stickNav() {
    if(window.scrollY >= topNav) {
        header.style.paddingTop = nav.offsetHeight  +'px';
        nav.classList.add('sticky')
    } else {
        header.style.paddingTop = 0;
        nav.classList.remove('sticky')
        
    }
}

window.addEventListener('scroll', stickNav)