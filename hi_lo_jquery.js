$(document).ready(function(){
  var userName;
  var randomNumber = Math.floor(Math.random() * (101 - 1 + 1)+ 1);
  console.log(randomNumber);
  var userGuess;
  var userAttempts = 0;

  // submit button for name
  $("#btn1").on("click", function(){
    userName = $("#inputFieldName").val();
    $("#outputName").text("Hello, " + userName + "!");
  })

  // function that checks if number is too high or low
  function checkNumber() {
    userGuess = $("#inputFieldNumber").val();
    console.log(userGuess);
    // If user's guess is not an integer, then execute the following:
    if (parseInt(userGuess,10) != userGuess) {
      $("#notification").text("You can only use numbers. Guess again.");
      // userAttempts = userAttempts + 1;
      $("#inputFieldNumber").val("");
      $("#notification").addClass("wrong");
    }

    // If user's guess is higher than computer's choice, then execute the following:
    if (parseInt(userGuess) > randomNumber) {
      $("#notification").text("Your number is too high. Guess again.");
      userAttempts = userAttempts + 1;
      $("#inputFieldNumber").val("");
      $("#notification").addClass("wrong");
    }

    // If user's guess is lower than computer's choice, then execute the following:
    if (parseInt(userGuess) < randomNumber) {
      $("#notification").text("Your number is too low. Guess again.");
      userAttempts = userAttempts + 1;
      $("#inputFieldNumber").val("");
      $("#notification").addClass("wrong");
    }

    // If user's guess is correct, execute the following:
    if (parseInt(userGuess) == randomNumber) {
      $("#notification").text("Your answer is correct! Good job, " + userName + "!");
      $("#inputFieldNumber").val("");
      $("#notification").addClass("right");
    }

    // If user attempts to guess more than 5 times, execute the following:
    if (userAttempts>5) {
      $("#notification").text("Loooooser!");
      $("#inputFieldNumber").val("");
      $("#btn2").disabled = "true";
    }

    $("#attemptsLeft").text("You have " + (5 - userAttempts) + " tries left.");
    // End function bracket.
  }

  // submit button for check number
  $("#btn2").on("click", function(){
    checkNumber();
    $("#tries").hide();
    $("#attemptsLeft").show();
    $("#notification").show();
  })

  // reset the check number portion of the game 
  $("#btn3").on("click", function(){
    $("#tries").show();
    randomNumber = Math.floor(Math.random() * (101 - 1 + 1)+ 1);
    console.log(randomNumber);
    userAttempts = 0;
    $("#attemptsLeft").hide();
    $("#notification").hide();
  })

})
