'use strict';

document.addEventListener('DOMContentLoaded', () => {
    slideSwitcher();
    serviceSwitcher();
    writeUsButton();
    formValidation();
});

function slideSwitcher () {
    const slideControl = document.querySelector('.slider-control');
    slideControl.addEventListener('click', evt => {
        const id = evt.target.dataset.number;
        if (id) {
            switchSlide(id);
        }
        
        if (evt.target.tagName === 'LI') {
            for (let i = 0; i < slideControl.children.length; i++) {
                const element = slideControl.children[i];
                element.className = 'slide-toggle';
            }
            evt.target.className = 'slide-toggle-selected';
        }
    });
};

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

function serviceSwitcher() {
    const panel = document.querySelector('.service-buttons');
    panel.addEventListener('click', evt => {
        let id = evt.target.classList[1];
        if (id) {
            id = id.split('-')[2];
            switchService(id);
        }
    });
};

    function switchService(id) {
        const services = document.querySelector('.service-slides');
        for (let i = 0; i < services.children.length; i ++) {
            const element = services.children[i];
            element.style.display = 'none';
            const isShowedService = 
                element.classList[1] === `service-${id}`;
            if (isShowedService) {
                element.style.display = 'block';
            }
        }
        const serviceButtons = document.querySelector('.service-buttons');
        for (let i = 0; i < serviceButtons.children.length; i ++) {
            serviceButtons.children[i].className = '';
            if (parseFloat(id) === i + 1) {
                serviceButtons.children[i].className = 'selected-service';
            }
        }
    };

function writeUsButton() {
    const modal = document.querySelector('.modal-write-us');
    const form = document.querySelector('.form-write-us');
    const inputs = [form.elements.name, form.elements.email, form.elements.letter];
    const button = document.querySelector('.write-us-button');

    button.addEventListener('click', evt => {
        evt.preventDefault();
        modal.style.display = 'block';
        inputs.forEach(input => {
            input.style.background = '#f2f2f2';
        });
    })

    const closeButton = document.querySelector('.modal-close');
    closeButton.addEventListener('click', evt => {
        modal.style.display = 'none';
        modal.classList.remove('modal-error');
    });
}

function formValidation() {
    const form = document.querySelector('.form-write-us');
    const modal = document.querySelector('.modal-write-us');
    const inputs = [form.elements.name, form.elements.email, form.elements.letter];
    inputs.forEach(input => {
        input.addEventListener('input', evt => {
            evt.target.style.background = '#f2f2f2';
        });
    });

    form.addEventListener('submit', evt => {
        const elements = evt.target.elements;
        modal.classList.remove('modal-error');
        let error = null;
        inputs.forEach(input => {
            if (!input.value) {
                evt.preventDefault();
                input.style.background = '#f6dada';
                error = true;
            }
        });
        if (error) {
            setTimeout(()=>{modal.classList.add('modal-error')}, 10);
        }
    });
};