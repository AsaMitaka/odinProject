import styles from './aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.asideNav}>
        <ul className={styles.asideList}>
          <li className={styles.asideListLi}>1</li>
          <li className={styles.asideListLi}>2</li>
          <li className={styles.asideListLi}>3</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
