const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector(`button[data-action="start"]`);
const stopBtn = document.querySelector(`button[data-action="stop"]`);
const body = document.querySelector(`body`);

startBtn.addEventListener(`click`, startChangeColor);
stopBtn.addEventListener(`click`, stopChangeColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// let index = randomIntegerFromInterval(0, 5);
// console.log(index);

// console.log(colors[index]);

function startChangeColor() {
  // body.style.backgroundColor = colors[index];

  const timerId = setInterval(() => {
    let index = randomIntegerFromInterval(0, 5);
    body.style.backgroundColor = colors[index];
  }, 1000);
}

console.log('🚀 ~ file: index.js ~ line 26 ~ timerId ~ timerId', timerId);

function stopChangeColor(timerId) {
  clearTimeout(timerId);
}
