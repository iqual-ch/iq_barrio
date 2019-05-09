/**
 * @file
 * Global utilities.
 *
 */

(function ($, Drupal) {
  $('.nav-mobile, .nav-sidebar').find('[data-toggle="dropdown"]').click(function(e){location.href = $(this).attr('href');})

})(jQuery, Drupal);
