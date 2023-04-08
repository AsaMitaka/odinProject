import { header, footer } from '../component/index';

const address = () => {
  return `<section class='address'>
        <h2>Address</h2>
    </section>`;
};

const addressPage = () => {
  return `${header()} ${address()} ${footer()}`;
};

export default addressPage;
