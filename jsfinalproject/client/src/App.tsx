import styles from './App.module.scss';
import { Aside, Footer, Header } from './components';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainBlock}>
        <Aside />
        <main className={styles.main}>
          <section className={styles.sectionSide}>
            <h2>Section</h2>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
