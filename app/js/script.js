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
 

(function () {
    var burger = document.querySelector('.menu-btn') // const must be changed to var for gulp build to minify js
    if (!burger) return
    var menu = document.querySelector('.menu__mobile-list')
    var headerOverlay = document.querySelector('.header__overlay')
    if (!headerOverlay) return
    var body = document.querySelector('.body')

    burger.addEventListener('click', function () {
        menu.classList.toggle('show')
        burger.classList.toggle('show')
        headerOverlay.classList.toggle('show')
        body.classList.toggle('stop-scroll')
    })

    headerOverlay.addEventListener('click', function () {
        menu.classList.toggle('show')
        burger.classList.toggle('show')
        headerOverlay.classList.toggle('show')
        body.classList.toggle('stop-scroll')
    })
})();

    (function () {
        var tabsBtns = document.querySelectorAll('.tabs__switcher-button')
        if (!tabsBtns) return
        var tabsContents = document.querySelectorAll('.tabs__content')

        tabsBtns.forEach(function (button, index) {
            button.addEventListener('click', function () {
                tabsBtns.forEach(function (buttonColor) {
                    buttonColor.classList.remove('active')
                }
                )
                tabsContents.forEach(function (text) {
                    text.classList.remove('active')
                }
                )
                button.classList.add('active')
                tabsContents[index].classList.add('active')
            })
        })
    })();

(function () {
    var openModal = document.querySelector('.main-button--service')
    if (!openModal) return
    var modal = document.querySelector('.modal')
    var closeModal = document.querySelector('.contact-form__close-button')
    var body = document.querySelector('.body') // with  body.classList.add('stop-scroll')  window is jumping with scrollbar

    openModal.addEventListener('click', function() {
        modal.classList.add('active')
        body.classList.add('stop-scroll')
    })

    closeModal.addEventListener('click', function() {
        modal.classList.remove('active')
        body.classList.remove('stop-scroll')
    })
})();

(function () {
    var artBtn = document.querySelector('.recommended-pubs__segment-button--articles')
    if (!artBtn) return
    var newsBtn = document.querySelector('.recommended-pubs__segment-button--news')
    var artContainer = document.querySelector('.recommended-pubs__pub-container--pubs')
    var newsContainer = document.querySelector('.recommended-pubs__pub-container--news')

    artBtn.addEventListener('click', function() {
        artBtn.classList.add('active')
        artContainer.classList.add('active')
        newsBtn.classList.remove('active')
        newsContainer.classList.remove('active')
    })

    newsBtn.addEventListener('click', function() {        
        newsBtn.classList.add('active')
        newsContainer.classList.add('active')
        artBtn.classList.remove('active')
        artContainer.classList.remove('active')
    })
})();




