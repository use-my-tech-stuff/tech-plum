$(document).ready(function () {
    // featured listings carousel
    $('.featured-products').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        responsive: [,
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // user reviews carousel
    $('.reviews-content').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [{
            breakpoint: 1366,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('active-flex')
})
