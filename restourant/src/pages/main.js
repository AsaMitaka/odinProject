import { header, footer } from '../component/index.js';

const main = () => {
  return `<main class="main">
    <div class="main__item">
      <h2>Order from us</h2>
      <div class="main__item-about">
        <div class="main__about-left">1</div>
        <div class="main__about-right">2</div>
      </div>
      <button class="main__item-btn">Order</button>
    </div>
  </main>`;
};

const mainPage = () => {
  return `
  ${header()}
  ${main()}
  ${footer()}
  `;
};

export default mainPage;
