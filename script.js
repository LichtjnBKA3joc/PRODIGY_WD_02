let [minutes, seconds, milliseconds] = [0, 0, 0];
let timerDisplay = document.getElementById("display");
let timer = null;
let running = false;

function updateDisplay() {
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  let ms = String(milliseconds).padStart(2, '0');
  timerDisplay.innerText = `${m}:${s}:${ms}`;
}

function stopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

function startStop() {
  if (!running) {
    timer = setInterval(stopwatch, 10);
    running = true;
  } else {
    clearInterval(timer);
    running = false;
  }
}

function reset() {
  clearInterval(timer);
  [minutes, seconds, milliseconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  running = false;
}

function recordLap() {
  let lapTime = timerDisplay.innerText;
  let li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
}
