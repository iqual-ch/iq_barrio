(function ($, Drupal) {
  function slider(sliders) {

    sliders.each(function (i, slider) {
      $slider = $(slider);

      var config = {
        autoplaySpeed: parseInt($slider.data('duration') * 1000),
        speed: parseInt($slider.data('speed') * 1000),
        prevArrow: '<i class="' + $slider.data('arrow-left') + ' slick-arrow-prev"></i>',
        nextArrow: '<i class="' + $slider.data('arrow-right') + ' slick-arrow-next"></i>',
        dots: typeof $slider.data('navigation') != 'undefined',
        cssEase: 'ease'
      };

      $slick = $slider.find('> .iq-column').slick($.extend(config , $slider.data('slick') ));
      if (typeof $slider.data('navigation') != 'undefined') {
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
