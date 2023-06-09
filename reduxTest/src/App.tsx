import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import { useState } from 'react';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  const [name, setName] = useState('');

  const addCash = (price: number): void => {
    dispatch(addCashAction(price));
  };

  const getCash = (price: number): void => {
    if (cash <= 0) {
      return;
    }

    dispatch(getCashAction(price));
  };

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setName(value);
  };

  const addCustomer = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (!name) {
      return;
    }

    const customer = {
      name: name,
      id: Date.now(),
    };
    setName('');
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id: number): void => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <>
      <div className={styles.card}>
        <h1>Cash: {cash}</h1>
        <div className={styles.cardRow}>
          <button className={styles.cardBtn} onClick={() => addCash(2)}>
            Add
          </button>
          <button className={styles.cardBtn} onClick={() => getCash(2)}>
            Remove
          </button>
        </div>
        <div className={styles.cardRow}>
          <form onSubmit={addCustomer}>
            <input
              type="text"
              className={styles.cardInput}
              value={name}
              placeholder="add item"
              onChange={(e) => handleSetName(e)}
            />
            <button className={styles.cardBtn} type="submit">
              Add
            </button>
          </form>
        </div>
        <div>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <div key={customer.id} className={styles.cardItem}>
                <p>{customer.name}</p>
                <button className={styles.cardBtn} onClick={() => removeCustomer(customer.id)}>
                  remove
                </button>
              </div>
            ))
          ) : (
            <div>
              <h3>Customers is empty</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
