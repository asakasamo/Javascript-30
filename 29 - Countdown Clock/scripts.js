let countdown;
const timerDisplay = document.querySelector(".display__time-left");

function timer(seconds) {
   const now = Date.now();
   const then = now + seconds * 1000;
   displayTimeLeft(seconds);

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
