// Prompt the user for the maximum number
let maximum = parseInt(prompt("Enter the maximum number"));

// Validate that the user entered a valid number (not NaN)
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}

// Generate a random target number between 1 and the specified maximum
const targetNumber = Math.floor(Math.random() * maximum) + 1;

// Initialize variables for the user's guess and attempts
let guess = prompt("Enter your first guess");
let attempts = 1;

// Loop until the user guesses the correct number or quits
while (parseInt(guess) !== targetNumber) {
  if (guess === "q") break; // Allow the user to quit by typing 'q'
  attempts++;

  // Provide feedback based on whether the guess is too high or too low
  if (guess > targetNumber) {
    guess = prompt("Too high, enter your guess again");
  } else {
    guess = prompt("Too low, enter your guess again");
  }
}

// Check if the user quit or guessed correctly
if (guess === "q") {
  console.log("Ok, You Quit");
} else {
  console.log("Congratulations, you won!");
  console.log(`You guessed ${attempts} times`);
}

// Display the target number for reference
console.log(`The target number was: ${targetNumber}`); //@smartBeeInc
