// Get the cookie element
let cookie = document.getElementById("cookie");

// Initialize variables
let clickCounter = 0;
let lastClickTime = null;
let totalClicks = 0;

// Function to update the cookie size and click rate
function updateCookie() {
  // Alternate between increasing and decreasing the cookie size
  cookie.width = (clickCounter % 2 === 0) ? 220 : 180;

  // Update click rate
  let currentTime = new Date().getTime();
  let timeSinceLastClick = (lastClickTime !== null) ? (currentTime - lastClickTime) / 1000 : 0;
  let clickRate = (timeSinceLastClick !== 0) ? (1 / timeSinceLastClick).toFixed(2) : 0;

  // Display click rate
  document.getElementById("clicker__click-rate").textContent = "Click Rate: " + clickRate + " clicks per second";

  // Update last click time
  lastClickTime = currentTime;
}

// Function to handle cookie clicks
function handleClick() {
  clickCounter++;
  totalClicks++;
  document.getElementById("clicker__counter").textContent = clickCounter; // Update total clicks
  updateCookie();
}

// Attach click event to the cookie
cookie.onclick = handleClick;

// Function to update total clicks every second
setInterval(function () {
  document.getElementById("clicker__total-clicks").textContent = "Total Clicks: " + totalClicks;
}, 1000);
