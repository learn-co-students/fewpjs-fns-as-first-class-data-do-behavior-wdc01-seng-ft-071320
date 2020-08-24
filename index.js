/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(str){
  let new_time = str.split(":")
  let int_time = parseInt(new_time)
  if (int_time < 12){
    return "Good Morning";
  } 
  else if (int_time >= 12 && int_time <= 17){
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(str){
  const greeting = document.getElementById('greeting');
  greeting.innerText = str;
}


