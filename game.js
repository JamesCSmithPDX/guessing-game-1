function askQuestion(question, answer) {
  var guess = prompt(question);
  if (guess.toLowerCase() == answer.tolowercase()){
    alert("congratualtions! You are correct.");
    return true;
  } else {
    alert("sorry. Good try, though.");
    return false;
  }
};
askQuestion("Am I from Portland?","yes");
askQuestion("Did I go to UofO?","no");
askQuestion("Am I a Photographer?","yes");
askQuestion("Was I in the Air Force?","no");


document.getElementById("guess").innerHTML = guess;





  var questionOne = "yes";//Am I from Portland?
//   var questionTwo = "no";//Did I go to UofO?
//   var questionThree = "yes";//Am I a Photographer?
//   var questionFour = "no";//Was I in the Air Force?
//   var guessesCorrect = 0;
//
//   console.log("start");
//   console.log(guessesCorrect);
//   //Ask their Name
//   console.log("Ask the user their name.")
//
//   var yourName = prompt("What is your name?");
//   console.log("Ask the user where I'm from.");
//
//   //QuestionOne
//     var guess = prompt("Nice to meet you, "+yourName+"! Answer me this; am I from Portland?");
//       var message = "You picked "+guess+".";
//   if (questionOne == guess.toLowerCase()) {
//     guessesCorrect += 1;
//     message += " That's right, I am from Portland! I have another question for you.";
//   }else {
//     message += " I'm sorry, I'm from Portland.";
//   }
//   console.log("Compare the guess to ours.")
//   alert(message);
//
//   console.log(guessesCorrect);
//
//   //QuestionTwo
//   var guess = prompt("Did I go to UofO?");
//   var message = "You picked "+guess+".";
// if (questionTwo == guess.toLowerCase()) {
//   guessesCorrect += 1;
//   message += " That's right, I went to PSU.";
// }else {
//   message += " I'm sorry, but I went to PSU.";
// }
// console.log("Compare the guess to ours.")
// alert(message);
//
// console.log(guessesCorrect);
//
// //QuestionThree
// var guess = prompt("Am I a photographer?");
// var message = "You picked "+guess+".";
// if (questionThree == guess.toLowerCase()) {
// guessesCorrect += 1;
// message += " That's right, I am from Photographer! I have another question for you.";
// }else {
// message += " I'm sorry no, I'm a photographer.";
// }
// console.log("Compare the guess to ours.")
// alert(message);
//
// console.log(guessesCorrect);
//
// //QuestionFour
// var guess = prompt("Was I in the Air Force?");
// var message = "You picked "+guess+".";
// if (questionFour == guess.toLowerCase()) {
// guessesCorrect += 1;
// message += " That's right! I was in the Navy.";
// }else {
// message += " I'm sorry, no, I was in the Navy.";
// }
// console.log("Compare the guess to ours.")
// alert(message);
//
// console.log(guessesCorrect);
//
// //Final Question
// console.log(guessesCorrect);
// console.log("How many questions did I get correct?");
// var guess = parseInt(prompt("How many questions did I get correct?"));
//
// console.log("Compare the guess to ours.")
// var message = "You picked "+guess+".";
// if (guessesCorrect == guess) {
//   message += ", that's right, good show!";
// }else {
//   message += " Sorry no, but thanks for playing!";
// }
// alert(message);
