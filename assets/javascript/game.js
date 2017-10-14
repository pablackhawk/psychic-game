var computerChoices = ["a", "b", "c", "d", "e","f",
					   "g", "h", "i", "j", "k", "l",
					   "m", "n", "o", "p", "q", "r", "s",
					   "t", "u", "v", "w", "x", "y", "z"];

var correct = 0;
var incorrect = 0;

document.onkeyup = function(event) {
	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random () * computerChoices.length)];


	if(userGuess === computerGuess){
		correct++
	}
	else {
		incorrect++
	}


	var html ="<h1>Make a selection! Guess what I have chosen!</h1>" +
			"<p> You chose: " + userGuess + "</p>" +
			"<p> I chose: " + computerGuess + "</p>" +
			"<p> Correct: " + correct + "</p>" +
			"<p> Incorrect: " + incorrect + "</p>"

		document.querySelector("#game").innerHTML = html;
}
