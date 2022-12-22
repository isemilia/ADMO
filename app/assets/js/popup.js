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

function closeActivePopups(activeClass) {
    const activePopups = document.querySelectorAll(`.${activeClass}`);

    activePopups.forEach(item => {
        item.classList.remove(activeClass);
        bodyScrollToggle();
    });
}

function initPopup({
    triggersSelector,
    popupSelector,
    popupActiveClass,
    popupOverlaySelector
}) {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeActivePopups('popup--active');
            togglePopup(popupSelector, popupActiveClass);
            bodyScrollToggle();
        });
    });

    closeByClickOutside(popupSelector, popupOverlaySelector, popupActiveClass);
}