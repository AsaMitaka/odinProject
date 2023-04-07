const gameRow = document.querySelector('.board');
const resetBtn = document.querySelector('.reset');
const turnParagraph = document.querySelector('.turn');

let board = new Array(9).fill('');
let turn = 0;

function randomIndex() {
  const index = Math.floor(Math.random() * board.length);
  return board[index] === '' ? index : randomIndex();
}

function computerTurn() {
  turn += 1;
  let randIndex = randomIndex();
  board[randIndex] = 'O';
}

function createAndUpdateBoard() {
  gameRow.textContent = '';
  const cells = board
    .map((el, index) => {
      return `<div data-key=${index} class='cell'>${el}</div>`;
    })
    .join('');
  gameRow.innerHTML = cells;
}

function checkWinner() {
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningMoves.length; i++) {
    const [a, b, c] = winningMoves[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

function handleClick({ target }) {
  if (target.getAttribute('data-key')) {
    const index = parseInt(target.getAttribute('data-key'));
    if (board[index] === '') {
      board[index] = 'X';
      computerTurn();
      turn += 1;

      turnParagraph.textContent = `Turn ${turn % 2 !== 0 ? 'O' : 'X'}`;
      const winner = checkWinner();
      if (winner) {
        turnParagraph.textContent = `Winner ${winner}`;
        gameRow.removeEventListener('click', handleClick);
      } else if (isBoardFull()) {
        turnParagraph.textContent = 'GAME IS OVER';
        gameRow.removeEventListener('click', handleClick);
      }
    }

    createAndUpdateBoard();
  }
}

function isBoardFull() {
  return board.every((element) => element !== '');
}

function handleResetGame() {
  turn = 0;
  turnParagraph.textContent = 'Turn X';
  board = new Array(9).fill('');

  gameRow.addEventListener('click', handleClick);

  createAndUpdateBoard();
}

function init() {
  createAndUpdateBoard();
  gameRow.addEventListener('click', handleClick);
  resetBtn.addEventListener('click', handleResetGame);
}

init();
