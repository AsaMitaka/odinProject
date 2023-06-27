import styles from './tweet.module.scss';

const Tweet = () => {
  return (
    <div className={styles.tweet}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/c/cc/Wojak_cropped.jpg"
        alt=""
        className={styles.tweetImg}
      />
      <div className={styles.tweetMain}>
        <div className={styles.tweetMainHeader}>
          <a href="#" className={styles.tweetMainHeaderLink}>
            Name
          </a>
          <span className={styles.tweetMainHeaderSpan}>@name</span>
          <time className={styles.tweetMainHeaderTime}>14m</time>
        </div>
        <div className={styles.tweetMainText}>text</div>
        <div className={styles.tweetMainBottom}>
          <div className={styles.tweetMainBottomItem}>a</div>
          <div className={styles.tweetMainBottomItem}>b</div>
          <div className={styles.tweetMainBottomItem}>c</div>
          <div className={styles.tweetMainBottomItem}>d</div>
          <div className={styles.tweetMainBottomItem}>e</div>
        </div>
      </div>
      <div className={styles.tweetSetting}>...</div>
    </div>
  );
};

export default Tweet;
