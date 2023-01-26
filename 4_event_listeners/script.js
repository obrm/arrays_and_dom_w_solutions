// Exercise 1: Add a click event listener to the first box element
// that logs "First box clicked" to the console when clicked
// Make the callback function that passed in to event listener a named function

function logBoxClick() {
  console.log("First box clicked");
}

let firstBox = document.querySelector(".box");
firstBox.addEventListener("click", logBoxClick);


// Exercise 2: Add a click event listener to the container element
// that logs "Container clicked" to the console when clicked
// Click on the first box and see which event listener is called first
// Make the callback functions that are being passed in to event listeners named function

let container = document.getElementById("container");
firstBox = document.querySelector(".box");

function logContainerClick() {
  console.log("Container clicked");
}

container.addEventListener("click", logContainerClick);
firstBox.addEventListener("click", logBoxClick);

// Exercise 3: Add the following code inside the first box event listener function:
// event.stopPropagation();
// Click on the first box and see which event listener is called
// Make the callback function that is being passed in to event listener of the Container a named function
// and the function that is being passed in to event listener of the first box an anonyms function

container = document.getElementById("container");
firstBox = document.querySelector(".box");

container.addEventListener("click", logContainerClick);
firstBox.addEventListener("click", function (event) {
  console.log("First box clicked");
  event.stopPropagation();
});


// Exercise 4: Remove the event.stopPropagation() method in the first box element
// Make the event listener run only once

firstBox = document.querySelector(".box");

firstBox.addEventListener("click", logBoxClick, { once: true });


// Exercise 5: Use the removeEventListener method to remove the event listener from the first box element
firstBox = document.querySelector(".box");

firstBox.addEventListener("click", logBoxClick);

// Remove the event listener after 2 seconds
firstBox.removeEventListener("click", logBoxClick);


// Exercise 6: Add a click event listener to the container element
// that logs the background-color of the clicked box to the console
// Use event delegation to listen for clicks on all .box elements
// Make the callback function that passed in to event listener a named function

container = document.getElementById("container");
function logBoxColorClick(event) {
  if (event.target.classList.contains("box")) {
    console.log(event.target.style.backgroundColor);
  }
}

container.addEventListener("click", logBoxColorClick);

