import styles from './catalogitem.module.css';

const CatalogItem = ({ seed: { title, src, price }, handleAddToCart }) => {
  return (
    <div className={styles.cartItem}>
      <h3>{title}</h3>
      <img src={src} alt={title} className={styles.cartItemImg} />
      <button className={styles.cartItemBtn} onClick={() => handleAddToCart({ title, src, price })}>
        {price}
      </button>
    </div>
  );
};

export default CatalogItem;
