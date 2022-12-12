window.addEventListener('DOMContentLoaded', () => {
    const searchWrap = document.querySelector('[data-search-wrap]');
    const cities = document.querySelectorAll('[data-city]');
    const citiesList = document.querySelector('[data-cities-list]');
    const citiesWrap = document.querySelector('[data-cities-wrap]');
    const tabs = document.querySelectorAll('[data-tab]');

    const input = searchWrap.querySelector('input.search-input');

    function hideAllTabs() {
        tabs.forEach(tab => {
            tab.classList.add('hidden');
        });
    }

    function unmarkAllCities() {
        cities.forEach(city => {
            city.classList.remove('cities-item--active');
        });
    }

    input.addEventListener('click', () => {
        citiesWrap.classList.add('hero-cities--active');
        window.scrollTo({
            behavior: "smooth",
            top: input.offsetTop - 70
        });
        window.addEventListener('click', (e) => {
            // console.log(e.target);
            if (window.innerWidth >= 1024) {
                if (e.target != citiesWrap && e.target != citiesList && e.target != input && !e.target.classList.contains('cities-item')) {
                    citiesWrap.classList.remove('hero-cities--active');
                }
            } else {
                if (e.target != citiesWrap && e.target != citiesList && e.target != input) {
                    citiesWrap.classList.remove('hero-cities--active');
                }
            }
        });
    });

    input.addEventListener('input', () => {
        cities.forEach(city => {
            if (!input.length) {
                city.classList.remove('cities-item--active');
            }
            if(!city.textContent.toLowerCase().includes(input.value.toLowerCase())) {
                city.classList.remove('cities-item--active');
            } else if (input.value.toLowerCase() != '') {
                city.classList.add('cities-item--active');
            }
        });
    });

    cities.forEach((city, i) => {
        city.addEventListener('click', () => {
            hideAllTabs();
            tabs[i].classList.remove('hidden');
            input.value = city.textContent;
            unmarkAllCities()
            city.classList.add('cities-item--active');
        });
    });

    if (window.innerWidth > 1024) {
        cities.forEach(city => {
            city.addEventListener('click', e => {
                e.preventDefault();
            });
        });
    } 
});