const header = document.querySelector('.header');
const section2 = document.querySelector('.container-2');
const board = document.querySelector('.container2__board-boardblock');
const reset = document.querySelector('.container2__checker-reset');
const radios = document.querySelectorAll('.container2__checker-input');

window.addEventListener('scroll', () => {
  const section2Position = section2.getBoundingClientRect().top;
  if (section2Position <= 0) {
    document.querySelector('.header__wrapper').style.color = 'white';
  } else {
    document.querySelector('.header__wrapper').style.color = 'orchid';
  }
});

let horse = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

class Node {
  constructor(x, y) {
    this.value = [x, y] || null;
    this.nextNode = null;
  }
}

class ListNodes {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(x, y) {
    let newNode = new Node(x, y);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }
}

const createArrBoard = (num = 10) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = [];
    for (let j = 0; j < num; j++) {
      arr[i][j] = '';
    }
  }

  return arr;
};

let gameBoard = createArrBoard();

const renderBoard = (arr) => {
  board.textContent = '';

  for (let i = 0; i < arr.length; i++) {
    const createRow = document.createElement('div');
    createRow.className = 'row';
    for (let j = 0; j < arr[i].length; j++) {
      const cell = document.createElement('div');
      cell.textContent = arr[i][j];
      cell.className = 'cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      createRow.append(cell);
    }
    board.append(createRow);
  }
};

const handleClearChecked = () => {
  radios.forEach((item) => {
    item.checked = false;
  });
  gameBoard = createArrBoard(10);
  placeHorseOnBoard(5, 5);
  renderBoard(gameBoard);
  horseMoves = new ListNodes();
  horseMoves.append(5, 5);
};

const handleCell = ({ target }) => {
  if (target.classList.contains('cell')) {
    let dx = parseInt(target.dataset.row);
    let dy = parseInt(target.dataset.col);
    canHorseMove(dx, dy);
  }
};

const canHorseMove = (x, y) => {
  let lastHorseMove = horseMoves.tail.value;
  const oldX = lastHorseMove[0];
  const oldY = lastHorseMove[1];

  if (x < 0 || y < 0 || x >= gameBoard.length || y >= gameBoard[0].length) {
    return false;
  }

  for (let i = 0; i < horse.length; i++) {
    const [dx, dy] = horse[i];
    const newX = oldX + dx;
    const newY = oldY + dy;

    if (newX === x && newY === y) {
      gameBoard[oldX][oldY] = '.';
      gameBoard[x][y] = 'H';
      horsePosition = [x, y];
      horseMoves.append(x, y);
      placeHorseOnBoard(x, y);
      renderBoard(gameBoard);
      return true;
    }
  }
  return false;
};

const placeHorseOnBoard = (x, y) => {
  gameBoard[x][y] = 'H';
};

placeHorseOnBoard(5, 5);

let horseMoves = new ListNodes();
horseMoves.append(5, 5);

const init = () => {
  renderBoard(gameBoard);
  reset.addEventListener('click', handleClearChecked);
  board.addEventListener('click', handleCell);
};

init();
