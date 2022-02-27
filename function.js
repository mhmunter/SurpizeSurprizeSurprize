var startButton = document.getElementById("startButton")
var timerEl = document.getElementById('countdown');

// var timer = document.querySelector('h3')



function startFunction(){
    console.log("started.")
    startButton.classList.add("hide")
// document.getElementById('countdown');

}

startButton.addEventListener("click", startFunction);

// function countdown(){
//     var timeLeft = 10;
//     var timeInterval = setInterval(function() {
//         timerEl.textContent =timeLeft;
//         startTime--;
//         if(startTime  === 0){
//           clearInterval(timeInterval);
//         //   displayMessage();
//         console.log("times up!!!")
//         }
//       } ,1000 );

// }
// function countdown(){
//     var timeLeft = timer;
//     var timeInterval =  function setInterval(){
// timeLeft--;
// timerEl.textContent = timeLeft;
// if (timeLeft === 0) {
//     console.log('Game Over man!')
// }1000;
//     } 
// }




function countdown() {
    var timeLeft = 5;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      timerEl.textContent =timeLeft;
      timeLeft--;
      if(timeLeft  === 0){
        clearInterval(timeInterval);
        displayMessage();
      }
    } ,1000 );
  }



