window.addEventListener('DOMContentLoaded', () => {
    const planBtn = document.querySelector('[data-plan-btn]');
    const planInfo = document.querySelector('[data-plan-info]');

    function changeBtnText() {
        if(planBtn.innerText == planBtn.getAttribute('data-plan-btn-open')) {
            planBtn.innerText = planBtn.getAttribute('data-plan-btn-close');
        } else {
            planBtn.innerText = planBtn.getAttribute('data-plan-btn-open');
        }
    }

    planBtn.addEventListener('click', e => {
        e.preventDefault();
        if (+planInfo.style.maxHeight.replace(/[a-z]/g, '') === 0) {
            planInfo.style.maxHeight = planInfo.scrollHeight + 'px';
            planInfo.classList.toggle('plan-info-inner--open');
            changeBtnText();
        } else {
            planInfo.style.maxHeight = 0;
            planInfo.classList.toggle('plan-info-inner--open');
            changeBtnText();
        }
    });
});