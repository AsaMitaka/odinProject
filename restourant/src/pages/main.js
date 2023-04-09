import { header, footer } from '../component/index.js';

const main = () => {
  return `<main class="main">
    <div class="main__item">
      <p class="main__item-text">FRUIT RESTAURANT</p>
    </div>
    <div class="main__title">
      <p class="main__title-text">Frutties</p>
    </div>
    <div class="main__about">
      <div class="main__about-block">
        <table class="main__about-table">
          <tr>
            <td class="main__about-table-td">Banana</td>
            <td class="main__about-table-td">1$</td>
          </tr>
          <tr>
           <td class="main__about-table-td">Passion Fruit</td>
            <td class="main__about-table-td">2$</td>
          </tr>
          <tr class="main__about-table-tr">
            <td class="main__about-table-td">Lychee</td>
            <td class="main__about-table-td">3$</td>
          </tr>
        </table>
      </div>
      <div class="main__about-logo">frutties</div>
    </div>
    <div class="main__special">
      <div class="main__special-text">
        <p>Lorem ipsum <b class="main__special-text-bold">dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in <b class="main__special-text-bold">voluptate velit esse cillum</b> dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat <b class="main__special-text-bold">cupidatat</b> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="main__special-rows">
        <div class="main__special-title">Special</div>
        <div class="main__special-logo">frutties</div>
      </div>
    </div>
    <div class="main__discounts">
      <div class="main__discounts-text">
        <p><b class="main__discounts-text-bold">Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in <b class="main__discounts-text-bold">voluptate velit esse</b> cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt <b class="main__discounts-text-bold">in culpa</b> qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="main__discounts-rows">
        <div class="main__discounts-title">Discounts</div>
        <div class="main__discounts-logo">frutties</div>
      </div
    </div>
  </main>`;
};

const mainPage = () => ` ${header()} ${main()} ${footer()}`;

export default mainPage;
