/** Get our elements **/
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/** Build our functions **/

function togglePlay() {
   if (video.paused) {
      video.play();
   } else {
      video.pause();
   }
}

function updateButton() {
   console.log("update the button");
   toggle.textContent = video.paused ? "►" : "❚ ❚";
}

/** Hook up the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);
