
# JavaScript Slider Module 🎡  

The **JavaScript Slider Module** provides a reusable and fully customizable slider component built using JavaScript. It is perfect for projects requiring smooth animations, responsive design, and intuitive user interactions.  

---

## Key Features  

1. **Smooth Animations**: CSS-powered slide transitions for a polished user experience. <br>  
2. **Dynamic Slide Navigation**: Next/prev buttons and clickable indicators for easy navigation. <br>  
3. **Slide Counters**: Displays the current slide and the total number of slides. <br>  
4. **Responsive Design**: Ensures compatibility with different screen sizes. <br>  
5. **Easy Integration**: Modular code that adapts to your project's structure. <br>  

---

## Installation  

To get started, clone the repository:  

```bash  
git clone https://github.com/blesswrld/js-slider-documentation.git
```  

Or download the `slider.js` file and include it in your project.  

---

## Quick Start  

### Example HTML Structure  

Ensure your slider follows this structure:  

```html  
<div class="offer__slider">  
    <div class="offer__slider-wrapper">  
        <div class="offer__slider-inner">  
            <div class="offer__slide">Slide 1</div>  
            <div class="offer__slide">Slide 2</div>  
            <div class="offer__slide">Slide 3</div>  
        </div>  
    </div>  
    <button class="offer__slider-prev">Prev</button>  
    <button class="offer__slider-next">Next</button>  
    <div class="offer__slider-counter">  
        <span id="current">01</span> / <span id="total">03</span>  
    </div>  
</div>  
```  

<br>  

### JavaScript Initialization  

Initialize the slider by importing the `slider.js` module and passing the required selectors:  

```javascript  
import slider from './modules/slider.js';  

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
```  

<br>  

---

## Usage Example  

Here’s an example of how the slider behaves:  

- **Next/Prev Navigation**: Users can navigate using the provided buttons.  
- **Dynamic Indicators**: Navigation dots are updated automatically.  
- **Smooth Transitions**: Enjoy seamless animations between slides.  

```javascript  
// Moving to the next slide
next.addEventListener('click', () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += deleteNotDigits(width);
    }

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    moveSlide(offset, slideIndex, slidesField, dots, current);
});  
```  

<br>  

---

## Supported Features  

The JavaScript Slider Module supports:  

- **Custom HTML Structures**: Easily adaptable to your existing markup. <br>  
- **CSS Styling**: Use your own styles or extend the default design. <br>  
- **Dynamic Content**: Handles different numbers of slides automatically. <br>  

<br>  

---

## License  

This project is licensed under the **MIT License**—you are free to use, modify, and distribute it.  
