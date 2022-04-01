(function ($) {
  function anchor($anchors) {
    // Select all links with hashes
    $anchors
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $(this.hash).closest('.iq-collapsible-content:not([class*="active"])').prev().click();
            var $target = $(target);
            if ($target.closest('.iq-collapsible-content').length) {
              return false;
            }
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  }
  Drupal.behaviors.iqual_pattern_anchor = {
    attach: function (context, settings) {
      anchor($(context)
        .find('.pd-live a[href *= "#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
      );
    }
  };
})(jQuery);
