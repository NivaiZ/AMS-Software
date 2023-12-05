function demonstrationSlider() {
    const slider = document.querySelector('.demonstration__slider.swiper');
    if (slider) {
        const swiper = new Swiper(slider, {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

export default demonstrationSlider;