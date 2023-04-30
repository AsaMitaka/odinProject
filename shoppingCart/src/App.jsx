import amaranth from './assets/Amaranth_Seeds.png';
import artichoke from './assets/Artichoke_Seeds.png';
import beet from './assets/Beet_Seeds.png';
import bokchoy from './assets/Bok_Choy_Seeds.png';
import cactus from './assets/Cactus_Seeds.png';
import cauliflower from './assets/Cauliflower_Seeds.png';
import cranberry from './assets/Cranberry_Seeds.png';
import eggplant from './assets/Eggplant_Seeds.png';
import fairy from './assets/Fairy_Seeds.png';
import garlic from './assets/Garlic_Seeds.png';
import grape from './assets/Grape_Starter.png';
import jazz from './assets/Jazz_Seeds.png';
import melon from './assets/Melon_Seeds.png';
import poppy from './assets/Poppy_Seeds.png';
import potato from './assets/Potato_Seeds.png';
import pumpkin from './assets/Pumpkin_Seeds.png';
import rare from './assets/Rare_Seed.png';
import redcabbage from './assets/Red_Cabbage_Seeds.png';
import starfruit from './assets/Starfruit_Seeds.png';
import yam from './assets/Yam_Seeds.png';

import { useState } from 'react';
import { Footer, Header } from './component';
import { CartPage, CatalogPage, MainPage } from './pages/';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [items, setItems] = useState([
    {
      price: 30,
      title: 'Jazz Seeds',
      ctg: 'spring',
      src: jazz,
    },
    {
      price: 80,
      title: 'Cauliflower Seeds',
      ctg: 'spring',
      src: cauliflower,
    },
    {
      price: 40,
      title: 'Garlic Seeds',
      ctg: 'spring',
      src: garlic,
    },
    {
      price: 50,
      title: 'Potato Seeds',
      ctg: 'spring',
      src: potato,
    },
    {
      price: 80,
      title: 'Melon Seeds',
      ctg: 'summer',
      src: melon,
    },
    {
      price: 100,
      title: 'Poppy Seeds',
      ctg: 'summer',
      src: poppy,
    },
    {
      price: 100,
      title: 'Red Cabbage Seeds',
      ctg: 'summer',
      src: redcabbage,
    },
    {
      price: 400,
      title: 'Starfruit Seeds',
      ctg: 'summer',
      src: starfruit,
    },
    {
      price: 60,
      title: 'Yam Seeds',
      ctg: 'fall',
      src: yam,
    },
    {
      price: 100,
      title: 'Pumpkin Seeds',
      ctg: 'fall',
      src: pumpkin,
    },
    {
      price: 60,
      title: 'Grape Starter',
      ctg: 'fall',
      src: grape,
    },
    {
      price: 200,
      title: 'Fairy Seeds',
      ctg: 'fall',
      src: fairy,
    },
    {
      price: 20,
      title: 'Eggplant Seeds',
      ctg: 'fall',
      src: eggplant,
    },
    {
      price: 240,
      title: 'Cranberry Seeds',
      ctg: 'fall',
      src: cranberry,
    },
    {
      price: 50,
      title: 'Bok Choy Seeds',
      ctg: 'fall',
      src: bokchoy,
    },
    {
      price: 20,
      title: 'Beet Seeds',
      ctg: 'fall',
      src: beet,
    },
    {
      price: 30,
      title: 'Artichoke Seeds',
      ctg: 'fall',
      src: artichoke,
    },
    {
      price: 70,
      title: 'Amaranth Seeds',
      ctg: 'fall',
      src: amaranth,
    },
    {
      price: 150,
      title: 'Cactus Seeds',
      ctg: 'special',
      src: cactus,
    },
    {
      price: 1000,
      title: 'Rare Seed',
      ctg: 'special',
      src: rare,
    },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].quantity += 1;
      newCart[itemIndex].price += newCart[itemIndex].price / (newCart[itemIndex].quantity - 1);
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const handleDeleteOneItem = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);
    if (itemIndex !== -1) {
      const newCart = [...cart];
      if (newCart[itemIndex].quantity === 1) {
        newCart.splice(itemIndex, 1);
      } else {
        newCart[itemIndex].quantity -= 1;
        newCart[itemIndex].price -= newCart[itemIndex].price / (newCart[itemIndex].quantity + 1);
      }
      setCart(newCart);
    }
  };

  const handleDeleteCartItem = (title) => {
    const newArr = [...cart];
    const filterNewArr = newArr.filter((newArrItem) => newArrItem.title !== title);
    setCart(filterNewArr);
  };

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/catalog"
          element={<CatalogPage items={items} handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
              handleDeleteCartItem={handleDeleteCartItem}
              handleDeleteOneItem={handleDeleteOneItem}
              handleAddToCart={handleAddToCart}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
