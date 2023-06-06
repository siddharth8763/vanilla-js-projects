let progressbar = document.querySelector("#myprogressbar");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let progress = 0;
let progressId;

start.addEventListener("click", () => {
  progressId = setInterval(() => {
    if (progress >= 100) {
      clearInterval(progressId);
    } else {
      progress++;
      progressbar.style.width = progress + "%";
    }
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(progressId);
});

reset.addEventListener("click", () => {
    clearInterval(progressId);
    progress=0;
    progressbar.style.width="0%";
});
