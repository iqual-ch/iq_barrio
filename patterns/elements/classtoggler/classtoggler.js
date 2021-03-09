(function ($) {
  $(document).ready(function() {
    $('[data-toggle]').on('click', function () {
      if( $(this).data('scroll-lock') == 'yes' ){
        $('body').toggleClass('scroll-lock');
      }
      $( $(this).data('toggle') ).toggleClass($(this).data('class'));
      $('[data-toggle="' + $(this).data('toggle') + '"]').parent().toggleClass('active');
    });
  });
})(jQuery);
