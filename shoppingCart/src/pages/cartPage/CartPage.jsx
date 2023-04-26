import { CartItem } from '../../component';
import styles from './cartpage.module.css';

const CartPage = ({ cart, handleDeleteCartItem, handleDeleteOneItem, handleAddToCart }) => {
  const cartSum = cart.reduce((acc, currentValue) => acc + currentValue.price, 0);

  return (
    <section className={styles.cartpage}>
      <div className={styles.cartpageHeader}>
        <h1>Cart Page</h1>
        <h3>sum: {cartSum}</h3>
      </div>
      <div className={styles.cartpageBlock}>
        {cart.length > 0 ? (
          cart.map((cartitem, index) => (
            <CartItem
              cartitem={cartitem}
              handleDeleteCartItem={handleDeleteCartItem}
              handleDeleteOneItem={handleDeleteOneItem}
              handleAddToCart={handleAddToCart}
              key={index}
            />
          ))
        ) : (
          <div className={styles.cartpageEmpty}>
            <h1>Cart is empty!</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
