var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's your name? ");
console.log("Welcome " + userName + " DO YOU KNOW Anurag? ");
var score = 0;
var questions = [{
  question: "What i like to do most ? ",
  answer: "sleeping"
},
{
  question: "What is my age ? ",
  answer: "23"
},
{
  question: "Which company Anurag currently work ? ",
  answer: "verifone"}
  ,
 {
  question: "Do Anurag like BLR ? ",
  answer: "no"
},
{
  question: "What is my nickname? ",
  answer: "krishna"
}
];
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right");
    score = score + 1;
  }
  else {
    console.log("Wrong");
    console.log("the right answer is: ",answer);
  }
  console.log("Current score: " + score);
  console.log("-----------------");
}

function playGame(){
var userWillPlay=readlineSync.question("Do you want to play Now?(y/n) ");
if(userWillPlay==="y"){
for (var i = 0; i < questions.length; i = i + 1) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  
}
  console.log("YAY ! you Scored: ", score);
  if(score>=2){
    console.log("Passed Level 1, lets meet my true friend.")
  }
}
else{
  console.log("Get back after some time.")
}
  
}
playGame();



