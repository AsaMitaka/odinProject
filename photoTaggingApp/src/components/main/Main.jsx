import CharactersBlock from '../charactersBlock/CharactersBlock';
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
      <div>
        <CharactersBlock characters={characters} />
      </div>
    </main>
  );
};

export default Main;
