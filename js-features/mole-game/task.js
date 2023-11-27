let deadCount = 0;
let lostCount = 0;
let winCount = 0;
let maxDeadCount = 10;
let maxLostCount = 5;

function getHole(index) {
  return document.getElementById('hole' + (index + 1));
}

function handleHoleClick(event) {
  let clickedHole = event.target;

  if (clickedHole.classList.contains('hole_has-mole')) {
    deadCount++;
    winCount++;
    lostCount = 0;

    document.getElementById('dead').textContent = deadCount;

    if (winCount >= maxDeadCount) {
      alert('Победа!');
      resetGame();
      
    } else {
      scheduleMole();
    }
  } else {
    lostCount++;
    winCount = 0;

    document.getElementById('lost').textContent = lostCount;

    if (lostCount >= maxLostCount) {
      alert('Вы проиграли :(');
      resetGame();
    } else {
      scheduleMole();
    }
  }
}

function scheduleMole() {
  clearTimeout(moleTimeout);
  
  let randomHoleIndex = Math.floor(Math.random() * 9);

  let randomHole = getHole(randomHoleIndex);
  randomHole.classList.add('hole_has-mole');

  moleTimeout = setTimeout(function () {
    randomHole.classList.remove('hole_has-mole');
    lostCount++;
    winCount = 0;

    document.getElementById('lost').textContent = lostCount;

    if (lostCount >= maxLostCount) {
      alert('Вы проиграли :(');
      resetGame();
    } else {
      scheduleMole();
    }
  }, 1000);
}

function resetGame() {
  deadCount = 0;
  lostCount = 0;
  winCount = 0;
  document.getElementById('dead').textContent = 0;
  document.getElementById('lost').textContent = 0;
}

for (let i = 0; i < 9; i++) {
  getHole(i).addEventListener('click', handleHoleClick);
}

scheduleMole();