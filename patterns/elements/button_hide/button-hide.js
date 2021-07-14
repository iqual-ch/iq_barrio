(function ($) {
  $(document).ready(function () {
    $('[data-hide]').on('click', function () {
      if ($(this).data('scroll-lock') == 'yes') {
        $('body').removeClass('scroll-lock');
      }
      $($(this).data('hide')).hide();
    });
  });
})(jQuery);
