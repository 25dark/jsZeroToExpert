// enter a total number
// enter a guess
// if guess !== number
// enter a valid number
// if guess is true
// you entered 4 guesses

let maximum = parseInt(prompt("Enter the maximum number"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess");

while (parseInt(guess) !== targetNumber) {
  if (guess > targetNumber) {
    guess = prompt("Too high enter your guess again");
  } else {
    guess = prompt("Too low enter your guess again");
  }
  if (guess === targetNumber) {
    console.log(`you guessed ${guess} times`);
  }
}

console.log(targetNumber);
