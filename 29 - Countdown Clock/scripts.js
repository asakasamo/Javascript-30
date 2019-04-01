let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
   clearInterval(countdown);

   const now = Date.now();
   const then = now + seconds * 1000;
   displayTimeLeft(seconds);
   displayEndTime(then);

   countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      // check if we should stop the interval
      if (secondsLeft < 0) {
         clearInterval(countdown);
         return;
      }

      // display it
      displayTimeLeft(secondsLeft);
   }, 1000);
}

function padZero(mins) {
   if (mins < 10) {
      return "0" + mins;
   }
   return mins;
}

function displayTimeLeft(seconds) {
   const displayMins = Math.floor(seconds / 60);
   const displaySecs = seconds % 60;
   const display = `${displayMins}:${padZero(displaySecs)}`;

   timerDisplay.textContent = display;
   document.title = display;
}

function displayEndTime(timestamp) {
   const end = new Date(timestamp);
   const display = end.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric"
   });

   endTime.textContent = `Be back at ${display}`;
}

function startTimer() {
   const seconds = parseInt(this.dataset.time);
   timer(seconds);
}

buttons.forEach((button) => {
   button.addEventListener("click", startTimer);
});
document.customForm.addEventListener("submit", function(event) {
   event.preventDefault();
   const mins = this.minutes.value;
   timer(mins * 60);
   this.reset();
});
