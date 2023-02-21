'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log((document.querySelector('.number').textContent = secretNumber));

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '⛔ No number...')
    );
  } else if (guess === secretNumber) {
    // When player wins
    console.log(
      (document.querySelector('.message').textContent = '🎉 Correct Number!')
    );
    // changes background to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    // expands numbers width
    document.querySelector('.number').style.width = '30rem';
    // sets the score to highscore
    document.querySelector('.highscore').textContent = score;
  } else if (guess > secretNumber) {
    // When guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too Higher';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥵 Game Over';
    }
    // When player guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥵 Game Over';
    }
  }
});
