
// animation for hamburger menu

const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElements = document.querySelectorAll('.has-fade')
const menuLinks = document.querySelectorAll('.menu-link')

btnHamburger.addEventListener('click', function () {

    if (header.classList.contains('open')) {
        // This closes the hamburger menu 
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })

    } else {
        // Opens the hamburger menu 
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})


menuLinks.forEach((link)=>{
    link.addEventListener('click', function () {
        if (header.classList.contains('open')) {
            // This closes the hamburger menu 
            body.classList.remove('noscroll')
            header.classList.remove('open')
            fadeElements.forEach(function (element) {
                element.classList.remove('fade-in')
                element.classList.add('fade-out')
            })
        }
    })

})


// animation for hamburger menu



// Animation slider

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});