import styles from './main.module.css';

const Main = ({ gameboard: { src, lvl, characters }, handleImageClicks }) => {
  return (
    <main className={styles.main}>
      <h1>{lvl ? lvl : 'Select Level'}</h1>
      <img
        className={styles.mainImg}
        src={src ? src : ''}
        alt={lvl ? lvl : ''}
        onClick={() => handleImageClicks(event)}
      />
    </main>
  );
};

export default Main;
