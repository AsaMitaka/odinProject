import { useState } from 'react';
import styles from './help.module.css';

const Help = () => {
  const [isShow, setShow] = useState(false);

  const setShowHelp = () => {
    setShow((prev) => !prev);
  };

  const clazz = isShow ? `${styles.helpShow}` : `${styles.helpUnshow}`;

  return (
    <div className={styles.helpBlock}>
      <div className={clazz}>Don't click same card twice</div>
      <button onClick={setShowHelp} className={styles.helpBtn}>
        {isShow ? '?' : 'X'}
      </button>
    </div>
  );
};

export default Help;
