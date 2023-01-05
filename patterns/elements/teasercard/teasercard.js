(function ($, Drupal) {

  $(document).ready(function () {

    // Set Teaser card margin-bottom if the Teaser Style is not Square image
    $('.iq-teasercard .iq-teasercard__row:not(.square-image)')
      .closest('.iq-column')
      .css('margin-bottom', 50);

    // This code finds all Square Image Teaser Cards and sets the margin-bottom
    // if they are NOT in a row that has nogutter properties selected.
    // Find Teasercards with the Square Image teaser style
    $('.iq-teasercard .square-image')

      // Find the closest column traversing up through its ancestors
      .closest('.iq-column')

      // Get the column's parent only if it does not have the nogutter classes
      .parent('.iq-row:not([class*="nogutter-"])')

      // Find the row's child column again
      .children('.iq-column')

      // Set the margin-bottom for all selected columns
      .each(function () {
        $(this).css('margin-bottom', 50);
      });

  });

})(jQuery, Drupal);
