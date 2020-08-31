/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */



function greet(timeString){
  let timeInt = parseInt(timeString) 
  if (timeInt < 12){
    return(`Good Morning`) }
    else if (timeInt >= 12 && timeInt <= 17) {
      return(`Good Afternoon`)}
      else (timeInt > 17);{
        return(`Good Evening`)
      }

}

function displayMessage(str){
  const greeting = documnet.getElementById('greeting');
  greeting.innerText = str;
}
