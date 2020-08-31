/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  

  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(time)
{
  let time_x = time.split(":")
  let time_o = parseInt(time_x[0],10)
  let minutes = parseInt(time_o[1],10)
  let message = ""
  if (time_o <= 12 ){
    
 message = "Good Morning"
  } else if (time_o > 12 && time_o < 17){
    message = "Good Afternoon"
  } else {
   message = "Good Evening"
  }
  
  return message
  

}

function displayMessage(message)
{
  
  let greet = document.getElementById("greeting")
  greet.innerText = `${message}`
 
}