(function ($, Drupal) {
  $(document).ready(function () {
    $('.iq-slidergallery').each(function () {
      $(this).find('a').attr('data-gallery', 'gallery-' + $(this).attr('id'));
      $(document).on('click', '.iq-slidergallery [data-gallery="gallery-' + $(this).attr('id') + '"]', function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
      });

      var config = {
        items: 1,
        loop: true,
        nav: false,
      };

      if ($(this).data('arrow-left') && $(this).data('arrow-right')) {
        config.navText = ["<i class=\"" + $(this).data('arrow-left') + "\"></i>", "<i class=\"" + $(this).data('arrow-right') + "\"></i>"];
        config.nav = true;
        if ($(this).data('speed')) {
          config.navSpeed = 1000;
        }
      }

      $(this).owlCarousel(config);

    });


  });
})(jQuery, Drupal);
