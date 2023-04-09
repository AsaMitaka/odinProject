import { header, footer } from '../component/index';

const address = () => {
  return `
    <section class='address'>
      <h1 class="address__title">Address</h1>
      <address class="address__block">
        You can contact author at <br />
        <a href="tel:+38012345678" class="address__block-a">+38 012 345 678</a><br />
        If you see any bugs, please <br />
        <a href="mailto:random@gmail.com" class="address__block-a"> contact us</a>.<br />
        You may also want to visit us:<br />
        <span class="address__block-title">Frutties</span><br />
        Kyiv<br />
        Volodymirska, 45a<br />
        Ukraine
      </address>
    </section>`;
};

const addressPage = () => `${header('address')} ${address()} ${footer()}`;

export default addressPage;
