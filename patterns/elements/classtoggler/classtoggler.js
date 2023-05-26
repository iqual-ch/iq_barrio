(function ($) {
  $(document).ready(function() {
    $('.iq-classtoggler [data-toggle-class]').on('click', function () {
      if( $(this).data('scroll-lock') == 'yes' ){
        $('body').toggleClass('scroll-lock');
      }
      $( $(this).data('toggle-class') ).toggleClass($(this).data('class'));
      $('[data-toggle-class="' + $(this).data('toggle-class') + '"]').parent().toggleClass('active');
    });
  });
})(jQuery);
