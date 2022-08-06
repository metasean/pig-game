let currentPlayer = 0;

const players = [
  {                // 0
    value: 0,
    score: 0,
    current: '#player-one-current',
    total: '#player-one-total',
  },
  {                 // 1
    value: 0,
    score: 0,
    current: '#player-two-current',
    total: '#player-two-total',
  }
]


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function rollDie() {
  let value = getRandomInt(1,6);
  value = value === 1 ? 0 : value;
  document.querySelector(players[currentPlayer].current).innerHTML = value;
  document.querySelector('.die').innerHTML = value;
  players[currentPlayer].value = value;
  if (value === 0) {
    hold();
    return;
  }
  return value;
}

function hold() {
  const currentDie = players[currentPlayer].value;
  const currentScore = players[currentPlayer].score;
  const newScore = currentDie + currentScore;
  players[currentPlayer].score = newScore;
  document.querySelector(players[currentPlayer].total).innerHTML = newScore;
  currentPlayer = currentPlayer === 0
                ? 1
                : 0;
  document.querySelector("#currentPlayer").innerHTML = currentPlayer + 1;
}

function reset () {
  document.querySelector(players[0].total).innerHTML = 0;
  document.querySelector(players[1].total).innerHTML = 0;
  document.querySelector(players[0].current).innerHTML = 0;
  document.querySelector(players[1].current).innerHTML = 0;
  players[0].score = 0;
  players[1].score = 0;
  players[0].value = 0;
  players[1].value = 0;

}