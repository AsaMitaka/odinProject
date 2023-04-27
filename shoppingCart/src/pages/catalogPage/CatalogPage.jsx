import { CatalogItem } from '../../component';
import styles from './catalogpage.module.css';

const CatalogPage = ({ items, handleAddToCart }) => {
  return (
    <section className={styles.catalog}>
      <h1 className={styles.catalogHeader}>Catalog</h1>
      <div className={styles.catalogBlock}>
        {items
          ? items.map((seed, index) => (
              <CatalogItem seed={seed} handleAddToCart={handleAddToCart} key={index} />
            ))
          : 'no'}
      </div>
    </section>
  );
};

export default CatalogPage;
