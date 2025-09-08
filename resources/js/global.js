/**
 * @file
 * Global utilities.
 *
 */

(function ($, Drupal) {
  $('.nav-mobile, .nav-sidebar, .nav-main').find('[data-toggle="dropdown"]').click(function (e) {
    location.href = $(this).attr('href');
  });

  $('.nav-main').find('.menu-item--expanded').hover(
    function () {
      $(this).children('.dropdown-menu').addClass('show');
      $(this).children('[aria-expanded]').attr('aria-expanded', 'true');
    }, function () {
      $(this).children('.dropdown-menu').removeClass('show');
      $(this).children('[aria-expanded]').attr('aria-expanded', 'false');
    }
  );

  $(document).ready(function () {
    // Webform Signature Pad in Tabbed Content
    $('.ui-tabs-anchor').click(function () {
      $($(this).attr('href')).find('.webform-signature-pad canvas').each(function () {
        let width = $(this).parent().innerWidth();
        let height = $(this).parent().innerHeight();
        this.width = width;
        this.height = height;
      });
    });
  });

  $(document).on('pagedesigner-before-setup', function () {
    Twig.extendFilter('clean_id', function (value) {
      if (value) {
        return value.replace(/[\W_]+/g, "-").toLowerCase();
      }
      return value;
    });
  });

})(jQuery, Drupal);
