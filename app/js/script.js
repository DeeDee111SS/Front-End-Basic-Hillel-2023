$('.js-slider').slick({
    dots: true,
    dotsClass: 'dots',
    prevArrow: false,
    nextArrow: false
    // infinite: false
});

$('.js-slider-achievements').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'dots',
    prevArrow: false,
    nextArrow: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                dotsClass: 'dots',
                prevArrow: false,
                nextArrow: false,
                infinite: false
            }
        }
        
    ]
});