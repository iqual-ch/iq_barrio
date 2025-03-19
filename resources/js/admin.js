/**
 * @file
 * Global utilities.
 *
 */

(function ($, Drupal) {
  $('[data-style]').each(function(){$(this).attr('style', $(this).data('style') )});

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



  var style = $('#iq-barrio-source').html();
  $('[data-drupal-selector="edit-iq-theme"]').find('input, select').each(function(){
    var find = '{{' + $(this).attr('name') + '}}';
    var re = new RegExp(find, 'g');

    if( colors.hasOwnProperty( $(this).val() ) ){
      style = style.replace(re, hexToRGB(colors[$(this).val()]) );
    }else{
      style = style.replace(re, $(this).val() );
    }

  });

  $('#iq-barrio-target').html( '<style>' + style + '</style>' ) ;



  $('[data-drupal-selector="edit-iq-theme"]').find('input, select').change(function(){

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

    var style = $('#iq-barrio-source').html();
    $('[data-drupal-selector="edit-iq-theme"]').find('input, select').each(function(){
      var find = '{{' + $(this).attr('name') + '}}';
      var re = new RegExp(find, 'g');

      if( colors.hasOwnProperty( $(this).val() ) ){
        style = style.replace(re, hexToRGB(colors[$(this).val()]) );
      }else{
        style = style.replace(re, $(this).val() );
      }

    });

    $('#iq-barrio-target').html( '<style>' + style + '</style>' ) ;
  })

})(jQuery, Drupal);

function toHex(d) {
  return  ("0"+((Number(d)*255).toString(16))).slice(-2).toUpperCase()
}


function hexToRGB(hex) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

      return r + "," + g + "," + b ;
}
