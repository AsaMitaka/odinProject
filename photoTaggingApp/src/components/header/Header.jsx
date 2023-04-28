import styles from './header.module.css';

const Header = ({ openModal }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>Find Pokemon</div>

      <div className={styles.headerLvl} onClick={openModal}>
        Select Level
      </div>
    </header>
  );
};

export default Header;
