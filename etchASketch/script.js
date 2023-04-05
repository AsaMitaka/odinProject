const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const randomBtn = document.querySelector('.random');
const blackBtn = document.querySelector('.black');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-nums');
const INIT__COLOR = '#000';

let val = 4;
let color = INIT__COLOR;

function createDivs(nums) {
  container.innerHTML = '';
  container.style = `
  grid-template-columns: repeat(${val}, 2fr);
  grid-template-rows: repeat(${val}, 2fr);
  `;

  for (let i = 0; i < nums ** 2; i++) {
    let div = document.createElement('div');
    div.classList.add('container__block');
    div.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = color;
    });
    container.append(div);
  }
}

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}

function handleSlider({ target }) {
  val = Number(target.value);
  sliderValue.textContent = target.value;
  createDivs(val);
}

function handleReset() {
  color = INIT__COLOR;
  createDivs(val);
}

function handleBlackColor() {
  color = INIT__COLOR;
}

function handleRandomColor() {
  color = randomColor();
}

function init() {
  createDivs(val);

  slider.addEventListener('change', handleSlider);
  randomBtn.addEventListener('click', handleRandomColor);
  resetBtn.addEventListener('click', handleReset);
  blackBtn.addEventListener('click', handleBlackColor);
}

init();
