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

        let modalId = $(this).attr('id');

        $(this).find('[data-pd-editmode-toggle-modal]').remove();

        let $btnModalOpen = $(this).find('[data-open-modal]');
        $btnModalOpen.insertAfter(this);

        let $self = $(this);
        let action = $(this).data('modal-open-action');
        let removeButton = true;

        let $btnModalClose = $('[data-modal-close]');
        let $modalContent = $('[data-modal-content]');
        let $modalOverlay = $('[data-modal-overlay]');

        $modalContent.children().wrapAll('<div class="wrapper" />')
        $modalContent.append($btnModalClose);
        $modalOverlay.append($modalContent);
        $(this).append($modalOverlay);

        $('body').append(this);

        $btnModalClose.click(function(){
          $modalOverlay.removeClass('active');
        });

        switch (action) {
          case 'button':
            removeButton = false;
            $btnModalOpen.click(function(){
              $modalOverlay.addClass('active');
            });
            break;

          case 'load':
            let triggeredModals = [];
            if (sessionStorage.getItem('iq_modal_opened')) {
              triggeredModals = sessionStorage.getItem('iq_modal_opened').split(';');
            }

            if (triggeredModals.includes(modalId)) {
              break;
            }
            $modalOverlay.addClass('active');
            triggeredModals.push(modalId);
            sessionStorage.setItem('iq_modal_opened', triggeredModals.join(';'));
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
