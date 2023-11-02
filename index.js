// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(slideshow, 3000);
}

//clock

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call the function immediately to show the time on page load
updateClock();
