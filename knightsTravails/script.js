const header = document.querySelector('.header');
const section2 = document.querySelector('.container-2');
const board = document.querySelector('.container2__board-boardblock');

window.addEventListener('scroll', () => {
  const section2Position = section2.getBoundingClientRect().top;
  if (section2Position <= 0) {
    document.querySelector('.header__wrapper').style.color = 'white';
  } else {
    document.querySelector('.header__wrapper').style.color = 'orchid';
  }
});

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
console.log(createArrBoard(10));

const createBoard = () => {
  board.textContent = '';
  const arr = createArrBoard();
  const table = document.createElement('div');
  table.className = 'table';

  for (let i = 0; i < arr.length; i++) {
    const createRow = document.createElement('div');
    createRow.className = 'row';
    for (let j = 0; j < arr[i].length; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      createRow.append(cell);
    }
    table.append(createRow);
  }

  board.append(table);
};

createBoard();

class Node {
  constructor(x, y) {
    this.value = [x, y] || null;
    this.nextNode = null;
  }
}
