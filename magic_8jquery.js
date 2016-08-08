$(document).ready (function(){
  var answers = ["Go for it, buddy!", "Are you joking?????", "I guess so.", "What would Dwayne 'The Rock' Johnson do?", "Go to hell, you hamster!"];

  var userInput;

  var randomIndex = Math.floor(Math.random() * (5 - 0 + 0)+ 0);


  function magicEightBall() {
    userInput = $("userQuestion").val();

    if (userInput != "STOP"){
      randomIndex = Math.floor(Math.random() * (5 - 0 + 0)+ 0);
    }

    $("#magicAnswer").text(answers[randomIndex]);
  }

  $("#btn1").on("click", function(){
    magicEightBall();
    $("#magicAnswer").show();
  })

  $("#toggler").on("click", function(){
    $("#magicAnswer").toggle();
  })
})
