const swiperParams = {
    slidesPerView      : 1.25,
    slidesOffsetBefore : 14,
    slidesOffsetAfter  : 14,
    spaceBetween       : 14,
    freeMode           : true,
    grabCursor         : true,
    breakpoints        : {
        375: {
            slidesPerView: 1.5
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const swiperEls = document.getElementsByClassName('base-swiper');

    for (let i = 0; i < swiperEls.length; i++) {
        swiperEls[i].querySelector('.swiper-container').classList.add(`swiper-${ i + 1 }`);

        new Swiper(`.swiper-${ i + 1 }`, swiperParams)
    }
});
