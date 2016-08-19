// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
console.log("Sanity Check");
$('.box').on('click', function() {
  console.log("Click on a box");
    $('#output').html(function(i, val) {
      return val*1+1
    }
  );
})
})



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
