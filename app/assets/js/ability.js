let collage, subtitle;

window.addEventListener('DOMContentLoaded', () => {
    collage = document.querySelector('.ability-collage');
    subtitle = document.querySelector('.ability-subtitle');    
});

['DOMContentLoaded', 'resize'].forEach(ev => {
    window.addEventListener(ev, () => {
        if (window.innerWidth < 575) {
            collage.insertAdjacentElement('afterbegin', subtitle);
        }
    });
});