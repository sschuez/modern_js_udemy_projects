/* GAME FUNCTION:

-Player must guess a number between a min and a max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify player of the correct answer if they loose
-Let player choose to play again
*/

// Game values
let min = 2,
		max = 12,
		winningNum = getRandomNum(min, max),
		guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
			minNum = document.querySelector('.min-num'),
			maxNum = document.querySelector('.max-num'),
			guessBtn = document.querySelector('#guess-btn'),
			guessInput = document.querySelector('#guess-input'),
			message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
})

// Listen for guess
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);
	console.log(guess);
	// validate
	if(isNaN(guess) || guess < min || guess > max){
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	// Check if won
	if(guess === winningNum){
		// Game over - won

		// // Disable input
		// guessInput.disabled = true;
		// // Change border color
		// guessInput.style.borderColor = 'green';
		// // Set message
		// setMessage(`${winningNum} is correct! YOU WIN!`, 'green');

		gameOver(true, `${winningNum} is correct! YOU WIN!`);
	} else {
		// Wrong number
		guessesLeft -= 1;

		// 
		if(guessesLeft === 0){
			// Game over - lost
			
			// // Disable input
			// guessInput.disabled = true;
			// // Change border color
			// guessInput.style.borderColor = 'red';
			// // Set message
			// setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
			gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
		} else {
			// Game continues - answer wrong

			// Change border color
			guessInput.style.borderColor = 'orange';

			// Clear Input
			guessInput.value = '';

			setMessage(`${guess} is not correct, ${guessesLeft} guesses Left`, 'orange');  
		}
	}
});

// Game over
function gameOver(won, msg){
	let color;
	won === true ? color = 'green' : color = 'red';

	// Disable input
	guessInput.disabled = true;
	// Change border color
	guessInput.style.borderColor = color;
	// Change text color
	message.style.color = color;
	// Set message
	setMessage(msg);

	// Play again?
	guessBtn.value = 'Play Again?';
	guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
	return Math.floor(Math.random()*(max - min + 1) + min);
}

// Set message
function setMessage(msg, color){
	message.style.color = color;
	message.textContent = msg;
}