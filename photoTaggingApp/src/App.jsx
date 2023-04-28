import lvl1 from './assets/lvl1.jpg';
import lvl2 from './assets/lvl2.jpg';
import lvl3 from './assets/lvl3.jpg';
import bckg from './assets/bckgrnd.jpg';

import { useState } from 'react';
import './App.css';
import { Footer, Header, Main, ModalWindow } from './components';

function App() {
  const [isShow, setShow] = useState(true);
  const [findCharacter, setFindCharacter] = useState([]);
  const [levels, setLevels] = useState({
    1: {
      lvl: true,
      src: lvl1,
      characters: [
        { character: 'Pikachu', x: '788', y: '341' },
        { character: 'Pikachu', x: '229', y: '678' },
        { character: 'Pikachu', x: '1083', y: '121' },
      ],
    },
    2: { lvl: false, src: lvl2, characters: [] },
    3: { lvl: false, src: lvl3, characters: [] },
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
