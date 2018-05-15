$( document ).ready(function(){
  
 // Selects a random number to be shown at the start of the game, between 19-120
  
  var Random=Math.floor(Math.random()*101+19)
  
  $('#randomNumber').text(Random);

  //Select a random number to each animal between 1 - 12
  var number1= Math.floor(Math.random()*11+1)
  var number2= Math.floor(Math.random()*11+1)
  var number3= Math.floor(Math.random()*11+1)
  var number4= Math.floor(Math.random()*11+1)
 

  var Totalscore= 0; 
  var wins= 0;
  var losses = 0;
 
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      number1= Math.floor(Math.random()*11+1);
      number2= Math.floor(Math.random()*11+1);
      number3= Math.floor(Math.random()*11+1);
      number4= Math.floor(Math.random()*11+1);
      Totalscore= 0;
      $('#finalTotal').text(Totalscore);
      } 
//Addes wins to total
function winWin(){
alert("Yeah, you won, time to be happy!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//Addes the lost games to total
function loser(){
alert ("You Lost, don't cry you have another opportunity!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//Click animals, points and conditions to win or to lost
  $('#babyBlue').on ('click', function(){
    Totalscore = Totalscore + number1;
    console.log("New Totalscore= " + Totalscore);
    $('#finalTotal').text(Totalscore); 
          
        if (Totalscore == Random){
          winWin();
        }
        else if ( Totalscore > Random){
          loser();
        }   
  })  
  $('#babyGreen').on ('click', function(){
    Totalscore = Totalscore + number2;
    console.log("New Totalscore= " + Totalscore);
    $('#finalTotal').text(Totalscore); 
        if (Totalscore == Random){
          winWin();
        }
        else if ( Totalscore > Random){
          loser();
        } 
  })  
  $('#babyRed').on ('click', function(){
    Totalscore = Totalscore + number3;
    console.log("New Totalscore= " + Totalscore);
    $('#finalTotal').text(Totalscore);

          if (Totalscore == Random){
          winWin();
        }
        else if ( Totalscore > Random){
          loser();
        } 
  })  
  $('#babyYellow').on ('click', function(){
    Totalscore = Totalscore + number4;
    console.log("New Totalscore= " + Totalscore);
    $('#finalTotal').text(Totalscore); 
      
          if (Totalscore == Random){
          winWin();
        }
        else if ( Totalscore > Random){
          loser();
        }
  });   
}); 