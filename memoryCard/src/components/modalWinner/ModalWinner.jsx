import styles from './modalwinner.module.css';

const ModalWinner = ({ resetGame }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>You Win!</h2>
        <button onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  );
};

export default ModalWinner;
