import { NavLink } from 'react-router-dom';
import styles from './mainpage.module.css';
import store from '../../assets/pierreshop.png';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainBlockItem}>
        <h1 className={styles.mainHeader}>Pierre Shop</h1>
        <p className={styles.mainHeading}>
          As well as selling those items, Pierre also buys foraged items, crops, artisan goods,
          cooked dishes, and animal products from the player, which avoids waiting overnight for
          shipping.
        </p>
        <NavLink to="/cart" className={styles.mainBtn}>
          Cart
        </NavLink>
      </div>
      <div className={styles.mainBlockItem}>
        <img src={store} alt="store" className={styles.mainBlockItemImg} />
      </div>
    </main>
  );
};

export default MainPage;
