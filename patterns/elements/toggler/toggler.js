(function ($) {
  $(document).ready(function () {
    $('.iq-toggler [data-toggle]').on('click', function () {
      if ($(this).data('scroll-lock') == 'yes') {
        $('body').toggleClass('scroll-lock');
      }
      $($(this).data('toggle')).toggle();
      $('[data-toggle="' + $(this).data('toggle') + '"]').parent().toggleClass('active');
    });
  });
})(jQuery);
