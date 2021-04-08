
$(document).ready(function () {
  
  alert("ready to start?")
  // Here we establish the "targetNumber" (set to 50 in this example).s
  var targetNumber = Math.floor((Math.random() * 120) + 19);
  console.log(targetNumber);

  var wins = 0
  var losses = 0
  // Here we set the "number-to-guess" header to match the "targetNumber".
  // Eventually this will allow us to change the HTML to match the value in the JavaScript.
  $("#number-to-guess").text(targetNumber);
  $("#winselem").text(wins);
  $("#losseselem").text(losses);


  var blue = Math.floor((Math.random() * 12) + 1);
  var green = Math.floor((Math.random() * 12) + 1);
  var red = Math.floor((Math.random() * 12) + 1);
  var finalnum = 0



  $("#blue").on("click", function () {
    finalnum += blue
  })
  $("#red").on("click", function () {
    finalnum += green
  })
  $("#green").on("click", function () {
    finalnum += red
  })


  $(".crystal-image").on("click", function () {

    $("#guessednum").text(finalnum);



    if (finalnum == targetNumber) {
      wins += 1;
      $("#winselem").text(wins)
      alert(" u won");

    }
    else if (finalnum > targetNumber) {
      losses += 1;
      $("#losseselem").text(losses)
      alert(" u lost");


    }
    /*if (finalnum == targetNumber || finalnum > targetNumber) {
      reset();
    }*/
  });
$("#reset").on("click", function () {
    reset()
  })

  console.log(blue);
  console.log(red);
  console.log(green);
  function reset() {
   targetNumber= Math.floor((Math.random() * 120) + 19);
   finalnum=0;
   console.log( targetNumber);
   $("#number-to-guess").empty().append(targetNumber);
   $("#guessednum").empty().text(finalnum)

  } 


 


})




