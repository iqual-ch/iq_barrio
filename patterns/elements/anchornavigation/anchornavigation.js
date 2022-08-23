(function ($) {

  $(document).ready(function () {

    $('[data-anchornavigation]').each(function(){
      let $navbar = $(this);
      $navbar.html('');
      $('[data-anchor-label]').each(function () {
        let $a = $('<a href="#' + $(this).attr('id') + '">');
        $a.append('<span>' + $(this).data('anchor-label') + '</span>');
        if ($(this).data('anchor-icon') ) {
          $a.append('<i class="' + $(this).data('anchor-icon') + '"></i>');
        }

        $a.click(function(){
          if ($(this).attr('href') == window.location.hash) {
            anchorScroll();
          }
        });
        $navbar.append($a);
      });

      let $menuItems = $navbar.find('a');
      let scrollItems = $menuItems.map(function () {
        let item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

      // Bind to scroll
      $(window).scroll(function () {
        // Get container scroll position
        let fromTop = $(this).scrollTop();

        // Get id of current scroll item
        let cur = scrollItems.map(function () {
          if ($(this).is(':visible') && $(this).offset().top - window.scrollOffset <= fromTop + 3)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        let id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class

        $menuItems.removeClass('active').filter("[href='#" + id + "']").addClass("active");
      });
    });
  });
})(jQuery);
