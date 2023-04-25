import styles from './scoreboard.module.css';

const Scoreboard = ({ score, bestscore }) => {
  return (
    <section className={styles.scoreboard}>
      <h3>
        Score: <span className={styles.scoreboardspan}>{score}</span>
      </h3>
      <h3>
        Best score: <span className={styles.scoreboardspan}>{bestscore}</span>
      </h3>
    </section>
  );
};

export default Scoreboard;
