import styles from './charactersblock.module.css';

const CharactersBlock = ({ characters }) => {
  return (
    <div className={styles.charactersBlock}>
      {characters.map((char, index) => (
        <CharBlock key={index} char={char} />
      ))}{' '}
    </div>
  );
};

const CharBlock = ({ char }) => {
  return (
    <div className={styles.charBlock}>
      <p className={styles.charBlockName}>{char.character}</p>
      <img src={char.src} alt="" className={styles.charBlockImg} />
    </div>
  );
};

export default CharactersBlock;
