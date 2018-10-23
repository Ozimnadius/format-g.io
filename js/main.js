$(function () {
    const body = $('body');

    $('.nav__item-link').on('touchstart', function (e) {
        let $this = $(this),
            item = $this.closest('.nav__item'),
            nav = item.closest('.nav'),
            subnav = item.find('.nav__drop'),
            items = nav.find('.nav__item').not(item);

        if (subnav.length) {
            e.preventDefault();
        }

        items.removeClass('active');
        item.toggleClass('active');
    });

   $('.nav-1__item').on('mouseover', function (e) {
       let item = $(this),
           parent = item.closest('.nav-1'),
           items = parent.find('.nav-1__item');

       items.removeClass('active');
       item.addClass('active');
   });

   $('.nav-1__item-link').on('touchstart', function (e) {
       let $this = $(this),
           item = $this.closest('.nav-1__item'),
           nav = item.closest('.nav-1'),
           subnav = item.find('.nav-2'),
           items = nav.find('.nav-1__item').not(item);

       if (subnav.length) {
           e.preventDefault();
       }

       items.removeClass('active');
       item.addClass('active');
   });

   if (screen.width > 575.99) {
       $(".js-custom-scroll").mCustomScrollbar({
           scrollButtons: {enable: true}
       });
   } else {
       $('.js-custom-scroll').showMore({
           minheight: 212,
           buttontxtmore: 'Показать больше текста',
           buttontxtless: 'Скрыть текст',
           buttoncss: 'abt__more',
           animationspeed: 250
       });
   }

    $('.mmenu__button').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
        nav = $('.nav');
        if (!$this.hasClass('open') && !$this.hasClass('close')) {
            $this.addClass('open');
        } else{
            $this.toggleClass('open close');
        }
        nav.toggleClass('open');


    });

   /*SWIPER*/
    var brandsSwiper = new Swiper ('.main-brands__container', {
        loop: true,
        spaceBetween: 100,
        slidesPerView: 6,
        speed: 700,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            575.99: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            767.99: {
                slidesPerView: 3,
                spaceBetween: 80
            },
            1199.99: {
                slidesPerView: 4,
                spaceBetween: 80
            }
        }
    })
   /*END SWIPER*/


});