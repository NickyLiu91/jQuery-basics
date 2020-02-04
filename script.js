$(document).ready(() => {
  $("button").click(() => {console.log("hi")})

  $("#button2").click(function(){
    $("p").hide()
  })

  $("#button3").click(function(){
    $("p").show()
  })

  $("#button4").click(function(){
    $("p").toggle()
  })

})
