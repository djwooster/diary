'use strict';
console.log(document.querySelector('.message').textContent);

// assigning an html element's text content a new value
/*
document.querySelector('.message').textContent = 'This is super dope!';

document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 8;

if (document.querySelector('.number').textContent < 10) {
  console.log('yo im gettin this shit for real!');
} else {
  console.log('nah fam, keep trying');
}

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// event listeners

// * down below * event handler is the function passed into the addEventListener function as a value (since functions are simply values)

const secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);
let score = 20;

document.querySelector('.number').textContent = secretNum;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number :)';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent =
      'Amazing job, you guessed correct!';
  } else if (guess > secretNum) {
    document.querySelector('.message').textContent = 'You guessed too high! ⬇️';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNum) {
    document.querySelector('.message').textContent = 'You guessed too low! ⬆️';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score === 0) {
    document.querySelector('.label-score').textContent = 'Game over! 🍄';
  }
});
