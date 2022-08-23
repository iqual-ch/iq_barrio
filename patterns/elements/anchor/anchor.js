

(function ($) {

  window.scollOffset = 0

  // Set scroll offset according to highest fixed element.
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
    window.scollOffset = Math.max(window.scollOffset, $(this).height() + parseInt($(this).css('top')));
  });


  $(document).ready(function () {
    setTimeout(function(){
      anchorScroll();
    }, 200);

    window.onhashchange = function(e) {
      anchorScroll();
    };
  });

  window.anchorScroll = function() {
    let hash = window.location.hash;
    let $target = $(hash);

    if (!$target.is(':visible')) {
      let collapsibleId = $target.closest('[aria-labelledby]').attr('aria-labelledby');
      if (collapsibleId) {
        $('#' + collapsibleId).click();
      }
    }

    let scrollPosition = $target.offset().top - window.scollOffset;
    window.scrollTo(0, scrollPosition);
  }

})(jQuery);
