let initialTimeInSeconds = 120; 
  
  function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return hours + ":" + minutes + ":" + remainingSeconds;
  }

  function updateTimer() {
    document.getElementById("timer").innerText = formatTime(initialTimeInSeconds);

    if (initialTimeInSeconds === 0) {
      alert("Вы победили в конкурсе!");
      window.location.href = "https://w.forfun.com/fetch/c4/c493aac67877288476b0fc52d55f55cf.jpeg";
    } else {
      initialTimeInSeconds-=1;
      setTimeout(updateTimer, 1000);
    }
  }

  window.onload = function() {
    updateTimer();
  };