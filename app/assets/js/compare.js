window.addEventListener('DOMContentLoaded', () => {
    const compareElem = document.querySelector('.compare-elem');
    const compareItems = document.querySelectorAll('.compare-item');

    ['resize', 'DOMContentLoaded', 'load'].forEach(event => {
        window.addEventListener(event, () => {
            if (window.innerWidth < 1010) {
                compareItems[1].insertAdjacentElement('afterbegin', compareElem);
            }
        });
    });
});