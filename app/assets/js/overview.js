window.addEventListener('DOMContentLoaded', () => {
    const overviewSwiper = new Swiper('#overviewSwiper', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        slideActiveClass: 'overview-slide--active',
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
        // Navigation arrows
        navigation: {
            prevEl: '.overview-swiper-prev',
            nextEl: '.overview-swiper-next',
        },
    });
})