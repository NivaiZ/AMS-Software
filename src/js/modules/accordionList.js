function accordionList() {
    const button = document.querySelectorAll('[data-accordion="button"]');
    const list = document.querySelectorAll('[data-list="accordion"]');
    console.log(list);

    if(button) {
        for (let i = 0; i < button.length; i++) {
            const element = button[i];
            element.addEventListener('click', () => {
                element.classList.toggle('accordion__circle--plus')
                element.classList.toggle('accordion__circle--minus');
                list[i].classList.toggle('accordion__visible');
            })
        }
    }
}
export default accordionList