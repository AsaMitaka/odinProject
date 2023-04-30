import { InputGoofyOpinion, GoofyOpinionsList } from '../../components';
import styles from './mainpage.module.css';

const MainPage = () => {
  return (
    <section className={styles.mainpage}>
      <h1>Main</h1>
      <InputGoofyOpinion />
      <GoofyOpinionsList />
    </section>
  );
};

export default MainPage;
