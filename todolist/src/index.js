import { header, footer } from './components/index';
const content = document.querySelector('#content');

let projects = {
  today: [
    {
      title: 'New',
      isCompleted: false,
    },
    {
      title: 'New',
      isCompleted: false,
    },
    {
      title: 'New',
      isCompleted: true,
    },
  ],
  tomorrow: [
    {
      title: 'New',
      isCompleted: true,
    },
  ],
  nextWeek: [
    {
      title: 'New',
      isCompleted: true,
    },
  ],
};

const projectsBlocks = () =>
  Object.keys(projects)
    .map((key) => {
      const title = key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();
      return `<div class='projects' data-key='${key}'>
        ${title}
        <button class='projects-btn' data-key='${key}'>X</button>
    </div>`;
    })
    .join('');

const renderItems = (filter = 'today') => {
  const filterItems = projects[filter];
  if (!filterItems) {
    return `<div class='todos' data-key='${filter}'></div>`;
  }

  const items = filterItems
    .map(
      (item) => `<div class='todos__task ${item.isCompleted ? 'done' : ''}'>
    <p>${item.title}</p>
    <p>${item.isCompleted ? 'True' : 'False'}</p>
    <button class='todos__task-btn'>X</button>
  </div>`,
    )
    .join('');

  return `
    <div class='todos' data-key='${filter}'>
      ${items}
      <form class='todos__item'>
        <input type='text' class='todos__item-input'>
        <button type='submit' class='todos__item-btn'>add todo</button>
      </form>
    </div>
  `;
};

function updatePage() {
  const itemsHTML = projectsBlocks();
  const mainLeft = document.querySelector('.main__left-projectsBlock');
  mainLeft.innerHTML = itemsHTML;

  const addProject = document.querySelector('.addproject__form');
  const allProjects = document.querySelectorAll('.projects');
  const addTodo = document.querySelector('.todos__item');
  const deleteProjectButtons = document.querySelectorAll('.projects-btn');

  addProject.addEventListener('submit', handleAddProject);
  allProjects.forEach((proj) => proj.addEventListener('click', handleProject));
  addTodo.addEventListener('submit', handleAddToDo);
  deleteProjectButtons.forEach((button) => {
    button.addEventListener('click', handleDeleteProject);
  });
}

function main() {
  return `<main class='main'>
    <div class='main__left'>
        <div class='main__left-projects'>
            <h2 class='main__left-projects-title'>Projects:</h2>
            <div class='main__left-projectsBlock'>
            ${projectsBlocks()}
            </div>
        </div>
        <div class='main__left-addproject'>
          <form class='addproject__form'>
            <input type='text' class='addproject__form-input'>
            <button type='submit' class='addproject__form-btn'>Add Project</button>
          </form>
        </div>
    </div>
    <div class='main__right'>
      ${renderItems()}
    </div>
</main>`;
}

function createPage() {
  content.innerHTML = `${header()}${main()}${footer()}`;
}

function updateItems(filter = 'today') {
  const itemsHTML = renderItems(filter);
  const mainRight = document.querySelector('.main__right');
  const addTodo = document.querySelector('.todos__item');

  mainRight.innerHTML = itemsHTML;
  addTodo.addEventListener('submit', handleAddToDo);
}

function handleProject({ target }) {
  const dataKey = target.getAttribute('data-key');

  if (dataKey) {
    updateItems(dataKey);
  }
}

function handleDeleteProject(event) {
  const dataKey = event.target.getAttribute('data-key');
  delete projects[dataKey];

  updatePage();
}

function handleAddProject(e) {
  e.preventDefault();

  const inputValue = document.querySelector('.addproject__form-input');

  if (inputValue.value) {
    projects[inputValue.value] = [];
    inputValue.value = '';

    updatePage();
  }
}

function handleAddToDo(event) {
  event.preventDefault();
  const input = document.querySelector('.todos__item-input');
  const dataKey = document.querySelector('.todos').dataset.key;

  if (input.value) {
    const newTodo = {
      title: input.value,
      isCompleted: false,
    };

    projects[dataKey].push(newTodo);
    input.value = '';

    updateItems(dataKey);
  }
}

function init() {
  createPage();

  const allProjects = document.querySelectorAll('.projects');
  const addProject = document.querySelector('.addproject__form');
  const addTodo = document.querySelector('.todos__item');
  const deleteProjectButtons = document.querySelectorAll('.projects-btn');

  addProject.addEventListener('submit', handleAddProject);
  addTodo.addEventListener('submit', handleAddToDo);
  allProjects.forEach((proj) => proj.addEventListener('click', handleProject));
  deleteProjectButtons.forEach((button) => {
    button.addEventListener('click', handleDeleteProject);
  });
}

init();
