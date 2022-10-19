let scoreBoard = document.querySelector("#scoreboard");
let homeScore = document.querySelector("#homeScore");
let awayScore = document.querySelector("#awayScore");
const endGame = document.querySelector("#endGame");
const newGame = document.querySelector("#newGame");
let resultBoard = document.querySelector("#resultPage");
let result = document.querySelector("#result");

var home = 0;
var away = 0;

const sumNumber = (field, count) => {
  if (field == "home") {
    home = home + count;
    homeScore.textContent = home;
  }
  if (field == "away") {
    away = away + count;
    awayScore.textContent = away;
  }
};

endGame.addEventListener("click", () => {
  scoreBoard.classList.add("scoreBoardOff");
  resultBoard.classList.remove("scoreBoardOn");
  if (home > away) {
    result.innerHTML = `Home won! Score: ${home} - ${away}`;
  } else if (home == away) {
    result.innerHTML = `It's a tie! Score: ${home} - ${away}`;
  } else {
    result.innerHTML = `Away won! Score: ${home} - ${away}`;
  }
});

newGame.addEventListener("click", () => {
  scoreBoard.classList.remove("scoreBoardOff");
  resultBoard.classList.add("scoreBoardOn");
  home = 0;
  away = 0;
  homeScore.textContent = home;
  awayScore.textContent = away;
});
