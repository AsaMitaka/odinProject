import { useState } from 'react';
import { Card } from '../index';

import abaddon from '../../assets/abaddon.png';
import am from '../../assets/anti-mage.png';
import arc from '../../assets/arc-warden.png';
import axe from '../../assets/axe.png';
import bristl from '../../assets/bristleback.png';
import cw from '../../assets/centaur-warrunner.png';
import ds from '../../assets/dark-seer.png';
import dazzle from '../../assets/dazzle.png';
import earthshaker from '../../assets/earthshaker.png';
import farvhan from '../../assets/farvhan-the-dreamer.png';
import imperia from '../../assets/imperia.png';
import sf from '../../assets/shadow-fiend.png';
import styles from './board.module.css';

const Board = ({ handleGame }) => {
  const images = [
    {
      name: 'Abaddon',
      src: abaddon,
      alt: 'abaddon',
    },
    {
      name: 'Anti Mage',
      src: am,
      alt: 'am',
    },
    {
      name: 'Arc Warden',
      src: arc,
      alt: 'arc',
    },
    {
      name: 'Axe',
      src: axe,
      alt: 'axe',
    },
    {
      name: 'Bristleback',
      src: bristl,
      alt: 'bristle',
    },
    {
      name: 'Centaur Warrunner',
      src: cw,
      alt: 'cw',
    },
    {
      name: 'Dark Seer',
      src: ds,
      alt: 'ds',
    },
    {
      name: 'Dazzle',
      src: dazzle,
      alt: 'dazzle',
    },
    {
      name: 'Earthshaker',
      src: earthshaker,
      alt: 'earthshaker',
    },
    {
      name: 'Farvhan',
      src: farvhan,
      alt: 'farvhan',
    },
    {
      name: 'Imperia',
      src: imperia,
      alt: 'imperia',
    },
    {
      name: 'Shadow Fiend',
      src: sf,
      alt: 'Shadow Fiend',
    },
  ];

  const [cards, setCards] = useState(images);

  const shuffle = (arr) => {
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const shuffleBoard = () => {
    const newArr = [...cards];
    const shuffledArr = shuffle(newArr);

    setCards(shuffledArr);
  };

  const getCard = (name) => {
    shuffleBoard();
    handleGame(name);
  };

  return (
    <main className={styles.main}>
      {cards.map((item, index) => (
        <Card item={item} getCard={getCard} key={index} kIdx={index} />
      ))}
    </main>
  );
};

export default Board;
