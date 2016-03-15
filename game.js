//First Question
  var questionOne = "yes";//Am I from Portland?
  var questionTwo = "no";//Did I go to UofO?
  var questionThree = "yes";//Am I a Photographer?
  var questionFour = "no";//Was I in the Air Force?
  //var questionFive = "no";//Do I have a son?
  var guessesCorrect = 0;
  console.log("start");
  console.log(guessesCorrect);
  //Ask their Name
  console.log("Ask the user their name.")
  var yourName = prompt("What is your name?");
  console.log("Ask the user where I'm from.");
  //QuestionOne
  //This questiion is working correctly and I need to recode my other questions to reflect these changes.
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
  var message = "You picked "+guess+".";
  var guess = prompt("Did I go to UofO?");
if (questionTwo == guess.toLowerCase()) {
  guessesCorrect += 1;
  message += " That's right, "+yourName+", I didn't go to UofO, I went to PSU.";
}else {
  message += " I'm sorry, that's not correct, I went to PSU.";
}
console.log("Compare the guess to ours.")
alert(message);
console.log(guessesCorrect);
//QuestionThree
var message = "You picked "+guess+".";
var guess = prompt("Am I a photographer?");
if (questionThree == guess.toLowerCase()) {
guessesCorrect += 1;
message += " That's right, "+yourName+", I am from Photographer! I have another question for you.";
}else {
message += " I'm sorry, that's not correct, I'm a photographer.";
}
console.log("Compare the guess to ours.")
alert(message);
console.log(guessesCorrect);
//QuestionFour
var message = "You picked "+guess+".";
var guess = prompt("Was I in the Air Force?");
if (questionFour == guess.toLowerCase()) {
guessesCorrect += 1;
message += " That's right, "+yourName+", I wasn't! I was in the Navy.";
}else {
message += " I'm sorry, that's not correct, I was in the Navy.";
}
console.log("Compare the guess to ours.")
alert(message);
console.log(guessesCorrect);
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
