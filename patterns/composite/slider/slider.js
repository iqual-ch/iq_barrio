(function ($, Drupal) {
  function slider(sliders) {

    sliders.each(function (i, slider) {
      $slider = $(slider);


      var config = {
        autoplaySpeed: parseInt($slider.data('duration') * 1000),
        speed: parseInt($slider.data('speed') * 1000),
        cssEase: 'ease',
        dots: false,
        arrows: false
      };

      if( $slider.data('arrow-left') && $slider.data('arrow-right') ){
        config.prevArrow = '<i class="' + $slider.data('arrow-left') + ' slick-arrow-prev"></i>';
        config.nextArrow = '<i class="' + $slider.data('arrow-right') + ' slick-arrow-next"></i>';
        config.arrows = true
      }

      if( $slider.data('navigation') ){
        config.dots = true;
      }

      $slick = $slider.find('> .iq-column').slick($.extend(config , $slider.data('slick') ));
      if ( $slider.data('navigation') ) {
        $slick.find('.slick-dots li').addClass($slider.data('navigation'));
      }
    });
  }

  Drupal.behaviors.iqual_pattern_slider = {
    attach: function (context, settings) {
      slider($(context).find('.pd-live .iq-slider'));
    }
  };

})(jQuery, Drupal);
