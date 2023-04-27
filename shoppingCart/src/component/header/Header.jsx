import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>Stardew Valley</div>
      <div className={styles.headerBlock}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.headerLiActive : styles.headerLi)}>
          Main
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? styles.headerLiActive : styles.headerLi)}>
          Catalog
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? styles.headerLiActive : styles.headerLi)}>
          Cart
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
