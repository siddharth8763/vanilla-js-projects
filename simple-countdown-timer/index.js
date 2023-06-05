let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let start = document.querySelector("#Start");
let stop = document.querySelector("#Stop");
let reset = document.querySelector("#Reset");

let timer;

start.addEventListener("click", () => {
  let hours_value = parseInt(hours.value) || 0;
  let minutes_value = parseInt(minutes.value) || 0;
  let seconds_value = parseInt(seconds.value) || 0;

  let totalSeconds = hours_value * 3600 + minutes_value * 60 + seconds_value;

  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      alert("times up");
      clearInterval(timer);
    } else {
      totalSeconds--;

      hours_value = Math.floor(totalSeconds / 3600);
      minutes_value = Math.floor((totalSeconds - hours_value * 3600) / 60);
      seconds_value = totalSeconds - hours_value * 3600 - minutes_value * 60;

      hours.value = hours_value.toString().padStart(2, "0");
      minutes.value = minutes_value.toString().padStart(2, "0");
      seconds.value = seconds_value.toString().padStart(2, "0");
    }
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
});
