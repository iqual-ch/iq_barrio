(function ($, Drupal) {

    $('[data-toggle-search]').click(function (e) {
      $(this).parents('.iq-search').toggleClass('active');
      $(this).parents('.iq-search').find('input').focus();
    });

    $('.iq-search').find('input').blur(function(){
        $(this).parents('.iq-search').toggleClass('active');
    });
  })(jQuery, Drupal);
  