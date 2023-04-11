import { header, footer } from './components/index';
const content = document.querySelector('#content');

let _todoId = 4;
let selectedProject = 'tomorrow';

let proj = {
  today: [
    { title: 'Title1', isCompleted: false, id: 1 },
    { title: 'Title2', isCompleted: true, id: 2 },
    { title: 'Title3', isCompleted: false, id: 3 },
  ],
  tomorrow: [{ title: 'Title1', isCompleted: false, id: 4 }],
  nextWeek: [
    { title: 'Title1', isCompleted: false, id: 5 },
    { title: 'Title1', isCompleted: false, id: 6 },
  ],
};

const renderSelectedBar = () => {
  const seleteds = Object.keys(proj)
    .map((item) => {
      const checkeds = item === selectedProject ? 'selected' : '';
      return `<option ${checkeds}>${item}</option>`;
    })
    .join('');

  return `<select class='main__select'>${seleteds}</select>`;
};

const renderToDoList = () => {
  const selectedProjectTodos = proj[selectedProject];
  if (!selectedProjectTodos) return '';

  return selectedProjectTodos
    .map(({ id, title, isCompleted }) => {
      let checked = isCompleted ? 'checked' : '';
      return `
      <div class='main__todo' data-id=${id}>
        <div class='main__todo-left'>
          <input type="checkbox" class="main__todo-isCompleted" ${checked}>
          <p class='main__todo-title'>${title}</p>
        </div>
        <button class='main__todo-btn'>X</button>
      </div>`;
    })
    .join('');
};

const main = () => {
  const todoList = renderToDoList();
  const selectedBar = renderSelectedBar();
  return `<main class='main'>
    <div class='main__selectedbar'>
      ${selectedBar}
      <form class='main__addproject'>
        <input type='text' class='main__addproject-input' placeholder='add new project'>
        <button type='submit' class='main__addproject-btn'>Add Project</button>
      </form>
    </div>
    <div class='main__todos'>
      ${todoList}
    </div>
    <form class='main__addtodo'>
      <input type='text' class='main__addtodo-input' placeholder='add new todo'>
      <button type='submit' class='main__addtodo-btn'>Add</button>
    </form>
  </main>`;
};

const handleNewTodo = (e) => {
  e.preventDefault();
  const input = document.querySelector('.main__addtodo-input');
  if (!input) return;
  const title = input.value.trim();

  const newTodo = {
    title: title,
    isCompleted: false,
    id: _todoId,
  };
  _todoId += 1;

  proj = { ...proj, [selectedProject]: [...proj[selectedProject], newTodo] };
  input.value = '';

  updatePage();
};

const handleDeleteToDo = (e) => {
  const targetId = e.target.parentElement.dataset.id;
  const newProj = {
    ...proj,
    [selectedProject]: proj[selectedProject].filter((item) => item.id !== Number(targetId)),
  };
  proj = newProj;

  updatePage();
};

const handleSelect = (e) => {
  selectedProject = e.target.value;
  updatePage();
};

const handleIsCompleted = (e) => {
  const targetId = e.target.parentElement.parentElement.dataset.id;

  if (!proj[selectedProject]) return;

  proj[selectedProject] = proj[selectedProject].map((item) => {
    if (item.id === Number(targetId)) {
      return {
        ...item,
        isCompleted: !item.isCompleted,
      };
    } else {
      return item;
    }
  });
};

const handleNewProject = (e) => {
  e.preventDefault();
  const input = document.querySelector('.main__addproject-input');

  if (!input) return;
  const inputText = input.value.trim();

  proj[inputText] = [];
  input.value = '';

  updatePage();
};

const updatePage = () => {
  content.textContent = '';
  content.innerHTML = `
    ${header()}
    ${main()}
    ${footer()}
  `;

  const addToDoBtn = document.querySelector('.main__addtodo');
  addToDoBtn.addEventListener('submit', handleNewTodo);
  const deleteToDo = document.querySelectorAll('.main__todo-btn');
  deleteToDo.forEach((btn) => btn.addEventListener('click', handleDeleteToDo));
  const checkedToDo = document.querySelectorAll('.main__todo-isCompleted');
  checkedToDo.forEach((btn) => btn.addEventListener('click', handleIsCompleted));
  const select = document.querySelector('.main__select');
  select.addEventListener('change', handleSelect);
  const addNewProject = document.querySelector('.main__addproject');
  addNewProject.addEventListener('submit', handleNewProject);
};

function init() {
  updatePage();
}

init();
