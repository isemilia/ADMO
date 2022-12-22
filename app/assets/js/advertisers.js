window.addEventListener('DOMContentLoaded', () => {
    initPopup({
        triggersSelector: '[data-login-btn]',
        popupSelector: '#loginPopup',
        popupActiveClass: 'popup--active',
        popupOverlaySelector: '.popup-overlay'
    });

    initPopup({
        triggersSelector: '[data-restore-pw]',
        popupSelector: '#restorePwPopup',
        popupActiveClass: 'popup--active',
        popupOverlaySelector: '.popup-overlay'
    });
    
    initPopup({
        triggersSelector: '[data-signup-btn]',
        popupSelector: '#signupPopup',
        popupActiveClass: 'popup--active',
        popupOverlaySelector: '.popup-overlay'
    });
})