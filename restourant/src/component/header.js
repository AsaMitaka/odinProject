const header = (active = 'main') => {
  const arr = ['main', 'menu', 'address'];
  const headerItems = arr
    .map((item) => {
      return `<div class="header__item ${
        active === item ? 'active' : ''
      }" data-key="${item}">${item}</div>`;
    })
    .join('');

  return `<header class="header">${headerItems}</header>`;
};

export default header;
