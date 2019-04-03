$(document).ready(function(){

    // VARIABLES

    var score = "";
    var points = 0;

    //method that generates a random number between 19 and 120
    var randomNumDisplay = Math.floor((Math.random() * 101) + 19);
        $("#randomNumber").append(randomNumDisplay);

    //method that assigns a hidden value of 1-12 behind crystals
    $("#crystal-1").click(function(){       //click crystal to start
        var hiddenValue = Math.floor((Math.random() * 11) + 1);
        $("#score").append(hiddenValue);
    })  
  });
  