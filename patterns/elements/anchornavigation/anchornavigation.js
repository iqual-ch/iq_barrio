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

    $('[data-anchornavigation]').find('a').click(function () {

      $($(this).attr('href')).parents('.iq-collapsible-content:hidden').prev('.iq-collapsible-title').click()

      $([document.documentElement, document.body]).animate({
        scrollTop: $($(this).attr('href')).offset().top - $('[data-anchornavigation]').height()
      }, 500);
    });




    var menuItems = $('[data-anchornavigation]').find('a');

    var scrollItems = $('[data-anchornavigation]').first().find('a').map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind to scroll
    $(window).scroll(function () {
      // Get container scroll position
      var fromTop = $(this).scrollTop() + $('[data-anchornavigation]').height() + 1 ;

      // Get id of current scroll item
      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
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





// <a id="{{anchor_id}}" data-anchor-label="{{anchor_label}}" data-anchor-icon="{{anchor_icon}}"></a>
