$(function(){
    $( '#button-menu' ).click(function() {
      $( '.header-menu' ).toggleClass( "header-red" );
    });
});
$(function(){
    $( '.flag1' ).hover(function() {
      $( '.span1' ).toggleClass( "span-red" );
    });
});
$(function(){
    $( '.flag2' ).hover(function() {
      $( '.span2' ).toggleClass( "span-red" );
    });
});
$(function(){
    $( '.flag3' ).hover(function() {
      $( '.span3' ).toggleClass( "span-red" );
    });
});
$(function(){
    $( '.estimate-button' ).click(function() {
      $( '.estimate' ).toggleClass( "off on" );
      $( '.instant' ).toggleClass( "on off" );
    });
});
