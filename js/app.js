//  недоработал первый слайдер

$(document).ready(function(){
    $('#slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            autoplay: false,
            autoplaySpeed: 1000,
            fade: true,
            pauseOnHover: false,
            arrows: false
      });

          // slick-2(News)
      $('#slider-news').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000,
});
})

          // Map
      function initMap() {
        // The location of Point
        let address = {lat: 40.675910, lng: -73.979123};
        // The map, centered at Centr
        let map = new google.maps.Map(
            document.getElementById('map'), {
                    zoom: 15, 
                    center: address,
                    disableDefaultUI: true,
        });
        // The marker, positioned at Marker
        let marker = new google.maps.Marker({
            position: address, 
            map: map,
            icon:"img/Pin.png",
            title: "MyPoint",
        });
}

  // scroll for Menu
let allLink = document.querySelectorAll(".ba-menu__link");
  for (let i = 0; i < allLink.length; i++) {
    allLink[i].onclick = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  for (let i = 0; i < allLink.length; i++) {
    allLink[i].ontouchstart = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // For ScrollArrow
let allArrow = document.querySelectorAll(".header-arrow");
  for (let i = 0; i < allArrow.length; i++) {
    allArrow[i].onclick = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  for (let i = 0; i < allArrow.length; i++) {
    allArrow[i].ontouchstart = function (event) {
      event.preventDefault();
      let blockID = this.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  // gallery
  $(document).ready(function () {
    $('.ba-gallery__img').on('click', function () {
        let imgSrc = $(this).attr('src'),
            $modalImage = $('<img>');

        $modalImage.attr('src', imgSrc);


        $('.ba-modal-content-wrapper').append($modalImage)
        openModal();
    })
});

let openModal = function () {
    $('.ba-modal').addClass('ba-modal--open');
    $('body').addClass('ba-modal-is-open');

    $(document).on('keydown', function (e) {
        if (e.keyCode == 27) {
            closeModal();

        }
    });
}

let closeModal = function () {
    $('.ba-modal').removeClass('ba-modal--open');
    $('body').removeClass('ba-modal-is-open');
    $('.ba-modal-content-wrapper').empty();
    $(document).off('keydown', closeModal);
}

$('.ba-modal-close').on('click', closeModal);
