$(document).ready(() => {
  $("#button1").click(function(){
    $("#paragraph1").prepend("THE BEGINNING")
  })

  $("#button2").click(function(){
    $("#paragraph1").append("THE END")
  })

  $("#button3").click(function(){
    $("p").show()
  })

  $("#button4").click(function(){
    $("p").toggle()
  })

  $("#button5").click(() => {console.log($("#paragraph5").text())})

  $("#button6").click(function(){
    $("#paragraph5").text("ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn")
  })

})
