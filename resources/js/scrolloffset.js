/**
 * @file
 * Global utilities.
 *
 */

 window.scrollOffset = 0;

 (function ($, Drupal) {

  // Define scroll offset, based on fixed elements.
  window.setDefaultScrollOffset = function() {
    $('header *').filter(function () {
      if (!$(this).visible()) {
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

  window.scrollOffsetCalculationListeners = [];
  window.setListenerForScrollOffsetCalculation = function (events) {
    events.split(',').forEach(function(event){
      event = event.trim();
      if (!window.scrollOffsetCalculationListeners.includes(event)) {
        window.scrollOffsetCalculationListeners.push(event);
        $(document).on(event, function(){
          clearTimeout(window.scrollOffsetCalculationTimeout);
          window.scrollOffsetCalculationTimeout = setTimeout(function(){
            setDefaultScrollOffset()
          }, 100);
        });
      }
    });
  }

})(jQuery, Drupal);
