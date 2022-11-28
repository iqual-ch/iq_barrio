

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

  window.setDefaultScrollOffset = function() {
    window.scrollOffset = 0
    $('*').filter(function () {
      if (!$(this).is(':visible')) {
        return false;
      }
      if ($(this).css('position') == 'fixed') {
        return true;
      }
      if ($(this).hasClass('iq-anchornavigation') && $(this).data('position') == 'sticky' && $(this).data('align') == 'top') {
        return true;
      }
    }).each(function(){
      window.scrollOffset = Math.max(window.scrollOffset, $(this).height() + parseInt($(this).css('top')));
    });

    $(document).trigger('after-offset-calculation');
  }

  setDefaultScrollOffset();

})(jQuery);
