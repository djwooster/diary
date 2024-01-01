"use strict";

// * down below * event handler is the function passed into the .addEventListener function as a value (since functions are simply values)

let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNum);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a number :)";
  }

  // when user wins
  else if (guess === secretNum) {
    displayMessage("Amazing job, you guessed correct!");
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("div.number").style.width = "50%";
    document.querySelector("div.number").style.borderRadius = "100px";
    document.querySelector("div.number").style.color = "black";
    document.querySelector("div.number").style.backgroundColor = "white";

    // high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }

    // when guess is incorrect -- ternary operator to determine result and deliver it as a value
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(
        guess > secretNum
          ? "You guessed too high! ⬇️"
          : "You guessed too low! ⬆️"
      );
      score--;
      document.querySelector(".score").textContent = score;
    }
  }

  // if score reaches zero
  if (score === 0) {
    document.querySelector(".label-score").textContent = "Game over! 🍄";
  }
});

// restart button event
document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  secretNum = Math.floor(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = 20;

  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "";
  console.log(secretNum);

  document.querySelector("body").style.backgroundColor = "";
  document.querySelector("div.number").style.width = "";
  document.querySelector("div.number").style.borderRadius = "";
  document.querySelector("div.number").style.color = "";
  document.querySelector("div.number").style.backgroundColor = "";
  document.querySelector(".number").textContent = "?";
});
