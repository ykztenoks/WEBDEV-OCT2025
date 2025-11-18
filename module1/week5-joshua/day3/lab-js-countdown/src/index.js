const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let intervalId = null; // Variable to store the interval

const startButtonElement = document.querySelector("#start-btn");
const timeElement = document.querySelector("#time");
const toastElement = document.querySelector("#toast");
const closeToastElement = document.querySelector("#close-toast");
const toastMessageElement = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button
startButtonElement.addEventListener("click", () => {
  startButtonElement.disabled = true;
  remainingTime = 10;
  startCountdown();
});
closeToastElement.addEventListener("click", () => {
  console.log("close toast clicked");
  toastElement.classList.remove("show");
});
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  intervalId = setInterval(() => {
    //this subracts one from the variable in JS
    remainingTime--;
    //update the DOM to agree with new variable value
    timeElement.innerText = remainingTime;

    if (remainingTime === 0) {
      //stop the timer
      clearInterval(intervalId);
      // call the show toast function to show the blue box
      showToast("Lift off! 🚀");
      //make the start button clickable again
      startButtonElement.disabled = false;
    } else if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.classList.add("show");
  //we update the message on the DOM to match the message given to the function
  toastMessageElement.innerText = message;
  //after 3 seconds remove the class of show
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);
}
