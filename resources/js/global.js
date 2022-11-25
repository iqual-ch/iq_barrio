/**
 * @file
 * Global utilities.
 *
 */

(function ($, Drupal) {
  $('.nav-mobile, .nav-sidebar, .nav-main').find('[data-toggle="dropdown"]').click(function(e){
    location.href = $(this).attr('href');
  });

  $('.nav-main').find('.menu-item--expanded').hover(
    function() {
      $( this ).children( '.dropdown-menu' ).addClass( 'show' );
      $( this ).children( '[aria-expanded]' ).attr( 'aria-expanded' ,'true' );
    }, function() {
      $( this ).children( '.dropdown-menu' ).removeClass( 'show' );
      $( this ).children( '[aria-expanded]' ).attr( 'aria-expanded' ,'false' );
    }
  );

  // Define scroll offset, based on fixed elements.
  window.setDefaultScrollOffset = function() {
    window.scrollOffset = 0;
    $('header *').filter(function () {
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

})(jQuery, Drupal);
