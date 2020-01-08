(function ($) {
    $(document).ready(function() {
        $('[data-toggle]').on('click', function () {
            if( $(this).data('scroll-lock') == 'yes' ){
                $('body').toggleClass('scroll-lock');
            }
            $( $(this).data('toggle') ).toggle();
            $('[data-toggle="' + $(this).data('toggle') + '"]').toggleClass('active');
        });
    });
})(jQuery);
