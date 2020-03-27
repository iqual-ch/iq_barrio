(function ($, Drupal) {
  $('.iq-gallery').each(function(){
    $(this).find('a').attr('data-gallery', 'gallery-' + $(this).attr('id') );
    $(document).on('click', '.iq-gallery [data-gallery="gallery-' + $(this).attr('id') + '"]', function (e) {
      e.preventDefault();
      $(this).ekkoLightbox();
    });
  })
})(jQuery, Drupal);
