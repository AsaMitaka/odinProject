import mainPage from './pages/main';
import addressPage from './pages/address';
import menuPage from './pages/menu';

function init() {
  let selected = mainPage();
  const content = document.querySelector('.content');
  content.innerHTML = '';

  content.addEventListener('click', function ({ target }) {
    const key = target.getAttribute('data-key');
    if (key) {
      switch (key) {
        case 'main':
          selected = mainPage();
          break;
        case 'address':
          selected = addressPage();
          break;
        case 'menu':
          selected = menuPage();
          break;
      }
    }

    content.innerHTML = selected;
  });

  content.innerHTML = selected;
}

init();
