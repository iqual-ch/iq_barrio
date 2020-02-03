(function ($, Drupal) {
  $(document).on('click', '.iq-gallery [data-toggle="lightbox-gallery"]', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
})(jQuery, Drupal);
