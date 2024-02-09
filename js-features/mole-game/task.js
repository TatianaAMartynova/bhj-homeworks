(() => {
  let deadCount = 0;
  let lostCount = 0;

  const getHole = (index) => document.getElementById(`hole${index}`),
    updateScore = () => {
      deadCount++;
      document.getElementById('dead').textContent = deadCount;

      if (deadCount >= 10) {
        alert('Победа!');
        resetGame();
      }
    },
    updateLosses = () => {
      lostCount++;
      document.getElementById('lost').textContent = lostCount;

      if (lostCount >= 5) {
        alert('Вы проиграли :(');
        resetGame();
      }
    },
    handleHoleClick = (event) => {
      const clickedHole = event.target;
      if (clickedHole.classList.contains('hole_has-mole')) {
        updateScore();
      } else {
        updateLosses();
      }
    },
    resetGame = () => {
      deadCount = 0;
      lostCount = 0;
      document.getElementById('dead').textContent = 0;
      document.getElementById('lost').textContent = 0;
      setTimeout(() => {
        next();
      }, 1000);
    };

  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', handleHoleClick);
  }

  next();
})();
