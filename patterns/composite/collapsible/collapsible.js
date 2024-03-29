(function ($, Drupal) {
  setListenerForScrollOffsetCalculation('scroll, resize');
  function collapsible($stacks) {
    var definition = {
      icons: false,
      heightStyle: 'content',
      collapsible: true,
      active: false,
      activate: function( event, ui ) {
        if(!$.isEmptyObject(ui.newHeader.offset()) && !$.isEmptyObject(ui.newHeader.offset()) && !$.isEmptyObject(ui.newPanel) && !$.isEmptyObject(ui.oldPanel)) {
          if ((ui.oldPanel.outerHeight() > $(window).height()) && (ui.newHeader.offset().top > ui.oldHeader.offset().top))   {
            $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top - window.scrollOffset }, 'slow');
          }
        }
      }
    };

    var first = null;
    var newGroup = true;
    var type = '';
    $stacks.each(function (i, stack) {
      stack = $(stack);
      if (stack.hasClass('iq-processed-collapsible')) {
        return;
      }
      stack.addClass('iq-processed-collapsible');

      if (newGroup) {
        if (first != null) {
          first.accordion(definition);
        }
        first = stack;
        if (!stack.next().hasClass('iq-collapsible')) {
          newGroup = true;
        } else {
          newGroup = false;
        }
      } else {
        first.append(stack.find('.iq-collapsible-title')).append(stack.children('.iq-column'));
        if (!stack.next().hasClass('iq-collapsible')) {
          newGroup = true;
        }
        stack.remove();
      }
    });
    if (first != null) {
      first.accordion(definition);
    }
  }

  function collapsibleTabs($stacks) {

    var definition = {
      fx: { width: 'toggle', duration: 500 },
    };
    var first = null;
    var newGroup = true;
    $stacks.each(function (i, tab) {
      tab = $(tab);
      tab.removeClass('row').removeClass('iq-row');
      if (tab.hasClass('iq-processed-tab')) {
        return;
      }
      tab.addClass('iq-processed-tab');
      var id = tab.children('.iq-column').first().attr('id');

      tab.find('li.iq-tab-title a').attr('href', '#' + id);
      tab.find('li.iq-tab-title a').html(tab.find('li.iq-tab-title a').text());
      tab.find('.iq-tab-text').attr('id', id);

      if (newGroup) {
        if (first != null) {
          first.tabs(definition);
        }
        first = tab;
        if (!tab.next().hasClass('iq-tab-element')) {
          newGroup = true;
        } else {
          newGroup = false;
        }
      } else {
        first.find('.iq-tab-list').append(tab.find('.iq-tab-title')).after(tab.children('.iq-column'));
        if (!tab.next().hasClass('iq-tab-element')) {
          newGroup = true;
        }
        tab.remove();
      }

    });
    if (first != null) {
      first.tabs(definition);
    }

    $('.iq-processed-collapsible').each(function () {
      $(this).children().wrapAll('<div class="col iq-column"></div>')
    });
  }

  Drupal.behaviors.iqual_pattern_collapsible = {
    attach: function (context, settings) {
      if ($(context).find('.pd-live .iq-collapsible[data-type="accordion"]').length) {
        collapsible($(context).find('.pd-live .iq-collapsible[data-type="accordion"]'));
      }
      if ($(context).find('.pd-live .iq-collapsible[data-type="tabs"]').length) {
        collapsibleTabs($(context).find('.pd-live .iq-collapsible[data-type="tabs"]'));
      }
    }
  };

})(jQuery, Drupal);
