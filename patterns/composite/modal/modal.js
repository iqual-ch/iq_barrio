/**
 * @file
 *
 */

 (function ($, Drupal) {
  Drupal.behaviors.iqual_pattern_modal = {
    attach: function (context, settings) {
      $('[data-modal-open-action]').each(function(){

        if ($(this).data('gjs-type') == 'modal') {
          return;
        }

        $(this).find('[data-pd-editmode-toggle-modal]').remove();
        let $self = $(this);
        let action = $(this).data('modal-open-action');
        let removeButton = true;

        let $btnModalClose = $('[data-modal-close]');
        let $modalContent = $('[data-modal-content]');
        let $modalOverlay = $('[data-modal-overlay]');

        $modalContent.children().wrapAll('<div class="wrapper" />')
        $modalContent.append($btnModalClose);
        $modalOverlay.append($modalContent);

        $btnModalClose.click(function(){
          $modalOverlay.removeClass('active');
        })

        switch (action) {
          case 'button':
            removeButton = false;
            $self.find('[data-open-modal]').click(function(){
              $modalOverlay.addClass('active');
            });
            break;
          case 'load':
            $modalOverlay.addClass('active');
            break;
        }

        if (removeButton) {
          $('[data-open-modal]').remove();
        }

        $(this).removeAttr('data-initialized')

      });
    }
  };
})(jQuery, Drupal);
