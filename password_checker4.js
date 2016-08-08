//Purpose: check user credentials with parameters
//Signature: strings --> boolean --> string
//Examples: checkCredentials("vivianlin", "Pa$$word1") --> true --> "Your credentials are valid."
function checkCredentials(userId, password) {
  var identification = (userId != password  && userId.length >= 6 && (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")));
  var pass = (password != "password")
  && (password.includes("!") || password.includes("#") || password.includes("$"))
  && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9"))
  && (password != password.toUpperCase() && password != password.toLowerCase()) ;

  if (identification && pass) {
    $("#isValid").text("Your credentials are valid.");
  } else {
    $("#isValid").text("Your credentials are not valid. Try again.");
  }
//closes yourId()
}


$(document).ready(function(){

$("button").on("click", function(){
  $("li").removeClass("bad");
  // $("ul").removeClass("bad");
  var userId = $("#inputId").val();
  var password = $("#inputPass").val();
  checkCredentials(userId, password);
  $("#inputId").val("");
  $("#inputPass").val("");

  if (userId.includes("!") || userId.includes("#") || userId.includes("$")) {
    $("ul>#listError1").addClass("bad");
  } else {
    $("ul>#listError1").removeClass("bad");
  }

  if(userId.length<=6){
    $("ul>#listError2").addClass("bad");
  } else {
    $("ul>#listError2").removeClass("bad");
  }

  if(!password.includes("!") || !password.includes("#") || !password.includes("$")){
    $("ul>#listError3").addClass("bad");
  }
  if (password.includes("!") || password.includes("#") || password.includes("$")) {
    $("ul>#listError3").removeClass("bad");
  }

  if(password === password.toUpperCase() || password === password.toLowerCase()){
    $("ul>#listError4").addClass("bad");
  } else {
    $("ul>#listError4").removeClass("bad");
  }

  if(!password.includes("0") || !password.includes("1") || !password.includes("2") || !password.includes("3") || !password.includes("4") || !password.includes("5") || !password.includes("6") || !password.includes("7") || !password.includes("8") || !password.includes("9")){
    $("ul>#listError5").addClass("bad");
  }
  
  if(password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9")) {
    $("ul>#listError5").removeClass("bad");
  }

})
//closes document ready
})
