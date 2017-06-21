$(document).ready(function(){
$()

$("p").hide();

var poke;
  for(var i=1; i<152;i++){
    poke="<img id= '"+ i +"' src='http://pokeapi.co/media/img/" + i + ".png'>";
      $(".poke").append(poke);
}

  $('img').click(function(res){
    var id = $(this).attr("id");

    $.get("http://pokeapi.co/api/v1/pokemon/"+ id  ,function(res) {
      console.log()
              $("#happiness").empty();
              $("#weight").empty();
              $("#speed").empty();
              $("#deck").empty();
              $("#pic").empty();
                    $("#deck").append(res.name);
                    $("#happiness").append(res.happiness);
                    $("#weight").append(res.weight);
                    $("#speed").append(res.height);
                    $("#pic").append("<img src='http://pokeapi.co/media/img/" + id + ".png'>")
                    $("p").show();
                  },
         "json");

  });

});
