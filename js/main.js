(function($) {
  jQuery(document).ready(function($) {
    

    $(".fa-shopping-cart").click(function() {
      $("#myModal").modal("show");
    });

if( $(".owl-carousel").length>0){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 5,
          nav: true,
          loop: false,
          margin: 20
        }
      }
    });
}
    // Auto carousel class
    $(".carousel-inner .item:first-child").addClass("active");

    // Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Scroll to up
    $(".scroll-to-top a").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });

  jQuery(window).load(function() {
    // Masonry
    jQuery(".masonry-blog").masonry({ singleMode: true });

    // Preloader
    jQuery(".preloader").fadeOut(500);
  });
})(jQuery);
