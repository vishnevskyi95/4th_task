$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 700,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    focusOnSelect: true
                }
            }

        ]
    });
});