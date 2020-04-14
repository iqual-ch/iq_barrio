(function ($, Drupal) {
  function slider(sliders) {

    sliders.each(function (i, slider) {
      $slider = $(slider);
      $slider.addClass('owl-carousel');

      var config = {
        dots: false,
        nav: false,
        items: 1,
        loop: false,
        margin: 15
      };

      if ($slider.data('autoplay')) {
        config.autoplay = true;
//        config.autoplayHoverPause = true;
        if ($slider.data('duration')) {
          config.autoplayTimeout = $slider.data('duration') * 1000;
        }

        if ($slider.data('speed')) {
          config.autoplaySpeed = $slider.data('speed') * 1000;
        }
      }

      if ($slider.data('loop')) {
        config.loop = true;
      }

      if ($slider.data('navigation')) {
        config.dotClass = $slider.data('navigation');
        config.dots = true;
        if ($slider.data('speed')) {
          config.dotsSpeed = $slider.data('speed') * 1000;
        }
      }

      if ($slider.data('arrow-left') && $slider.data('arrow-right')) {
        config.navText = ["<i class=\"" + $slider.data('arrow-left') + "\"></i>", "<i class=\"" + $slider.data('arrow-right') + "\"></i>"];
        config.nav = true;
        if ($slider.data('speed')) {
          config.navSpeed = $slider.data('speed') * 1000;
        }
      }

      $slider.owlCarousel(config);
    });
  }

  Drupal.behaviors.iqual_pattern_slider = {
    attach: function (context, settings) {
      slider($(context).find('.pd-live .iq-slider > .iq-column'));
    }
  };


})(jQuery, Drupal);
