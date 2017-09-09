'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const slideControl = document.querySelector('.slider-control');
    slideControl.addEventListener('click', (evt) => {
        const id = evt.target.className.split('-')[2];
        if (id) {
            switchSlide(id);
        }
    })
});

function switchSlide(id) {
    const slider = document.querySelector('.slider');
    for (let i = 0; i < slider.children.length; i ++) {
        const element = slider.children[i];
        element.style.display = 'none';
        const isShowedSlide = 
            element.classList[0] === 'slide' && element.classList[1] === `slide-${id}`;
        if (isShowedSlide) {
            element.style.display = 'flex';
        }
    }
    document.querySelector('.slider-control').style.display = 'block';
};