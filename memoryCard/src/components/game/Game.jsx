import { useEffect, useState } from 'react';
import { Header, Footer, Board, Scoreboard, Help, ModalWinner } from '../index';
import styles from './game.module.css';

const Game = () => {
  const [isShow, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useState(0);
  const [cardList, setCardList] = useState([]);

  const handleGame = (card) => {
    if (!cardList.includes(card)) {
      handleCard(card);
      handleScore();
    } else {
      resetBoard();
    }
  };

  const handleCard = (card) => {
    setCardList((prev) => [...prev, card]);
  };

  const handleScore = () => setScore((prev) => prev + 1);

  const resetBoard = () => {
    setScore(0);
    setCardList([]);
  };

  const resetGame = () => {
    setScore(0);
    setBestScore(0);
    setShow(false);
    setCardList([]);
  };

  useEffect(() => {
    if (bestscore === 12) {
      setShow(true);
    }

    if (score > bestscore) {
      setBestScore(score);
    }
  }, [score, bestscore]);

  return (
    <div className={styles.game}>
      <Header />
      <Scoreboard score={score} bestscore={bestscore} />
      <Board handleGame={handleGame} />
      <Help />
      <Footer />
      {isShow && <ModalWinner resetGame={resetGame} />}
    </div>
  );
};

export default Game;
