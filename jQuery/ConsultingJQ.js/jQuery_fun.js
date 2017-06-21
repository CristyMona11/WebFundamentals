
$(document).ready(function(){

  $('#snow').click(function(){
    $('#snow').hide();
  });

  $('h2').click(function(){
    $('h2').toggle(function(){

    });
  });

  $( 'h3' ).click(function() {
    $( '#clouds' ).slideDown( "fast", function() {
      // Animation complete.
    });
  });

  $( 'h1' ).click(function(){
    $( "span" ).show();
      // Animation complete.
    });

    $( 'h3' ).click(function() {
      $( '#clouds' ).slideUp( "slow", function() {
        // Animation complete.
      });
    });

    $( 'h3' ).click(function() {
      $( 'blockquote' ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });

    $( '#lmidt' ).click(function() {
      $( '.middle' ).fadeOut( "slow", function(){
        // Animation complete.
      });
    });

    $( '#lmidt' ).click(function() {
      $( '.middle' ).fadeIn( "slow", function(){
        // Animation complete.
      });
    });

    $( "#sam" ).after( "/savage" );
    $( "#sam" ).before( "Lord" );
    $( "p:last" ).addClass( "selected highlight" );
    $( "h1" ).prepend( "<p>KING</p>" );

    $( "#midbut" ).click(function() {
  var htmlString = $( this ).html();
  $( this ).text( htmlString );
    });

    $( "input" )
  .change(function() {
    var $input = $( this );
    $( ".desc").html( ".attr( 'submit' ): <b>" + $input.attr( "submit" ) + "</b><br>" +
      ".prop( 'submit' ): <b>" + $input.prop( "submit" ) + "</b><br>" +
      ".is( ':submit' ): <b>" + $input.is( ":submit" ) + "</b>" );
  })
  .change();

var myText = $('#china').text();
alert(myText);

$('#lefty').click(function(){
$(this).val("pizza");
});

$("h3").click(function(){
$("h3").data("favorite","cheeseburger");
console.log($("h3").data("favorite"));
$("h3").text($("h3").data("favorite"));
});


});
