window.addEventListener('DOMContentLoaded', () => {
    function openMenu(menuSelector, triggerSelector, menuActiveClass, triggerActiveClass) {
        const menu = document.querySelector(menuSelector);
        const trigger = document.querySelector(triggerSelector);

        trigger.addEventListener('click', e => {
            e.preventDefault();
            menu.classList.toggle(menuActiveClass);
            trigger.classList.toggle(triggerActiveClass);
        });

        window.addEventListener('click', function(e) {
            if (e.target != menu && e.target !=trigger && menu.classList.contains(menuActiveClass)) {
                menu.classList.remove(menuActiveClass);
                trigger.classList.remove(triggerActiveClass);
            }
        });
    }

    openMenu('[data-header-nav]', '[data-nav-trigger]', 'header-nav--active', 'header-hamburger--active');
})