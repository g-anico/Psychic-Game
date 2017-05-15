//I need the computer to generate a random letter
//User to pick a letter
//Determine win (if same, get one point) or keep guessing
//Capture those choices and display them
//Reset game after 9 incorrect guesses


var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letGuesses = [];

var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	letGuesses = [];


	computerGuess = options[Math.floor(Math.random() * options.length)];
	console.log(computerGuess);
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + 9;
	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + [];

	
}
	

var computerGuess = options[Math.floor(Math.random() * options.length)];
	console.log(computerGuess);


document.onkeyup = function() {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	guessesLeft--;
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
	letGuesses.push(userGuess);
	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + letGuesses.join(", ");
	

	if(guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Losses: " + losses;
		console.log("You might not be psychic");
		alert("You might not be psychic...")
		reset ();
	}

		else if (guessesLeft > 0) {

			if (userGuess == computerGuess){
				wins++;
				document.querySelector("#wins").innerHTML = "Wins: " + wins;
				console.log("You must be psychic");
				alert("You must be psychic!");
				reset ();
			}

			
		}
}				
	
