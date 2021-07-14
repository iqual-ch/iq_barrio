(function ($) {
  $(document).ready(function () {
    $('[data-show]').on('click', function () {
      if ($(this).data('scroll-lock') == 'yes') {
        $('body').addClass('scroll-lock');
      }
      $($(this).data('show')).show();
    });
  });
})(jQuery);
