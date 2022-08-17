(function ($) {
  $(document).ready(function () {

    $('[data-anchornavigation]').each(function(){
      var $navigation_bar = $(this);
      var html = '';
      $('[data-anchor-label]').each(function () {
        html += '<a href="#' + $(this).attr('id') + '">';
        html += '<span>' + $(this).data('anchor-label') + '</span>';
        if ($(this).data('anchor-icon') ) {
          html += '<i class="' + $(this).data('anchor-icon') + '"></i>';
        }
        html += '</a>';
      });
      $navigation_bar.html( html );
    });

    $('[data-anchornavigation]').find('a').click(function (e) {
      e.preventDefault();
      let $target = $($(this).attr('href'));
      let hash = $(this).attr('href');
      if (!$target.is(':visible')) {

        // Check if target element is inside accordion.
        if ($target.closest('.ui-accordion-content').length) {
          $target.closest('.ui-accordion-content').prev('.ui-accordion-header').click();
        }

        // Check if target element is inside tab.
        if ($target.closest('.iq-tab-content').length) {
          let tabId = $target.closest('.iq-tab-content').attr('aria-labelledby');
          $target.closest('.iq-tab-element').children('.iq-tab-list').children('.iq-tab-title[aria-labelledby="' + tabId + '"]').find('a').click();

          setTimeout(function(){
            history.pushState(null, null, document.location.pathname + hash);
          }, 500);

          // Do not scroll - jQuery UI already does that.
          return;
        }
      }

      if ($target.is(':visible')) {
        $([document.documentElement, document.body]).animate({
          scrollTop: $target.offset().top - $('[data-anchornavigation]').height()
        }, 500, function() {
          history.pushState(null, null, document.location.pathname + hash);
        });
      }

    });

    var menuItems = $('[data-anchornavigation]').find('a');

    var scrollItems = $('[data-anchornavigation]').first().find('a').map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind to scroll
    $(window).scroll(function () {
      // Get container scroll position
      var fromTop = $(this).scrollTop() + $('[data-anchornavigation]').height() + 20;

      // Get id of current scroll item
      var cur = scrollItems.map(function () {
        if ($(this).is(':visible') && $(this).offset().top < fromTop)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
      // Set/remove active class

      menuItems.removeClass('active').filter("[href='#" + id + "']").addClass("active");
    });

  });
})(jQuery);
