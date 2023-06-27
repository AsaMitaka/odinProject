import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li className={styles.headerListLi}>1</li>
          <li className={styles.headerListLi}>2</li>
          <li className={styles.headerListLi}>3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
