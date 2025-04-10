AOS.init();

lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/js/lottie-animation.js'
});

var ecosystemSwiper = new Swiper(".ecosystemSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    loop: false,
    navigation: {
        nextEl: "#ecosystemSwiper .swiper-button-next",
        prevEl: "#ecosystemSwiper .swiper-button-prev",
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        lockClass: 'swiper-button-lock'
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1000: {
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100,
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1500: {
            slidesOffsetBefore: 440,
            slidesOffsetAfter: 440,
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
    on: {
        init: function() {
            
            const nextButton = document.querySelector('#ecosystemSwiper .swiper-button-next');
            const prevButton = document.querySelector('#ecosystemSwiper .swiper-button-prev');
            if (nextButton && prevButton) {
                nextButton.style.display = 'flex';
                prevButton.style.display = 'flex';
            }
        },
        slideChange: function() {
            const nextButton = document.querySelector('#ecosystemSwiper .swiper-button-next');
            const prevButton = document.querySelector('#ecosystemSwiper .swiper-button-prev');
            
           
            if (this.isEnd) {
                if (nextButton) {
                    nextButton.style.display = 'flex';
                    nextButton.classList.remove('swiper-button-disabled', 'swiper-button-lock');
                    nextButton.addEventListener('click', () => {
                        this.slideTo(0);
                    }, { once: true });
                }
            }
            
           
            if (this.isBeginning) {
                if (prevButton) {
                    prevButton.style.display = 'flex';
                    prevButton.classList.remove('swiper-button-disabled', 'swiper-button-lock');
                    prevButton.addEventListener('click', () => {
                        this.slideTo(this.slides.length - 1);
                    }, { once: true });
                }
            }
        }
    }
});


var communitySwiper = new Swiper(".communitySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    loop: false,
    navigation: {
        nextEl: "#communitySwiper .swiper-button-next",
        prevEl: "#communitySwiper .swiper-button-prev",
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        lockClass: 'swiper-button-lock'
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1000: {
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100,
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1500: {
            slidesOffsetBefore: 440,
            slidesOffsetAfter: 440,
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
    on: {
        init: function() {
            
            const nextButton = document.querySelector('#communitySwiper .swiper-button-next');
            const prevButton = document.querySelector('#communitySwiper .swiper-button-prev');
            if (nextButton && prevButton) {
                nextButton.style.display = 'flex';
                prevButton.style.display = 'flex';
            }
        },
        slideChange: function() {
            const nextButton = document.querySelector('#communitySwiper .swiper-button-next');
            const prevButton = document.querySelector('#communitySwiper .swiper-button-prev');
            
           
            if (this.isEnd) {
                if (nextButton) {
                    nextButton.style.display = 'flex';
                    nextButton.classList.remove('swiper-button-disabled', 'swiper-button-lock');
                    nextButton.addEventListener('click', () => {
                        this.slideTo(0);
                    }, { once: true });
                }
            }
            
           
            if (this.isBeginning) {
                if (prevButton) {
                    prevButton.style.display = 'flex';
                    prevButton.classList.remove('swiper-button-disabled', 'swiper-button-lock');
                    prevButton.addEventListener('click', () => {
                        this.slideTo(this.slides.length - 1);
                    }, { once: true });
                }
            }
        }
    }
});

var technologySwiper = new Swiper(".technologySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    loop: false,
    navigation: {
        nextEl: "#technologySwiper .swiper-button-next",
        prevEl: "#technologySwiper .swiper-button-prev",
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        lockClass: 'swiper-button-lock'
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1000: {
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100,
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1500: {
            slidesOffsetBefore: 440,
            slidesOffsetAfter: 440,
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
    on: {
        init: function() {
            
            const nextButton = document.querySelector('#technologySwiper .swiper-button-next');
            const prevButton = document.querySelector('#technologySwiper .swiper-button-prev');
            if (nextButton && prevButton) {
                nextButton.style.display = 'flex';
                prevButton.style.display = 'flex';
            }
        },
        slideChange: function() {
            const nextButton = document.querySelector('#technologySwiper .swiper-button-next');
            const prevButton = document.querySelector('#technologySwiper .swiper-button-prev');
            
           
            if (this.isEnd) {
                if (nextButton) {
                    nextButton.style.display = 'flex';
                    nextButton.classList.remove('swiper-button-disabled', 'swiper-button-lock');
                    nextButton.addEventListener('click', () => {
                        this.slideTo(0);
                    }, { once: true });
                }
            }
            
           
            if (this.isBeginning) {
                if (prevButton) {
                    prevButton.style.display = 'flex';
                    prevButton.classList.remove('swiper-button-disabled', 'swiper-button-lock');
                    prevButton.addEventListener('click', () => {
                        this.slideTo(this.slides.length - 1);
                    }, { once: true });
                }
            }
        }
    }
});




const style = document.createElement('style');
style.textContent = `
    .swiper-button-next,
    .swiper-button-prev {
        display: flex !important;
        opacity: 1 !important;
    }
    .swiper-button-disabled {
        opacity: 0.35 !important;
        pointer-events: auto !important;
        cursor: pointer !important;
    }
`;
document.head.appendChild(style);