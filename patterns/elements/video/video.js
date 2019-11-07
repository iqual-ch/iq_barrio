(function ($) {
    $(document).ready(function () {
        var autoplays = $('.iqvm-autoplay');
        if (autoplays.lenght > 0) {
            autoplays.each(
                function (i, autoplay) {
                    autoplay.play();
                }
            );
        }
    });
})(jQuery);
