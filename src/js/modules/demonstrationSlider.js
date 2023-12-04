function demonstrationSlider() {
    const slider = document.querySelector('.demonstration__slider.swiper');
    if (slider) {
        const swiper = new Swiper(slider, {
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }
}

export default demonstrationSlider;