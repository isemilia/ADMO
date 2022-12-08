function togglePopup(popupSelector, activeClass) {
    const popup = document.querySelector(popupSelector);
    popup.classList.toggle(activeClass);
}

function closeByClickOutside(popupSelector, overlaySelector, activeClass) {
    const popup = document.querySelector(popupSelector);
    popup.addEventListener('click', (e) => {
        if(e.target.matches(overlaySelector)) {
            togglePopup(popupSelector, activeClass);
            bodyScrollToggle();
        }
    })
}

function bodyScrollToggle() {
    document.body.classList.toggle('no-scroll');
}

window.addEventListener('DOMContentLoaded', () => {
    const partnersBtns = document.querySelectorAll('[data-become-partners]');

    partnersBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            togglePopup('#partnersPopup', 'popup--active');
            bodyScrollToggle();
        });
    });

    closeByClickOutside('#partnersPopup', '.popup-overlay', 'popup--active');
});