// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
console.log("Sanity Check");
$('.box').on('click', function() {
// var turnCounter = val+1; put the turnCounter variable here so it stays w/in the scope and can access the val
  console.log("Click on a box");
    $('#output').html(function(i, val) {
      return val*1+1
      for (var n = 0; n <= 9; i++) {
        if (i === 0, 2, 4, 6, 8){
/// in this section I will make my jQ append child w/ appropriate X or O depending on whether it is odd or even
        }
      }
    }
  );
})
})

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
