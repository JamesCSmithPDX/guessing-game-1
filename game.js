//First Question
  var questionOne = "Yes";//Am I from Portland?
  var questionTwo = "No";//Did I go to UofO?
  var questionThree = "Yes";//Am I a Photographer?
  var questionFour = "No";//Was I in the Air Force?
  var questionFive = "No";//Do I have a son?
  var guessIsCorrect = false;
  //Ask their Name
  console.log("Ask the user their name.")
  var yourName = prompt("What is your name?");
  console.log("Ask the user where I'm from.");
  //QuestionOne
  var guess = prompt("Nice to meet you, "+yourName+"! My first question for you is: am I from Portland?");
  if (questionOne == guess) {
    guessIsCorrect = true;
  }
  console.log("Compare the guess to ours.")
  var message = "You picked "+guess+".";
  if (guessIsCorrect) {
    message += " That's right, "+yourName+", I am from Portland! I have another question for you.";
  }else {
    message += " I'm sorry, that's not correct, I'm from Portland.";
  }
  alert(message);
  //QuestionTwo
  console.log("Ask the user where I went to school.");
  var guess = prompt("Did I go to College at UofO?");
  if (questionTwo == guess) {
    guessIsCorrect = false;
  }
  console.log("Compare the guess to ours.")
  var message = "You picked "+guess+".";
  if (guessIsCorrect) {
    message += " That's right, "+yourName+"! Let's try another question.";
  }else {
    message += " That's right, I went to PSU. Here's another question for you.";
  }
  alert(message);
  //QuestionThree
  console.log("Ask the user what my job is.");
  var guess = prompt("Am I a photographer?");
  if (questionThree == guess) {
    guessIsCorrect = true;
  }
  console.log("Compare the guess to ours.")
  var message = "You picked "+guess+".";
  if (guessIsCorrect) {
    message += ", that's right, "+yourName+"! Good show!";
  }else {
    message += " Sorry, I am a photographer. Thanks for playing!";
  }
  alert(message);
//QuestionFour
console.log("Ask the user what service I was in.");
var guess = prompt("Was I in the Air Force?");
if (questionFour == guess) {
  guessIsCorrect = false;
}
console.log("Compare the guess to ours.")
var message = "You picked "+guess+".";
if (guessIsCorrect) {
  message += ", that's right, "+yourName+"! Let's try another question.";
}else {
  message += " I'm Sorry, I was in the Navy. We'll try another question!";
}
alert(message);
//QuestionFive
console.log("Ask the user if I have a son.");
var guess = prompt("Do I have a son?");
if (questionFive == guess) {
  guessIsCorrect = false;
}
console.log("Compare the guess to ours.")
var message = "You picked "+guess+".";
if (guessIsCorrect) {
  message += ", that's right, "+yourName+"! Good show!";
}else {
  message += " Sorry, I have two daughters. Thanks for playing!";
}
alert(message);
