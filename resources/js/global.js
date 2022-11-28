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

})(jQuery, Drupal);
