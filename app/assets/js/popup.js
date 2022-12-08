function togglePopup(popupSelector, activeClass) {
    const popup = document.querySelector(popupSelector);
    popup.classList.toggle(activeClass);
}

function closeByClickOutside(popupSelector, overlaySelector, activeClass) {
    const popup = document.querySelector(popupSelector);
    popup.addEventListener('click', (e) => {
        if(e.target.matches(overlaySelector)) {
            togglePopup(popupSelector, activeClass);
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    const signUpBtns = document.querySelectorAll('[data-sign-up]');

    signUpBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            togglePopup('#signUpPopup', 'popup--active');
        });
    });
    
    closeByClickOutside('#signUpPopup', '.popup-overlay', 'popup--active');
});