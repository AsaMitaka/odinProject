import styles from './inputtweet.module.scss';

const InputTweet = () => {
  return (
    <div className={styles.inputTweetBlock}>
      <textarea className={styles.input} placeholder="new tweet" />
      <div className={styles.inputTweetRow}>
        <button className={styles.inputButton}>Tweet</button>
      </div>
    </div>
  );
};

export default InputTweet;
