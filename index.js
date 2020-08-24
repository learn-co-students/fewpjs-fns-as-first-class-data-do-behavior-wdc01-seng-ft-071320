/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  splitString = string.split(":")
  int = parseInt(splitString[0])
  if (int < 12) {return "Good Morning"}
  if (12 < int < 17) {return "Good Afternoon"}
  else {return "Good Evening"}
}


function displayMessage(string) {
  let id = document.querySelector('#greeting')
  id.innerText = string
}
