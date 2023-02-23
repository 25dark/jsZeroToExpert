'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const setBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const setWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  // When there is no input
  if (!guess) {
    // console.log(
    //   (document.querySelector('.message').textContent = '⛔ No number...')
    // );
    displayMessage('⛔ No number...');
  } else if (guess === secretNumber) {
    // When player wins
    // console.log(
    //   (document.querySelector('.message').textContent = '🎉 Correct Number!')
    // );
    displayMessage('🎉 Correct Number!');

    displaySecretNumber(secretNumber);

    // changes background to green
    setBackgroundColor('#60b347');

    // expands numbers width
    setWidth('30rem');

    // sets the score to highscore
    if (score > highscore) {
      highscore = score;
      setHighScore(highscore);
    }
  } else if (guess !== secretNumber) {
    // When guess is wrong
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too Higher' : '📉 Too Low';
      score--;

      setScore(score);
    } else {
      displayMessage('🥵 Game Over');

      setScore(0);
    }
    // When player guess is too low
  }

  // else if (guess > secretNumber) {
  //   // When guess is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Higher';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥵 Game Over';
  //   }
  //   // When player guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥵 Game Over';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  setScore(score);
  setWidth('15rem');
  setBackgroundColor('#222');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
