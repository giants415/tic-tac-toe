// wait for the DOM to finish loading
var currentState = [-1,-1,-1,
                    -1,-1,-1,
                    -1,-1,-1];
var currentTurn = 0;
var checkHorizontal = function(index){
  var findPlayer = currentState[index];
    console.log("looking for player " + findPlayer);
    if (index == 0 || index == 1 || index == 2) {
        if (findPlayer == currentState[0] && findPlayer == currentState[1] && findPlayer == currentState[2]) {
          return true;
        }
    } else if (index == 3 || index == 4 || index == 5) {
      if (findPlayer == currentState[3] && findPlayer == currentState[4] && findPlayer == currentState[5]) {
        return true;
      }
    } else {
      if (findPlayer == currentState[6] && findPlayer == currentState[7] && findPlayer == currentState[8]) {
        return true;
      }
    }
    return false;
};

var checkVertical = function(index){
  var findPlayer = currentState[index];
    if (index == 0 || index == 3 || index == 6) {
        if (findPlayer == currentState[0] && findPlayer == currentState[3] && findPlayer == currentState[6]) {
          return true;
        }
    } else if (index == 1 || index == 4 || index == 7) {
      if (findPlayer == currentState[1] && findPlayer == currentState[4] && findPlayer == currentState[7]) {
        return true;
      }
    } else {
      if (findPlayer == currentState[2] && findPlayer == currentState[5] && findPlayer == currentState[8]) {
        return true;
      }
    }
    return false;
};

var checkDiagonal = function(index){
  var findPlayer = currentState[index];
    if (index == 0 || index == 4 || index == 8) {
        if (findPlayer == currentState[0] && findPlayer == currentState[4] && findPlayer == currentState[8]) {
          return true;
        }
    } else if (index == 2 || index == 4 || index == 6) {
      if (findPlayer == currentState[2] && findPlayer == currentState[4] && findPlayer == currentState[6]) {
        return true;
      }
    }
  return false;
};

// all code to manipulate the DOM
// goes inside this function
$(document).ready(function() {
console.log("Sanity Check");
$('.box').on('click', function() {
  console.log("Click on " + this.id);
  var index = this.id.replace('box', '');
  currentState[index - 1] = currentTurn;
  if (currentTurn == 0) {
    currentTurn = 1;
    $(this).append("<img class=\"gamePice\" src=\"x.png\"></img>");
  } else {
    currentTurn = 0;
    $(this).append("<img  class=\"gamePice\" src=\"o.png\"></img>");
  }
  $(this).unbind( "click" );
  //now we check for playr victories
  var horizontailWin = checkHorizontal(index-1);
  var vertWin = checkVertical(index-1);
  var diagWin = checkDiagonal(index-1);
  var win = horizontailWin || vertWin || diagWin;
  if(win) {
    alert("We have a winner!");
  }
  console.log("win = " + horizontailWin);
}); //end of click function
}); //end of dom ready


///var clickedBox = $(this); use this to keep track of EXACTLY which #'ed box was clicked

// ORIGINAL TURN COUNTER CODE
// $('#output').html(function(i, turnCounter) {
//   return turnCounter*1+1;
//   })


// $('.box').on("click", turnCounter(){
//   var turnCounter = function(){
//     for(var i = 0; i <= 9; i++){
//       console.log(i);
//     }
//   }
// }


// $('.box').on("click", placeSymbol(){
//
// }


// for (var turnCounter = 0; n <= 9; i++) {
//   if (turnCounter === 0, 2, 4, 6, 8) {
//     console.log("even");
//     $(".glyphicon glyphicon-remove").appendTo("clickedBox").on("click");
//   } else {
//     console.log("odd");
//     $(".glyphicon glyphicon-ok").appendTo("clickedBox").on("click");
//     }
