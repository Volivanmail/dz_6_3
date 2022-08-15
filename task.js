const sliderItems = document.querySelectorAll('.slider__item');
const btnPrev = document.querySelector('.slider__arrow_prev');
const btnNext = document.querySelector('.slider__arrow_next');
const sliderDot = document.querySelectorAll('.slider__dot');

let sliderIndexActiv = 0;


function sliderActiv () {
    if (sliderIndexActiv >= sliderItems.length) {
        sliderIndexActiv = 0;
    } else if (sliderIndexActiv < 0) {
        sliderIndexActiv = 4;
    } else {
        sliderIndexActiv = sliderIndexActiv;
    }
    sliderItems.forEach ((item, index) => {
        if (sliderIndexActiv === index) {
            item.classList.add('slider__item_active');
        } else {
            item.className = 'slider__item';
        }
    })
    sliderDotActiv();
}

function sliderDotActiv () {
    sliderDot.forEach((item, index) => {
        if (sliderIndexActiv === index) {
            item.classList.add('slider__dot_active');
        } else {
            item.className = 'slider__dot';
        }
    })
}

btnPrev.onclick = function () {
    sliderIndexActiv--;
    sliderActiv();
}

btnNext.onclick = function () {
    sliderIndexActiv++;
    sliderActiv();
}

sliderDot.forEach((item, index) => {
    item.onclick = function () {
        sliderIndexActiv = index;
        sliderActiv();
    }
})

