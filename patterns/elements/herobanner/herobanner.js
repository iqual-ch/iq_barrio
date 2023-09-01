/**
 * @file
 * Global utilities.
 *
 */

(function ($, Drupal) {
  Drupal.behaviors.iqual_pattern_herobanner = {
    attach: function (context, settings) {
      // Calculate banner height for fullscreen size.
      if ($('.iq-herobanner').length) {
        let fullheight = Math.ceil($(window).height() - $('.iq-herobanner').first().offset().top);
        document.documentElement.style.setProperty('--fullscreen-height', fullheight + "px");
      }
    }
  };

})(jQuery, Drupal);
