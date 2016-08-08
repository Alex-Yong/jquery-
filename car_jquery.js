//Create a function that creates car objects which have a make, model year, and color.
$(document).ready(function(){
  var x;

  function set()
  {   x = cars($("#inputField1").val(), $("#inputField2").val(), $("#inputField3").val(), $("#inputField4").val());
  // document.getElementById("outputText").innerHTML=x.getCars();
  $("#outputText1").text(x.getCars()+ " this car has a max speed of 85");
}
var speed;

function cars(a,b,c,d){
  //variable that creates the cars speed
  speed=0;
  //identify make, model, year, color
  return{
    make: a,
    model: b,
    year: c,
    color: d,
    // create function that returns as a string to tell user the car's information
    getCars: function(){return this.make+" "+ this.model +" "+ this.year +" "+ this.color;},
    //function to return the speed
    getSpeed: function(){return speed;},
    //function to set the acceleration
    accelerate: function(){
      return speed=speed+10;
    },
    //function to set the decrease in speed
    brake: function(){
      speed=speed-3;
      console.log(speed);
    },
    brake2: function(){
      speed= speed -1;
      console.log(speed);
    },
    accelerate2: function(){
      speed = ++speed
    }
  }
}

function string(a){
  return a.make+" "+ a.model +" "+ a.year +" "+ a.color;
}


//function that allows car to accelerate to 70mph
function acceleration(a){
  while(a.getSpeed()<70){
    a.accelerate();}
    return a.getSpeed();
  }
  //function that breaks exactly at 0
  function brake(a){
    if(a.getSpeed()>=15){
      a.brake();
    };
    if((a.getSpeed()<15) && (a.getSpeed()>0)){
      a.brake2();
      console.log(a.getSpeed());
    }
    $("#outputText2").text(a.getSpeed());
  }


  //function that stops acceleration at 85
  function acceleration2(a){
    if(a.getSpeed()<=70){
      a.accelerate();
    };
    if((a.getSpeed()>70) && (a.getSpeed()<85)){
      a.accelerate2();
      console.log(a.getSpeed());
    }
    $("#outputText2").text(a.getSpeed());
  }

  //emergency break that doesn't go over half the max speed
  function eBrake(){
    rando = Math.floor(Math.random()*((x.getSpeed()/2)-0+1))+0;
  }

  $("#btn1").on("click", function(){
    set();
  })

  $("#btn2").on("click", function(){
    acceleration2(x);
    if(x.getSpeed()===85){
      $("#btn2").hide();
    };
  })

  $("#btn3").on("click", function(){
    brake(x);
    if(x.getSpeed()===0){
      $("#btn3").hide();
    }
  })


  $("#btn4").on("click", function(){
    eBrake();
    $("#outputText3").text(rando);
  })


  var rando;
  //closes ready function
})
