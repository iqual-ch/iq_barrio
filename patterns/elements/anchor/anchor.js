

(function ($) {

  $(document).on('pagedesigner-before-setup', function(){
    Twig.extendFilter('clean_id', function (value) {
      if (value) {
        return value.replace(/[\W_]+/g, "-").toLowerCase();
      }
      return value;
    });
  });

  $(document).ready(function () {
    setTimeout(function(){
      anchorScroll();
    }, 200);
  });

  window.onhashchange = function(e) {
    anchorScroll();
  };

  window.anchorScroll = function() {
    let hash = window.location.hash;
    let $target = $(hash);

    if (!$target.length) {
      return;
    }

    if (!$target.is(':visible')) {
      let collapsibleId = $target.closest('[aria-labelledby]').attr('aria-labelledby');
      if (collapsibleId) {
        $('#' + collapsibleId).click();
      }
    }

    let scrollPosition = $target.offset().top - window.scrollOffset;
    window.scrollTo(0, scrollPosition);
  }

  setListenerForScrollOffsetCalculation('scroll, resize');

})(jQuery);
