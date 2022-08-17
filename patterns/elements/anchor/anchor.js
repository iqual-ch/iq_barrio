(function ($) {
  function anchor($anchors) {

    // Select all links with hashes
    $anchors.click(function (event) {
      // On-page links
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        let $target = $(this.hash);
        $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');

        let hash = $(this).attr('href');
        // Does a scroll target exist?
        if ($target.length) {

          // Only prevent default if animation is actually gonna happen
          event.preventDefault();

          if (!$target.is(':visible')) {
            // Check if target element is inside accordion.
            if ($target.closest('.ui-accordion-content').length) {
              $target.closest('.ui-accordion-content').prev('.ui-accordion-header').click();
            }

            // Check if target element is inside tab.
            if ($target.closest('.iq-tab-content').length) {
              let tabId = $target.closest('.iq-tab-content').attr('aria-labelledby');
              $target.closest('.iq-tab-element').children('.iq-tab-list').children('.iq-tab-title[aria-labelledby="' + tabId + '"]').find('a').click();

              setTimeout(function () {
                history.pushState(null, null, document.location.pathname + hash);
              }, 500);

              // Do not scroll - jQuery UI already does that.
              return;
            }
          }

          let scrollPosition = $target.offset().top;
          if ($('[data-anchornavigation]').length) {
            scrollPosition -= $('[data-anchornavigation]').height();
          }
          $('html, body').animate({
            scrollTop: scrollPosition
          }, 500, function () {
            history.pushState(null, null, document.location.pathname + hash);
            // Callback after animation
            // Must change focus!
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            }
            else {
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
      anchor($(context).find('.pd-live a[href *= "#"]').not('[href="#"]').not('[href="#0"]'));
      $(document).ready(function () {
        setTimeout(function(){
          let $activeAnchor = $(location.hash);
          let scrollPosition = $activeAnchor.offset().top;
          if ($('[data-anchornavigation]').length) {
            scrollPosition -= $('[data-anchornavigation]').height();
          }

          if ($activeAnchor.length && $activeAnchor.is(':visible')) {
            $('html, body').animate({
              scrollTop: scrollPosition
            }, 500);
          }
        },500);
      });
    }
  };
})(jQuery);
