$(document).ready(() => {
  $("#button1").click(function(){
    $("#paragraph1").prepend("THE BEGINNING")
  })

  $("#button2").click(function(){
    $("#paragraph1").append("THE END")
  })

  $("#button3").click(function(){
    var newPara = $("<p></p>").text("NEW PARAGRAPH!")
    $("#paragraph1").prepend(newPara)
  })

  $("#button4").click(function(){
    $("#paragraph1").remove();
  })

  $("#button5").click(function(){
    $("p").remove()
  })

  $("#button6").click(function(){
    $("#paragraph5").text("ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn")
  })

})
