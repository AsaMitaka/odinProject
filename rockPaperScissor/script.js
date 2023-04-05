let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let you = document.querySelector('.you');
let comp = document.querySelector('.computer');
let inputs = document.querySelector('.inputs');
let main = document.querySelector('.main');

let score = {
  you: 0,
  computer: 0,
};

function updateScoreDisplay() {
  you.textContent = `Your: ${score.you} score`;
  comp.textContent = `Computer: ${score.computer} score`;
}

function compRand() {
  let answer = ['rock', 'paper', 'scissor'];
  let randNum = Math.floor(Math.random() * answer.length);

  return answer[randNum];
}

function handleClick({ target }) {
  let yourChoise;
  if (target === rock || target === paper || target === scissor) {
    yourChoise = target.textContent.toLowerCase();

    playRound(yourChoise);
  }
}

function playRound(playerSelection) {
  let computerSelection = compRand();

  inputs.textContent = `Your choise ${playerSelection}, computer choise ${computerSelection}`;

  if (playerSelection === computerSelection) {
    return;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissor') ||
    (playerSelection === 'scissor' && computerSelection === 'rock')
  ) {
    score.computer += 1;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissor') ||
    (computerSelection === 'scissor' && playerSelection === 'rock')
  ) {
    score.you += 1;
  }

  updateScoreDisplay();

  if (score.you >= 5 || score.computer >= 5) {
    checkWinner();
  }
}

function disableBtn() {
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
}

function enableBtn() {
  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;
}

function checkWinner() {
  main.removeEventListener('click', handleClick);

  inputs.textContent = score.you > score.computer ? 'YOU WIN' : 'YOU LOSE';

  let btn = document.createElement('button');
  btn.classList.add('newGame');
  btn.textContent = 'NEW GAME';
  document.querySelector('.block').appendChild(btn);
  btn.addEventListener('click', resetGame);

  disableBtn();
}

function resetGame() {
  score.you = 0;
  score.computer = 0;
  updateScoreDisplay();
  inputs.textContent = '';

  enableBtn();

  let btn = document.querySelector('.newGame');
  btn.removeEventListener('click', resetGame);
  btn.remove();

  main.addEventListener('click', handleClick);
}

main.addEventListener('click', handleClick);
