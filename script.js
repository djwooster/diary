'use strict';

// event listeners

// * down below * event handler is the function passed into the addEventListener function as a value (since functions are simply values)

let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNum);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number :)';
  }

  // when user wins
  else if (guess === secretNum) {
    // document.querySelector('.message').textContent =
    //   'Amazing job, you guessed correct!';
    displayMessage('Amazing job, you guessed correct!');

    document.querySelector('.number').textContent = secretNum;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('div.number').style.width = '50%';
    document.querySelector('div.number').style.borderRadius = '100px';
    document.querySelector('div.number').style.color = 'black';
    document.querySelector('div.number').style.backgroundColor = 'white';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNum
          ? 'You guessed too high! ⬇️'
          : 'You guessed too low! ⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  // if guess is high
  // else if (guess > secretNum) {
  //   document.querySelector('.message').textContent = 'You guessed too high! ⬇️';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }
  // // if guess is low
  // else if (guess < secretNum) {
  //   document.querySelector('.message').textContent = 'You guessed too low! ⬆️';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }

  // if score reaches zero
  if (score === 0) {
    document.querySelector('.label-score').textContent = 'Game over! 🍄';
  }
});

// restart button event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNum = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = 20;

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Keep guessing :) ';
  console.log(secretNum);

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('div.number').textContent = '?';
  document.querySelector('div.number').style.width = '15rem';
});

document.querySelector('.test').addEventListener('click', function () {
  const testNum = Math.floor(Math.random() * 5);
  console.log(testNum);
  document.querySelector('.between').textContent = testNum;
});
