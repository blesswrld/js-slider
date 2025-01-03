import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', function() {
    slider({
        container: '.offer__slider', 
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});
