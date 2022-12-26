window.addEventListener('DOMContentLoaded', () => {
    const planBtn = document.querySelector('[data-plan-btn]');
    const planInfo = document.querySelector('[data-plan-info]');
    const plan = document.querySelector('.plan');

    function changeBtnText() {
        if(planBtn.innerText == planBtn.getAttribute('data-plan-btn-open')) {
            planBtn.innerText = planBtn.getAttribute('data-plan-btn-close');
        } else {
            planBtn.innerText = planBtn.getAttribute('data-plan-btn-open');
        }
    }

    /* ['resize', 'DOMContentLoaded'].forEach(event => {
        window.addEventListener(event, (e) => {
            e.preventDefault();
            
        })
    }) */

    planBtn.addEventListener('click', e => {
        e.preventDefault();
        if (+planInfo.style.maxHeight.replace(/[a-z]/g, '') === 0) {
            planInfo.style.maxHeight = planInfo.scrollHeight + 'px';
            planInfo.classList.toggle('plan-info-inner--open');
            changeBtnText();
            window.scrollTo({
                top: planInfo.offsetTop,
                behavior: 'smooth'
            });
        } else {
            planInfo.style.maxHeight = 0;
            planInfo.classList.toggle('plan-info-inner--open');
            changeBtnText();
            if (window.innerWidth > 767) {
                window.scrollTo({
                    top: plan.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: plan.offsetTop + 600,
                    behavior: 'smooth'
                });
            }
        }
    });
    
});