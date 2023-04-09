import { header, footer } from '../component/index';

const menu = () => {
  const menuItems = [
    {
      title: 'Apple Pie',
      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',
      price: 2.1,
    },
    {
      title: 'Five-Fruit Pie',
      descr:
        'condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis',
      price: 1,
    },
    {
      title: 'Blackberry Pie',
      descr: 'Lorem ipsum',
      price: 2,
    },
    {
      title: 'Key Lime Pie',
      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',
      price: 2,
    },
    {
      title: 'Pineapple Cream Pie',
      descr:
        'diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing',
      price: 2,
    },
    {
      title: 'Raspberry Pie',
      descr: 'Lorem ipsum',
      price: 2,
    },
    {
      title: 'Peach Pie',
      descr: 'Lorem ipsum',
      price: 2,
    },
    {
      title: 'French Coconut Pie',
      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',
      price: 2,
    },
    {
      title: 'Cranberry Pie',
      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',
      price: 2,
    },
    {
      title: 'Creamsicle Pie',
      descr:
        'diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing',
      price: 3,
    },
    {
      title: 'Banana Cream Pie',
      descr: 'Lorem ipsum',
      price: 2,
    },
    {
      title: 'Mixed Berry Pie',
      descr: 'Lorem ipsum',
      price: 2,
    },
    {
      title: 'Strawberry Rhubarb Pie',
      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',
      price: 2,
    },
    {
      title: 'Saskatoon Berry Pie',
      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',
      price: 2,
    },
    {
      title: 'Cherry Pie',
      descr: 'Lorem ipsum',
      price: 2,
    },
    {
      title: 'Blueberry Pie',
      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',
      price: 2,
    },
    {
      title: 'Strawberry Pie',
      descr:
        'diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing',
      price: 2,
    },
    {
      title: 'Mango Pie',
      descr: 'Lorem ipsum',
      price: 2,
    },
    {
      title: 'Blueberry Cream Cheese Pie',
      descr: 'cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque',
      price: 2,
    },
  ];

  const menuItemsBlocks = menuItems
    .map((item) => {
      return `
      <div class="menu__block">
        <p class="menu__block-title">${item.title}</p>
        <p>Description: ${item.descr}</p>
        <p class="menu__block-price">Price: ${item.price} $</p>
      </div>
    `;
    })
    .join('');

  return `
    <section class='menu'>
      <h1 class="menu__title">Menu: </h1>
      <div class="menu__blocks">${menuItemsBlocks}</div>
    </section>`;
};

const menuPage = () => `${header('menu')} ${menu()} ${footer()}`;

export default menuPage;
