'use strict';

;( function( $, window, document, undefined )
{
  $( '.inputfile' ).each( function()
  {
    var $input   = $( this ),
      $label   = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( 'span' ).html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
    .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });
})( jQuery, window, document );
function reviewCarousel(){
  if($('#review-carousel').length){
    $('#review-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots: false,
      responsive:{
        0:{
          items:1
        },
        767:{
          items:2
        }
      }
    })
  }
}
function newsCarousel(){
  if($('#news-carousel').length){
    $('#news-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots: false,
      responsive:{
        0:{
          items:1
        },
        767:{
          items:2
        }
      }
    })
  }
}
reviewCarousel()
newsCarousel()

$(document).ready(function () {
  $.fn.equivalent = function (){
    var $blocks = $(this),
        maxH    = $blocks.eq(0).height(); 
    $blocks.each(function(){
        maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
    });

    $blocks.height(maxH + 15);
  }
  $('.height-block').equivalent();
  $('.info__text').equivalent();
});

var tab = ['#tab1','#tab2','#tab3'];

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
    for(var i in arr){   
       $(arr[i]).hide();     
    }
    $(e).show();       
  }
}

$('.tab a').click(function(e) {
  $('.tab a').removeClass('active');
  $(this).addClass('active')
});


$(function() {
  $('.office-header').click(function(e) {
    var text = $(this).next();
    if(text.is(':hidden')){
      $(this).addClass('active')
      text.slideDown(350)
    }
    else{
      $(this).removeClass('active')
      text.slideUp(350)
    }
  });
});