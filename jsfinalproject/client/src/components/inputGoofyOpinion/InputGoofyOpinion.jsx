import styles from './inputgoofyopinion.module.css';

const InputGoofyOpinion = () => {
  return (
    <section className={styles.inputGoofyOpinion}>
      <h1>Input your goofy opinion</h1>
      <input type="text" placeholder="place for u goofy opinion" />
    </section>
  );
};

export default InputGoofyOpinion;
