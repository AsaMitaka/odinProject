const move = document.querySelector('.main__setting-gamemove');
const reset = document.querySelector('.main__setting-reset');
const battlefield1 = document.querySelector('.battlefield1');
const battlefield2 = document.querySelector('.battlefield2');
let userMove = true;

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

function botMove() {
  let dX = Math.floor(Math.random() * gamerfield.length);
  let dY = Math.floor(Math.random() * gamerfield[0].length);
  const target = document.querySelector(`[data-rowid="${dX}"][data-cellid="${dY}"]`);

  if (typeof gamerfield[dX][dY] === 'string') {
    botMove();
    return;
  }

  if (typeof gamerfield[dX][dY] === 'number') {
    target.classList.remove('ship');
    target.classList.add('hit');
    gamerfield[dX][dY] = 'h';
  } else {
    target.classList.add('miss');
    gamerfield[dX][dY] = 'm';
  }

  userMove = true;
  checkWin();
}

function handleUserMove({ target }) {
  const dX = target.dataset.rowid;
  const dY = target.dataset.cellid;
  if (!move) return;
  if (target.className.includes('miss') || target.className.includes('hit')) return;

  if (typeof botfield[dX][dY] === 'number') {
    target.classList.remove('ship');
    target.classList.add('hit');
    botfield[dX][dY] = 'h';
  } else {
    target.classList.add('miss');
  }

  userMove = false;
  botMove();
  checkWin();
}

function checkWin() {
  if (
    botfield.every((row) =>
      row.every((cell) => cell === null || cell === undefined || typeof cell === 'string'),
    )
  ) {
    move.classList.remove('hidden');
    move.textContent = 'You win!';
    document
      .querySelectorAll('.enemycell')
      .forEach((cell) => cell.removeEventListener('click', handleUserMove));
  } else if (
    gamerfield.every((row) =>
      row.every((cell) => cell === null || cell === undefined || typeof cell === 'string'),
    )
  ) {
    move.classList.remove('hidden');
    move.textContent = 'You lose!';
    document
      .querySelectorAll('.enemycell')
      .forEach((cell) => cell.removeEventListener('click', handleUserMove));
  }
}

function handleReset() {
  move.classList.add('hidden');
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
