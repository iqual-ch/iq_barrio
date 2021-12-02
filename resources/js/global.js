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

  /* User login menu dropdown (MyAccount) */
  $('.nav-holder').hover(function () {
    const dropdownMenu = $(this).children('.nav-holder > .nav');
    if (dropdownMenu.is(':visible')) {
      dropdownMenu.toggleClass('expanded');
    }
  });

  /**
   * Back button on order detail pages with fallback
   */
  const $window = $(window);
  const $trigger = $('.order-detail-back-button-container > p');
  const fallback = 'https://commerce-drpl.docker-dev.iqual.ch/de/user/orders';
  let hasHistory = false;

  $window.on('beforeunload', function () {
    hasHistory = true;
  });

  $trigger.on('click', function () {
    console.log('ok?')

    window.history.go(-1);

    setTimeout(function () {
      if (!hasHistory) {
        window.location.href = fallback;
      }
    }, 1000);

    return false;
  });

})(jQuery, Drupal);
