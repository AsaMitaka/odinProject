import { header, footer } from '../component/index';

const menu = () => {
  return `<section class='menu'>
        <h2>Menu</h2>
    </section>`;
};

const menuPage = () => {
  return `${header()} ${menu()} ${footer()}`;
};

export default menuPage;
