import mainPage from './pages/main';
import addressPage from './pages/address';
import menuPage from './pages/menu';

const content = document.querySelector('.content');

function clearContent() {
  content.textContent = '';
}

function getPage(pageType) {
  let page;
  switch (pageType) {
    case 'main':
      page = mainPage();
      break;
    case 'address':
      page = addressPage();
      break;
    case 'menu':
      page = menuPage();
      break;
    default:
      throw new Error(`Unknown page type: ${pageType}`);
  }

  return page;
}

function handlePages({ target }) {
  const key = target.getAttribute('data-key');
  if (key) {
    const page = getPage(key);
    renderPage(page);
  }
}

function renderPage(page) {
  content.innerHTML = page;
}

function init() {
  clearContent();
  renderPage(mainPage());

  content.addEventListener('click', handlePages);
}

init();
