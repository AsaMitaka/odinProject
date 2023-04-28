import { useRef } from 'react';
import styles from './modalwindow.module.css';

const ModalWindow = ({ isShow, closeModal, levels, startLvl }) => {
  const containerRef = useRef();
  const clazz = isShow ? `${styles.showModal}` : `${styles.closeModal}`;

  const handleClick = (event) => {
    if (!containerRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const LvlBlock = Object.entries(levels).map(([key, value], index) => {
    return (
      <div
        key={index}
        className={styles.modalWindowBtn}
        onClick={() => (value.lvl ? startLvl(key) : null)}>
        level {key} {value.lvl ? '' : '🔒'}
      </div>
    );
  });

  return (
    <div className={clazz} onClick={handleClick}>
      <div className={styles.modalWindow} ref={containerRef}>
        <div className={styles.modalWindowHeader}>
          <h1>Select Level</h1>
          <button className={styles.modalWindowBtnClose} onClick={closeModal}>
            X
          </button>
        </div>
        {LvlBlock}
      </div>
    </div>
  );
};

export default ModalWindow;
