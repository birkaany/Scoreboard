let homeScore = document.querySelector("#homeScore");
let awayScore = document.querySelector("#awayScore");

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
