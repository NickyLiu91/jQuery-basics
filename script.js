$(document).ready(() => {

  // $("button").click(function(){console.log("hi")})

  // $("#button2").click(function(){
  //   $("p").hide()
  // })
  //
  // $("#button3").click(function(){
  //   $("p").show()
  // })
  //
  // $("#button4").click(function(){
  //   $("p").toggle()
  // })

  // $("#button1").click(() => {console.log($("#paragraph5").text())})
  //
  // $("#button2").click(function(){
  //     $("#paragraph5").text("ph'nglui mglw'nafh Cthulhu R'lyeh   wgah'nagl fhtagn")
  // })
  //
  // $("#button3").click(function(){
  //   console.log($("#paragraph1").attr('class'))
  // })
  //
  // $("#button4").click(function(){
  //   console.log($("#paragraph5").attr('class'))
  //   $("#paragraph5").attr('class', 'classX');
  //   console.log($("#paragraph5").attr('class'))
  // })

  // $("#button1").click(function(){
  //   $("#paragraph1").prepend("THE BEGINNING")
  // })
  //
  // $("#button2").click(function(){
  //   $("#paragraph1").append("THE END")
  // })
  //
  // $("#button3").click(function(){
  //   var newPara = $("<p></p>").text("NEW PARAGRAPH!")
  //   $("#paragraph1").prepend(newPara)
  // })
  //
  // $("#button4").click(function(){
  //   $("#paragraph1").remove();
  // })
  //
  // $("#button5").click(function(){
  //   $("p").remove()
  // })
  //
  // $("#button6").click(function(){
  //   $("#paragraph1").empty();
  // })


  $("#button1").click(function(){
      console.log($("#paragraph5").attr('class'))
      $("#paragraph5").addClass('classX');
      console.log($("#paragraph5").attr('class'))
  })

  $("#button2").click(function(){
    console.log($("#paragraph5").attr('class'))
    $("#paragraph5").removeClass('classX');
    console.log($("#paragraph5").attr('class'))
  })
  $("#button3").click(function(){
    $("#paragraph1").css('color', 'red');
  })

  $("#button4").click(function(){
    $("#paragraph2").css({'color': 'red', 'background-color': 'blue'});
  })

})
