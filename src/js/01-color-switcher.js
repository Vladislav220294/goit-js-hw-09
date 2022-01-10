function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const color = getRandomHexColor();
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let colorId = null;
let isActive = false;
startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  if (isActive) {
    return;
  }
  isActive = true;
  colorId = setInterval(() => (bodyEl.style.backgroundColor = getRandomHexColor()), 1000);
}
function onStopBtn() {
  clearInterval(colorId);
  isActive = false;
}
