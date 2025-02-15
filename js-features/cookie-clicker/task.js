let cookie = document.getElementById("cookie");

let clickCounter = 0;
let lastClickTime = null;
let totalClicks = 0;

function updateCookie() {
  cookie.width = (clickCounter % 2 === 0) ? 220 : 180;

  let currentTime = new Date().getTime();
  let timeSinceLastClick = (lastClickTime !== null) ? (currentTime - lastClickTime) / 1000 : 0;
  let clickRate = (timeSinceLastClick !== 0) ? (1 / timeSinceLastClick).toFixed(2) : 0;

  document.getElementById("clicker__click-rate").textContent = ": " + clickRate;

  lastClickTime = currentTime;
}

function handleClick() {
  clickCounter++;
  totalClicks++;
  document.getElementById("clicker__counter").textContent = clickCounter;
  updateCookie();
}

cookie.onclick = handleClick;

setInterval(function () {
  document.getElementById("clicker__total-clicks").textContent = "Total Clicks: " + totalClicks;
}, 1000);
