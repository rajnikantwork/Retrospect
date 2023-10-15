$(window).load(function () {
  $('.carousel-inner').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    speed: 300,
    slidesToScroll: 1
  });
  $('.cloud-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  $('.clients-review').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,

  });
  $('.clients-carousel').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  $('.slide-cloud-storage').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.bottom-carousel').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
  });
  $(".hamburger-ic").on("click", function () {
    $(this).toggleClass("active");
    $(".menu").slideToggle();
  });
  $(".menu-item-has-children a").on("click", function () {
    $(this).toggleClass("active");
    $(this).next(".sub-menu").slideToggle();
    $(this).parent().siblings("li").toggleClass("hide-menu");
  });


  $(".prev-btn").click(function () {
    $(".clients-review").slick("slickPrev");
  });

  $(".next-btn").click(function () {
    $(".clients-review").slick("slickNext");
  });
  $(".prev-btn").addClass("slick-disabled");
  $(".clients-review").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
    if ($(".clients-review").hasClass("slick-disabled")) {
      $(".next-btn").addClass("slick-disabled");
    } else {
      $(".next-btn").removeClass("slick-disabled");
    }
  });

  $(".see-details").on("click", function () {
    $(this).toggleClass('active');
    $(this).parents(".position-footer").find(".see-details-expand").slideToggle();
  });
});