

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
  // end timer message-------------------
var delay = 6000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Times up partner!');
}, delay);
}


document.getElementById("startButton").addEventListener("click" , countdown);

var buttonNext = document.querySelector("#startButton");
console.log("yupe");




// answer arry chec
// var answer = [answerAe1.value, answerBe1.value, answersCe1, answerDe1.value];




// next button event lsitener if checked = 










// var taskItemEl = document.createElement("li");
// taskItemEl.textContent = "hello";
// tasksToDoEl.appendChild(taskItemEl);
// taskItemEl.className = "task-item";

// var buttonEl = document.querySelector("#save-task");
// var tasksToDoEl = document.querySelector("#tasks-to-do");

// buttonEl.addEventListener("click", function() {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
// });


/*{ <button id="btnToClick">Click Me</button>
<script>
    "use strict";
    (function() {
        var btnToClick = document.getElementById('btnToClick');

        console.log(btnToClick); // prints <button id="btnToClick">Click Me</button>
    })();
</script> }*/


// var mainHeading = document.getElementById('main-heading');
// mainHeading.innerHTML = "Hello Codeup!";







var answers = [
  {Question: "Question 1: What is the best show on TV?",
      options:{
          A: 'A) BattleStar',
          B: 'B) Daily Show',
          C: 'C) Old Reruns',
          D: 'D) Golden Girls'
  }},
  {Question: "Question 2: Who had the strangest empire?",
      options:{
          A: 'A) Rome',
          B: 'B) Mongolia',
          C: 'C) Kush',
          D: 'D) Aztec'

      }},
  {Question: "Question 3: Who wrote my favorite books?",
      options:{
        A: 'A) Preston',
        B: 'B) King',
        C: 'C) Koontz',
        D: 'D) William'
  }},
  {Question: "Question 4: Life According to Mr.Munter",
  options:{
    A: 'A) Life is good.',
    B: 'B) Life is bad.',
    C: 'C) life is ok.',
    D: 'D) life is MEh.'

      }},
  {Question: "Question 5: Who wrote my favorite books?",
  options:{
    A: 'A) Preston',
    B: 'B) King',
    C: 'C) Koontz',
    D: 'D) William'
      }

  }


  ];








