// wait for the DOM to finish loading
var currentState = [];
var currentTurn = 0;
// all code to manipulate the DOM
// goes inside this function
$(document).ready(function() {
console.log("Sanity Check");
$('.box').on('click', function() {
var turnCounter; // var turnCounter = val+1; put the turnCounter variable here so it stays w/in the scope and can access the val
var clickedBox = $(this);
  console.log("Click on " + this.id);
  if (currentTurn%2 == 0) {
    $(this).append("<img src=\"x.png\"></img>");
    turnChange();
  } else {
    $(this).append("<img src=\"o.png\"></img>");
    turnChange();
  }
    $('#output').html(function(i, turnCounter) {
      return turnCounter*1+1;
      })
    }
  );
})

var turnChange = function() {
  for (var i = 0; i <= 8; i++) {
    var currentTurn = currentTurn + 1;
    console.log(currentTurn);
  }
}

///var clickedBox = $(this); use this to keep track of EXACTLY which #'ed box was clicked


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
