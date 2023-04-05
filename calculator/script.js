const mainTab = document.querySelector('.mainTab');
const subTab = document.querySelector('.subTab');
const resetBtn = document.querySelector('.reset');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operators');

let subTabs = '';
let operator = '';
let mainTabs = '';

function updateTabs() {
  mainTab.textContent = mainTabs;
  subTab.textContent = subTabs;
}

function handleNum({ target }) {
  mainTabs += target.textContent;

  updateTabs();
}

function handleReset() {
  mainTabs = '';
  subTabs = '';
  updateTabs();
}

function handleDelete() {
  mainTabs = mainTabs.slice(0, -1);
  updateTabs();
}

function handleOpertor({ target }) {
  let op = target.textContent;

  if (mainTabs.length < 1) {
    return;
  } else {
    subTabs = mainTabs;
    mainTabs = '';
    operator = op;

    updateTabs();
  }
}

function handleEqual() {
  if (!subTabs || !mainTabs) {
    return;
  } else {
    switch (operator) {
      case '+':
        mainTabs = Number(subTabs) + Number(mainTabs);
        break;
      case '-':
        mainTabs = Number(subTabs) - Number(mainTabs);
        break;
      case '/':
        mainTabs = Math.floor(Number(subTabs) / Number(mainTabs));
        break;
      case '*':
        mainTabs = Math.floor(Number(subTabs) * Number(mainTabs));
        break;
    }

    subTabs = '';
    operator = '';
    updateTabs();
  }
}

function init() {
  resetBtn.addEventListener('click', handleReset);
  deleteBtn.addEventListener('click', handleDelete);

  nums.forEach((num) => {
    num.addEventListener('click', handleNum);
  });

  operators.forEach((op) => {
    op.addEventListener('click', handleOpertor);
  });

  equalBtn.addEventListener('click', handleEqual);
}

init();
