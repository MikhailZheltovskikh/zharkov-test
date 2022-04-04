$('.slider__inner').slick({
   arrows: false,
   fade: true,
   dots: true,

});

$('.facilities__slider-inner').slick({
   arrows: false,
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: true,
   nextArrow: '<button class="slick-next slick-next"><img src="images/facilities-slider/slide-next.svg" alt="next arrow"></button>',
   prevArrow: '<button class="slick-prev slick-arrow"><img src="images/facilities-slider/slide-prev.svg" alt="next arrow"></button>',
   responsive: [
      {
         breakpoint: 1251,
         settings: {
            slidesToShow: 3
         },
      },
      {
         breakpoint: 901,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 731,
         settings: {
            slidesToShow: 1
         },
      },
   ]
});

$('.photo-product__slider').slick({
   arrows: false,
   slidesToShow: 2,
   slidesToScroll: 1,
   arrows: true,
   infinite: true,
   nextArrow: '<button class="slick-next slick-next"><img src="images/facilities-slider/slide-next.svg" alt="next arrow"></button>',
   prevArrow: '<button class="slick-prev slick-arrow"><img src="images/facilities-slider/slide-prev.svg" alt="next arrow"></button>',
   responsive: [
      {
         breakpoint: 901,
         settings: {
            slidesToShow: 1,
            centerMode: true,
         }
      },
   ]
});

$('.photo-product__item-img').on('click', function () {
   if ($('.photo-product__item-icon').hasClass('none'),
      $('.photo-product__item-text').hasClass('active')) {
      $('.photo-product__item-icon').removeClass('none'),
         $('.photo-product__item-text').removeClass('active');
   }
   else {
      $('.photo-product__item-icon').addClass('none'),
         $('.photo-product__item-text').addClass('active');
   }
});