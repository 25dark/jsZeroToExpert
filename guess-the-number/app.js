// enter a total number
// enter a guess
// if guess !== number
// enter a valid number
// if guess is true
// you entered 4 guesses

let maximum = parseInt(prompt("Enter a number"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your guess");

if (guess > targetNumber) {
  guess = prompt("Too high enter your guess again");
} else {
  guess = prompt("Too low enter your guess again");
}

console.log(targetNumber);
