//First Question
  var questionOne = "yes";//Am I from Portland?
  var questionTwo = "no";//Did I go to UofO?
  var questionThree = "yes";//Am I a Photographer?
  var questionFour = "no";//Was I in the Air Force?
  var questionFive = "no";//Do I have a son?
  var guessesCorrect = 0;
  console.log("start");
  console.log(guessesCorrect);
  //Ask their Name
  console.log("Ask the user their name.")
  var yourName = prompt("What is your name?");
  console.log("Ask the user where I'm from.");
  //QuestionOne
    var message = "You picked "+guess+".";
    var guess = prompt("Nice to meet you, "+yourName+"! My first question for you is: am I from Portland?");
  if (questionOne == guess.toLowerCase()) {
    guessesCorrect += 1;
    message += " That's right, "+yourName+", I am from Portland! I have another question for you.";
  }else {
    message += " I'm sorry, that's not correct, I'm from Portland.";
  }
  console.log("Compare the guess to ours.")
  alert(message);
  console.log(guessesCorrect);
  //QuestionTwo
  console.log("Ask the user where I went to school.");
  var guess = prompt("Did I go to College at UofO?");
  if (questionTwo == guess.toLowerCase()) {
    guessIsCorrect += 1;
  }
  console.log("Compare the guess to ours.")
  var message = "You picked "+guess+".";
  if (guessIsCorrect) {
    message += " That's right, "+yourName+"! Let's try another question.";
  }else {
    message += " That's right, I went to PSU. Here's another question for you.";
  }
  alert(message);
  console.log(guessIsCorrect);
  //QuestionThree
  console.log("Ask the user what my job is.");
  var guess = prompt("Am I a photographer?");
  if (questionThree == guess.toLowerCase()) {
    guessIsCorrect += 1;
  }
  console.log("Compare the guess to ours.")
  var message = "You picked "+guess+".";
  if (guessIsCorrect) {
    message += ", that's right, "+yourName+"! Good show!";
  }else {
    message += " Sorry, I am a photographer.";
  }
  alert(message);
  console.log(guessIsCorrect);
//QuestionFour
console.log("Ask the user what service I was in.");
var guess = prompt("Was I in the Air Force?");
if (questionFour == guess.toLowerCase()) {
  guessIsCorrect += 1;
}
console.log("Compare the guess to ours.")
var message = "You picked "+guess+".";
if (guessIsCorrect) {
  message += ", that's right, "+yourName+"! Let's try another question.";
}else {
  message += " I'm Sorry, I was in the Navy. We'll try another question!";
}
alert(message);
console.log(guessIsCorrect);
//QuestionFive
console.log("Ask the user if I have a son.");
var guess = prompt("Do I have a son?");
if (questionFive == guess.toLowerCase()) {
  guessIsCorrect += 1;
}
console.log("Compare the guess to ours.")
var message = "You picked "+guess+".";
if (guessIsCorrect) {
  message += ", that's right, "+yourName+"! Good show!";
}else {
  message += " Sorry, I have two daughters. Thanks for playing!";
}
alert(message);
//Final Question
console.log(guessIsCorrect);
console.log("How many questions did I get correct?");
var guess = parseInt(prompt("How many questions did I get correct?"));
if (guess == guessIsCorrect) {
guessIsCorrect == true;
}
console.log("Compare the guess to ours.")
var message = "You picked "+guess+".";
if (guessIsCorrect) {
  message += ", that's right, "+yourName+"! Good show!";
}else {
  message += " Sorry, that's not correct. Thanks for playing!";
}
alert(message);
