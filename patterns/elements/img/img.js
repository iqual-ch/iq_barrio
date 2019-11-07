(function ($, Drupal) {
  function image($images) {
    $images.each(function (i, a) {
      $(a).attr('href', $(a).find('img').attr('src'));
      $(a).on('click', function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
      });
    })
  };
  Drupal.behaviors.iqual_pattern_image = {
    attach: function (context, settings) {
      image($(context)
        .find('.pd-live .iq-image a[data-toggle="lightbox-single-image"]')
      );
    }
  };
})(jQuery, Drupal);
