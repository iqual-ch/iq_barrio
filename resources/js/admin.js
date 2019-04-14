/**
 * @file
 * Global utilities.
 *
 */

(function ($, Drupal) {
  jQuery('[data-style]').each(function(){jQuery(this).attr('style', jQuery(this).data('style') )});

  var colors = {
    'primary' : $('[name="color_primary"]').val(),
    'secondary' : $('[name="color_secondary"]').val(),
    'tertiary' : $('[name="color_tertiary"]').val(),
    'quaternary' : $('[name="color_quaternary"]').val(),
    'grey1' : $('[name="color_grey1"]').val(),
    'grey2' : $('[name="color_grey2"]').val(),
    'grey3' : $('[name="color_grey3"]').val(),
    'grey4' : $('[name="color_grey4"]').val(),
    'grey5' : $('[name="color_grey5"]').val(),
    'black' : $('[name="color_black"]').val(),
    'white' : $('[name="color_white"]').val(),
  }


  var style = jQuery('#iq-barrio-source').html();
  jQuery('[data-drupal-selector="edit-iq-theme"]').find('input, select').each(function(){
    var find = '{{' + jQuery(this).attr('name') + '}}';
    var re = new RegExp(find, 'g');
    if( colors.hasOwnProperty( jQuery(this).val() ) ){
      style = style.replace(re, colors[jQuery(this).val()] );
    }else{
      style = style.replace(re, jQuery(this).val() );
    }
    
  });

  jQuery('#iq-barrio-target').html( '<style>' + style + '</style>' ) ;



  jQuery('[data-drupal-selector="edit-iq-theme"]').find('input, select').change(function(){

    var colors = {
      'primary' : $('[name="color_primary"]').val(),
      'secondary' : $('[name="color_secondary"]').val(),
      'tertiary' : $('[name="color_tertiary"]').val(),
      'quaternary' : $('[name="color_quaternary"]').val(),
      'grey1' : $('[name="color_grey1"]').val(),
      'grey2' : $('[name="color_grey2"]').val(),
      'grey3' : $('[name="color_grey3"]').val(),
      'grey4' : $('[name="color_grey4"]').val(),
      'grey5' : $('[name="color_grey5"]').val(),
      'black' : $('[name="color_black"]').val(),
      'white' : $('[name="color_white"]').val(),
    }

    var style = jQuery('#iq-barrio-source').html();
    jQuery('[data-drupal-selector="edit-iq-theme"]').find('input, select').each(function(){
      var find = '{{' + jQuery(this).attr('name') + '}}';
      var re = new RegExp(find, 'g');
      if( colors.hasOwnProperty( jQuery(this).val() ) ){
        style = style.replace(re, colors[jQuery(this).val()] );
      }else{
        style = style.replace(re, jQuery(this).val() );
      }
    });

    jQuery('#iq-barrio-target').html( '<style>' + style + '</style>' ) ;
  })



})(jQuery, Drupal);
