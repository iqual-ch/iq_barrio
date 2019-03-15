/**
 * @file
 * Global utilities.
 *
 */

(function ($, Drupal) {
  jQuery('[data-style]').each(function(){jQuery(this).attr('style', jQuery(this).data('style') )})

})(jQuery, Drupal);
