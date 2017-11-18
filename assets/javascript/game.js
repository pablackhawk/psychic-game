
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f',
					   'g', 'h', 'i', 'j', 'k', 'l',
					   'm', 'n', 'o', 'p', 'q', 'r', 's',
					   't', 'u', 'v', 'w', 'x', 'y', 'z']

var incorrectGuess = []

var correct = 0
var incorrect = 0
var choices = 10

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
console.log(computerGuess)

function pickyPick () {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  console.log(computerGuess)
};

alert('Make a selection! Guess what I have chosen!')

function gameReset () {
  choices = 10
  correct = 0
  incorrect = 0
  incorrectGuess = []
  pickyPick()
  alert('Try Again')
};

function victory () {
  choices = 10
  incorrect = 0
  incorrectGuess = []
  alert('Play Again?')
  pickyPick()
};

document.onkeyup = function (event) {
  var userGuess = event.key

  if (choices > 1) {
    if(choices === incorrectGuess[]){
      alert('Choose another letter')
    } else if (userGuess === computerGuess) {
      correct++
      incorrectGuess = []
      alert('Congratulations! You chose what I picked, the letter ' + computerGuess)
      victory()
    } else {
      choices--
      incorrect++
      incorrectGuess.push(userGuess)
    }
  }	else {
    gameReset()
  }

  var html =
			'<p> You chose: ' + userGuess + '</p>' +
			'<p> Correct: ' + correct + '</p>' +
			'<p> Incorrect: ' + incorrect + '</p>' +
			'<p> Chances left: ' + choices + '</p>' +
			'<p> Your past guesses: ' + incorrectGuess + '</p>'

  document.querySelector('#game').innerHTML = html
}
