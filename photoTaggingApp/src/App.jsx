import bckg from './assets/bckgrnd.jpg';
import lvl1 from './assets/lvl1.jpg';
import crobat from './assets/crobat.jpg';
import graveler from './assets/graveler.png';
import sneasel from './assets/sneasel.png';
import lvl2 from './assets/lvl2.jpg';
import pikachu from './assets/pikachu.png';
import snorlax from './assets/snorlax.png';
import venusaur from './assets/venusaur.png';
import blastoise from './assets/blastoise.png';
// import lvl3 from './assets/lvl3.jpg';

import { useState } from 'react';
import './App.css';
import { Footer, Header, Main, ModalWindow } from './components';

function App() {
  const [isShow, setShow] = useState(true);
  const [levels, setLevels] = useState({
    1: {
      lvl: true,
      src: lvl1,
      characters: [
        { character: 'Crobat', src: crobat, x: '788', y: '341' },
        { character: 'Hisuian Sneasel', src: sneasel, x: '229', y: '678' },
        { character: 'Graveler ', src: graveler, x: '1083', y: '121' },
      ],
    },
    2: {
      lvl: false,
      src: lvl2,
      characters: [
        { character: 'Pikachu', src: pikachu, x: '1216', y: '694' },
        { character: 'Snorlax', src: snorlax, x: '541', y: '518' },
        { character: 'Venusaur', src: venusaur, x: '1005', y: '223' },
        { character: 'Blastoise', src: blastoise, x: '443', y: '647' },
      ],
    },
    // 3: { lvl: false, src: lvl3, characters: [] },
  });
  const [gameboard, setGameboard] = useState({ lvl: 'Select Level', src: bckg, characters: [] });

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const startLvl = (index) => {
    const level = levels[index];
    setGameboard(level);
    closeModal();
  };

  const handleImageClicks = (event) => {
    const { clientX, clientY } = event;
    console.log(clientX, clientY);
    const characterIndex = gameboard.characters.findIndex((character) => {
      const { x, y } = character;
      return clientX >= x && clientX <= x + 50 && clientY >= y && clientY <= y + 50;
    });

    if (characterIndex !== -1) {
      const character = gameboard.characters[characterIndex];
      console.log('You found', character.character);
      const newCharacters = [...gameboard.characters];
      newCharacters.splice(characterIndex, 1);
      setGameboard({
        ...gameboard,
        characters: newCharacters,
      });
      if (newCharacters.length === 0) {
        const nextLevel = Object.keys(levels).find((level) => levels[level].lvl === false);
        if (nextLevel) {
          const newLevels = { ...levels, [nextLevel]: { ...levels[nextLevel], lvl: true } };
          setLevels(newLevels);
          openModal();
        }
      }
    }
  };

  return (
    <div className="wrapper">
      <Header openModal={openModal} />
      <Main gameboard={gameboard} handleImageClicks={handleImageClicks} />
      {isShow && (
        <ModalWindow isShow={isShow} closeModal={closeModal} levels={levels} startLvl={startLvl} />
      )}
      <Footer />
    </div>
  );
}

export default App;
