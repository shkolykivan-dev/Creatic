
const hiddenMenu = document.querySelector(".hidden-menu")
const headerMenu = document.querySelector('.header__menu')

const activeStatus = {
    true: '0',
    false: '-100vw'
}

hiddenMenu.addEventListener("click", () => {
    hiddenMenu.classList.toggle('active')
    const isMenuActive = hiddenMenu.classList.contains('active')
    headerMenu.style.right = activeStatus[isMenuActive]
    document.body.classList.toggle('hidden')//css: body.hidden{overflow: hidden;}
})

console.log(innerHeight, innerWidth)


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
    on: {
        slideChangeTransitionStart: function () {
            this.slides.forEach((slide, index) => {
                slide.classList.remove('swiper-slide-prev', 'swiper-slide-next');
                if (index === this.activeIndex - 1) {
                    slide.classList.add('swiper-slide-prev');
                } else if (index === this.activeIndex + 1) {
                    slide.classList.add('swiper-slide-next');
                }
            });
        },
        slideChangeTransitionEnd: function () {
            this.slides.forEach((slide) => {
                slide.classList.remove('swiper-slide-prev', 'swiper-slide-next');
            });
            let prevSlide = this.slides[this.activeIndex - 1];
            let nextSlide = this.slides[this.activeIndex + 1];
            if (prevSlide) prevSlide.classList.add('swiper-slide-prev');
            if (nextSlide) nextSlide.classList.add('swiper-slide-next');
        },
    },
});
