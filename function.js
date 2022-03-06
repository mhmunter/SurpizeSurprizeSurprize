var answers = [
  {
    question: "Question 1: What is the best show on TV?",
    options: [
      {A: 'A) BattleStar', correct: false },
      {B: 'B) Simpsons', correct: false },
      {C: 'C) Old Reruns', correct: false },
      {D: 'D) Golden Girls', correct: true }
    ]
  },
  {
    question: "Question 2: Which empire conquered the most land?",
    options: [
      {A: 'A) Rome', correct: false },
      {B: 'B) Mongolia', correct: true },
      {C: 'C) Kush', correct: false },
      {D: 'D) Aztec', correct: false },
    ]
  },
  {
    question: "Question 3: Who wrote the most recent book?",
    options: [
      {A: 'A) Preston', correct: true },
      {B: 'B) McCollen', correct: false },
      {C: 'C) Koontz', correct: false },
      {D: 'D) Williams', correct: false },
    ]
  },
  {
    question: "Question 4: Life According to Mr.Munter",
    options: [
      {A: 'A) Life is Good.', correct: false },
      {B: 'B) Life is Bad.', correct: false },
      {C: 'C) life is Ok.', correct: false },
      {D: 'D) life is Meh.', correct: true }
    ]
  },
  
];




var startButton = document.getElementById("startButton")
var timerEl = document.getElementById('countdown');

var questionText = document.getElementById('question')
var answerAtest = document.getElementById('AnswerA')
var answerBtest = document.getElementById('AnswerB')
var answerCtest = document.getElementById('AnswerC')
var answerDtest = document.getElementById('AnswerD')

// var timer = document.querySelector('h3')
// var timeLeft = 5;


function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {

    timerEl.textContent = timeLeft;
    timeLeft--;
    if (timeLeft == 0) {
      clearInterval(timeInterval);

    }

  }, 1000);
  // end timer message-------------------
  var delay = 6000; // delay time in milliseconds

  var timeoutId = setTimeout(function () {
    alert('Times up partner!');
  }, delay);



}





// var runTest = function(){
// // console.log('runnig test');
// // var questionCounter = 0;
// // questionCounter ++;
// // questionText.textContent = answers[0].Question;
// // answerAtest.textContent = answers[0].options[0].A;
// // answerBtest.textContent = answers[0].options[1].B;
// // answerCtest.textContent = answers[0].options[2].C;
// // answerDtest.textContent = answers[0].options[3].D;
// for (let i = 0; i < answers.length; i++){
//   var getoption = answers[i].options
//   questionText.textContent = answers[0].question;
//   for (j=0; j<getoption.length; j++){
// answerAtest.textContent = answers[0].options[0].A;
// answerBtest.textContent = answers[0].options[1].B;
// answerCtest.textContent = answers[0].options[2].C;
// answerDtest.textContent = answers[0].options[3].D;
//       // document.getElementById("nextButton").addEventListener("click", () =>{
//       //   return;
        
//       // });
      
//   }

// }

// }

// document.getElementById("nextButton").addEventListener("click",runTest)

var i = 0;
function main() {
  var getoption = answers[i].options
  // console.log(answers[i])
  for (var j=0; j<getoption.length;j++){
    questionText.textContent = answers[i].question;
    answerAtest.textContent = answers[i].options[0].A;
    answerBtest.textContent = answers[i].options[1].B;
    answerCtest.textContent = answers[i].options[2].C;
    answerDtest.textContent = answers[i].options[3].D;
  }
  if (i>answers.length){
    i = 0;
   
  }
  i++;
}


// var Style = function color(){

// }
// document.getElementsByClassName('container').addEventListener("click", addCss)

document.getElementById("startButton").addEventListener("click", countdown);

// document.getElementById("nextButton").addEventListener("click", runTest);

// <p>Click below button to loop inner loop each ( 5 ) times for outer loop.</p>
// <button onclick="myFunction()">Click Here</button>
// <p id="did"></p>
// <script>
// function myFunction() {
// var text = "";
// var i;
// var j;
// for (i = 0; i < 5; i++) {
// for (j = 0; j < 2; j++) {
// text += "The number is i = " + i + " and j = " + j + "<br>";
// }
// }
// document.getElementById("did").innerHTML = text;
// }






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

// answer arry chec
// var answer = [answerAe1.value, answerBe1.value, answersCe1, answerDe1.value];




// next button event lsitener if checked = 