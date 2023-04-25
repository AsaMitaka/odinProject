import styles from './card.module.css';

const Card = ({ item: { name, src, alt }, getCard, kIdx }) => {
  return (
    <div key={kIdx} className={styles.cardBlock} onClick={() => getCard(name)}>
      <img src={src} alt={alt} className={styles.cardBlockImg} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
