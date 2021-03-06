const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector(`button[data-action="start"]`);
const stopBtn = document.querySelector(`button[data-action="stop"]`);
const body = document.querySelector(`body`);

// class ColorSwitch {
//   constructor({}) {
//     this.intervalid = null;
//     this.isActive = false;
//   }
//   startChangeColor() {
//     if (this.isActive) {
//       return;
//     }
//     const randomIntegerFromInterval = (min, max) => {
//       return Math.floor(Math.random() * (max - min + 1) + min);
//     };
//     this.intervalid = setInterval(() => {
//       this.isActive = true;
//       let index = randomIntegerFromInterval(0, colors.length - 1);
//       body.style.backgroundColor = colors[index];
//     }, 1000);
//   }
//   stopChangeColor() {
//     this.isActive = false;
//     clearTimeout(this.intervalid);
//   }
// }
// const colorSwitch = new ColorSwitch({});

// startBtn.addEventListener(`click`, colorSwitch.startChangeColor.bind(colorSwitch));
// stopBtn.addEventListener(`click`, colorSwitch.stopChangeColor.bind(colorSwitch));

// варіант 2

let intervalid = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startChangeColor() {
  intervalid = setInterval(() => {
    let index = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[index];
  }, 1000);
  startBtn.setAttribute('disabled', 'true');
}

function stopChangeColor() {
  startBtn.removeAttribute('disabled');
  clearTimeout(intervalid);
}

startBtn.addEventListener(`click`, startChangeColor);
stopBtn.addEventListener(`click`, stopChangeColor);
