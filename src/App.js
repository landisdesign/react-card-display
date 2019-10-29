import React, {useEffect, useState} from 'react';
import './App.css';

import CardDisplay from './CardDisplay';

function App() {

  const cards = ['visa', 'mc', 'amex', 'discover', ''];
  let [currentCard, setCard] = useState('');

  useEffect(() => {
    setTimeout(() => {
      let index = cards.indexOf(currentCard);
      index++;
      index %= cards.length;
      setCard(cards[index]);
    }, 4000);
  });

  return (
    <div>
      <div>Expanding square: <CardDisplay active={currentCard} expand={true}/></div>
      <hr />
      <div>Square: <CardDisplay active={currentCard}/></div>
      <hr />
      <div>Line: <CardDisplay square={false} active={currentCard}/></div>
    </div>
  );
}

export default App;
