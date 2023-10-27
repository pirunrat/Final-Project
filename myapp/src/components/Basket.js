import React, { useState } from 'react';
import '../css/Basket.css'

const Basket = ({setAuthenticated}) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const itemsToDisplay = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <div className='main-basket-content'>
      <h2>Your Basket</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <h2>Available Items</h2>
      <ul>
        {itemsToDisplay.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => addToBasket(item)}>Add to Basket</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
