import React from 'react';

import Amex from './icons/Amex';
import Discover from './icons/Discover';
import Mastercard from './icons/Mastercard';
import Visa from './icons/Visa';

import styles from './CardDisplay.module.scss';

function CardDisplay({square = true, expand = false, active = ''}) {
  // explicitly writing these out to filter invalid values
  const activeCardClassNames = {
    'amex' : styles.amex,
    'visa' : styles.visa,
    'mc' : styles.mc,
    'discover' : styles.discover
  };

  const baseClassName = square
    ? ( expand
      ? 'expand'
      : 'square')
    : 'container'
  ;
  let className = [styles[baseClassName]];

  let activeCard = activeCardClassNames[active];
  if (activeCard) {
    className.push(activeCard);
  }

  return (
    <div className={className.join(' ')}>
      <div className={styles.visa}>
        <Visa/>
      </div>
      <div className={styles.mc}>
        <Mastercard/>
      </div>
      <div className={styles.amex}>
        <Amex/>
      </div>
      <div className={styles.discover}>
        <Discover/>
      </div>
    </div>
  );
}

export default CardDisplay;