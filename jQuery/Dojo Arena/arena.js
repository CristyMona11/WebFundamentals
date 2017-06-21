$(document).ready(function(){

  $('#dojob').hover(function(){
    $('body').css("background-image","url('dojo.jpg')");
    $('#dojob').click(function(){
      $('body').css("background-image","url('dojo.jpg')");
      $('#buttb').hide();
      $('#playblock').show()
    });
  });
  $('#beachb').hover(function(){
    $('body').css('background-image','url("beach.jpg")');
    $('#beachb').click(function(){
      $('body').css("background-image","url('beach.jpg')");
      $('#buttb').hide();
      $('#playblock').show()
    });
  });
  $('#earthb').hover(function(){
    $('body').css('background-image','url("earth.jpg")');
    $('#earthb').click(function(){
      $('body').css("background-image","url('earth.jpg')");
      $('#buttb').hide();
      $('#playblock').show()
    });
  });

  $('#matrixb').hover(function(){
      $('body').css('background-image','url("matrix.jpg")');
      $('#matrixb').click(function(){
        $('body').css("background-image","url('matrix.jpg')");
        $('#buttb').hide();
        $('#playblock').show()
      });
    });

  $('#snowb').hover(function(){
    $('body').css('background-image','url("snow.jpg")');
    $('#snowb').click(function(){
      $('body').css("background-image","url('snow.jpg')");
      $('#buttb').hide();
      $('#playblock').show()
    });
  });
  $('#forestb').hover(function(){
      $('body').css('background-image','url("forest.jpg")');
      $('#forestb').click(function(){
        $('body').css("background-image","url('forest.jpg')");
        $('#buttb').hide();
        $('#player_select').show()
      });
    });
$(document).on('change','#second',function(){
  var pic = $('#second').val()+'.png'; //url.png
  $('#right').css("background-image", "url("+pic+")");
  console.log(pic);
    });
    $(document).on('change','#first',function(){
      var pic = $('#first').val()+'.png'; //url.png
      $('#left').css("background-image", "url("+pic+")");
      console.log(pic);

  });
});
