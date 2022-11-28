

(function ($) {

  $(document).ready(function () {
    setTimeout(function(){
      anchorScroll();
    }, 200);
  });

  $(window).resize(function() {
    setDefaultScrollOffset();
  });

  window.onhashchange = function(e) {
    anchorScroll();
  };

  window.anchorScroll = function() {
    let hash = window.location.hash;
    let $target = $(hash);

    if (!$target.is(':visible')) {
      let collapsibleId = $target.closest('[aria-labelledby]').attr('aria-labelledby');
      if (collapsibleId) {
        $('#' + collapsibleId).click();
      }
    }

    let scrollPosition = $target.offset().top - window.scrollOffset;
    window.scrollTo(0, scrollPosition);
  }

  setDefaultScrollOffset('scroll, resize');

})(jQuery);
