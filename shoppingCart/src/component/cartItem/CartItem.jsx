import styles from './cartitem.module.css';

const CartItem = ({
  cartitem: { title, src, price, quantity },
  handleDeleteCartItem,
  handleDeleteOneItem,
  handleAddToCart,
}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemBlock}>
        <h3>{title}</h3>
        <img src={src} alt={title} className={styles.cartItemImg} />
        <p>quantity: {quantity}</p>
      </div>
      <div className={styles.cartItemRow}>
        <button
          className={styles.cartItemBtn}
          onClick={() => handleDeleteOneItem({ title, src, price, quantity })}>
          -
        </button>
        <p className={styles.cartItemPrice}>{price}</p>
        <button
          className={styles.cartItemBtn}
          onClick={() => handleAddToCart({ title, src, price, quantity })}>
          +
        </button>
      </div>
      <button className={styles.cartItemBtn} onClick={() => handleDeleteCartItem(title)}>
        X
      </button>
    </div>
  );
};

export default CartItem;
