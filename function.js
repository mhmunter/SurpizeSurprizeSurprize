

var startButton = document.getElementById("startButton")
var timerEl = document.getElementById('countdown');

// var timer = document.querySelector('h3')
// var timeLeft = 5;





function countdown() {
  var timeLeft = 5;

   var timeInterval = setInterval(function() {
    
    timerEl.textContent =timeLeft;
    timeLeft--;
    if(timeLeft  == 0){
      clearInterval(timeInterval);
      
    }
    
  } ,1000 );
}


document.getElementById("startButton").addEventListener("click" , countdown);



















// function countdown() {
//   var timeLeft = 5;

//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else  (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } 
//   }, 1000);
// }

// function startFunction(){
//     console.log("started.")
//     startButton.classList.add("hide")
// document.getElementById('countdown');

// }

// startButton.addEventListener("click", startFunction);


// function countdown() {
  

//   // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function() {
//     var timeLeft = 5;
//     timerEl.textContent =timeLeft;
//     timeLeft--;
//     if(timeLeft  === 0){
//       clearInterval(timeInterval);
//       displayMessage();
//     }
//   } ,1000 );
// }
// countdown();

// // function countdown(){
// //     var timeLeft = 10;
// //     var timeInterval = setInterval(function() {
// //         timerEl.textContent =timeLeft;
// //         startTime--;
// //         if(startTime  === 0){
// //           clearInterval(timeInterval);
// //         //   displayMessage();
// //         console.log("times up!!!")
// //         }
// //       } ,1000 );

// // }
// // function countdown(){
// //     var timeLeft = timer;
// //     var timeInterval =  function setInterval(){
// // timeLeft--;
// // timerEl.textContent = timeLeft;
// // if (timeLeft === 0) {
// //     console.log('Game Over man!')
// // }1000;
// //     } 
// // }




