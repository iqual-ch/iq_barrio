(function ($) {
  $(document).ready(function () {
    var elements = $('.iqbm-live-block .iqbm-document');
    addFileIcon(elements);
  });

  $(window).on('iqbm-init-after', function () {
    var elements = $('.iqbm-document');
    addFileIcon(elements);
  });

  function addFileIcon(elements) {
    elements.each(function (i, el) {
      el = $(el);
      var link = el.find('>a').attr('href');
      if (link.indexOf('.pdf') != -1) {
        el.addClass('file file--mime-application-pdf file--application-pdf');
      } else {
        el.addClass('file file--mime-x-office-document file--x-office-document');
      }
    });
  }

})(jQuery);
