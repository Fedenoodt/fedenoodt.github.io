let timeDisplay = document.getElementById("time");


function refreshTime() {
  let dateString = new Date().toLocaleString("en-US", {timeZone: "America/Buenos_Aires"});
  let formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);
