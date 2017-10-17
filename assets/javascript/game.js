var computerChoices = ["a", "b", "c", "d", "e","f",
					   "g", "h", "i", "j", "k", "l",
					   "m", "n", "o", "p", "q", "r", "s",
					   "t", "u", "v", "w", "x", "y", "z"];

var incorrectGuess = []

var correct = 0;
var incorrect = 0;
var choices = 10;

alert("Make a selection! Guess what I have chosen!");

function gameReset() {
	choices = 10;
	correct = 0;
	incorrect = 0;
	incorrectGuess = [];
	alert("Try Again");
}


document.onkeyup = function(event) {
	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	

	if(choices > 1){
		if(userGuess === computerGuess){
			correct++;
			incorrectGuess = [];
		}
		else {
			choices--;
			incorrect++;
			incorrectGuess.push(userGuess);
		}
	}

	else {
		gameReset();
		}


	var html ="<h1>Make a selection! Guess what I have chosen!</h1>" +
			"<p> You chose: " + userGuess + "</p>" +
			"<p> I chose: " + computerGuess + "</p>" +
			"<p> Correct: " + correct + "</p>" +
			"<p> Incorrect: " + incorrect + "</p>" +
			"<p> Chances left: " + choices + "</p>" +
			"<p> Your past guesses: " + incorrectGuess + "</p>"

		document.querySelector("#game").innerHTML = html;
}
