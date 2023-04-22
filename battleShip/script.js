const move = document.querySelector('.main__setting-gamemove');
const reset = document.querySelector('.main__setting-reset');
const battlefield1 = document.querySelector('.battlefield1');
const battlefield2 = document.querySelector('.battlefield2');

const boardSize = 10;
let gamerfield = new Array(boardSize).fill(null).map(() => new Array(boardSize));
let botfield = new Array(boardSize).fill(null).map(() => new Array(boardSize));
const ships = [5, 4, 3, 3, 2];

function printSize(board, block) {
  block.textContent = '';

  for (let i = 0; i < board.length; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement('div');
      if (board[i][j] !== undefined) {
        cell.classList.add('ship');
      }
      cell.classList.add(block.className.includes('battlefield2') ? 'enemycell' : 'cell');
      cell.textContent = '';
      cell.dataset.rowid = i;
      cell.dataset.cellid = j;
      row.append(cell);
    }

    block.append(row);
  }
}

function randomPlacesOfShips(field) {
  for (let i = 0; i < ships.length; i++) {
    let shipLength = ships[i];
    let row, cell;
    let direction = Math.floor(Math.random() * 2); // 0 - horizontal / 1 - vertical

    if (direction === 0) {
      row = Math.floor(Math.random() * field.length);
      cell = Math.floor(Math.random() * (field[0].length - shipLength + 1));
      for (let j = 0; j < shipLength; j++) {
        field[row][cell + j] = shipLength;
      }
    } else {
      row = Math.floor(Math.random() * (field.length - shipLength + 1));

      cell = Math.floor(Math.random() * field[0].length);
      for (let j = 0; j < shipLength; j++) {
        field[row + j][cell] = shipLength;
      }
    }
  }
}

function handleUserMove({ target }) {
  const dX = target.dataset.rowid;
  const dY = target.dataset.cellid;

  if (target.className.includes('miss') || target.className.includes('hit')) return;

  if (typeof botfield[dX][dY] === 'number') {
    console.log('hit');
    target.classList.remove('ship');
    target.classList.add('hit');
    botfield[dX][dY] = 'h';
  } else {
    console.log('miss');
    target.classList.add('miss');
  }

  checkWin();
}

function checkWin() {
  if (
    botfield.every((row) =>
      row.every((cell) => cell === null || cell === undefined || typeof cell === 'string'),
    )
  ) {
    console.log('You win!');
    move.textContent = 'You win!';
    document
      .querySelectorAll('.enemycell')
      .forEach((cell) => cell.removeEventListener('click', handleUserMove));
  } else if (
    gamerfield.every((row) =>
      row.every((cell) => cell === null || cell === undefined || typeof cell === 'string'),
    )
  ) {
    move.textContent = 'You lose!';
    console.log('You lose!');
  }
}

function handleReset() {
  gamerfield = new Array(boardSize).fill(null).map(() => new Array(boardSize));
  botfield = new Array(boardSize).fill(null).map(() => new Array(boardSize));
  randomPlacesOfShips(gamerfield);
  randomPlacesOfShips(botfield);
  document
    .querySelectorAll('.enemycell')
    .forEach((cell) => cell.removeEventListener('click', handleUserMove));
  printSize(gamerfield, battlefield1);
  printSize(botfield, battlefield2);
  document
    .querySelectorAll('.enemycell')
    .forEach((cell) => cell.addEventListener('click', handleUserMove));
  move.textContent = '';
}

function init() {
  reset.addEventListener('click', handleReset);
  randomPlacesOfShips(gamerfield);
  randomPlacesOfShips(botfield);
  printSize(gamerfield, battlefield1);
  printSize(botfield, battlefield2);
  document
    .querySelectorAll('.enemycell')
    .forEach((cell) => cell.addEventListener('click', handleUserMove));
}

init();
