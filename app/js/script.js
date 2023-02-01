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
    const burger = document.querySelector('.menu-btn')
    if (!burger) return
    const menu = document.querySelector('.menu__mobile-list')
    const headerOverlay = document.querySelector('.header__overlay')
    if (!headerOverlay) return
    const body = document.querySelector('.body')

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
        const tabsBtns = document.querySelectorAll('.tabs__switcher-button')
        if (!tabsBtns) return
        const tabsContents = document.querySelectorAll('.tabs__content')

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
    const openModal = document.querySelector('.main-button--service')
    if (!openModal) return
    const modal = document.querySelector('.modal')
    const closeModal = document.querySelector('.contact-form__close-button')
    const body = document.querySelector('.body') // with  body.classList.add('stop-scroll')  window is jumping with scrollbar

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
    const artBtn = document.querySelector('.recommended-pubs__segment-button--articles')
    if (!artBtn) return
    const newsBtn = document.querySelector('.recommended-pubs__segment-button--news')
    const artContainer = document.querySelector('.recommended-pubs__pub-container--pubs')
    const newsContainer = document.querySelector('.recommended-pubs__pub-container--news')

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



