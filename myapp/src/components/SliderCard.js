import React from 'react';
import '../css/Card.css';

const SliderCard = ({ products, slideIndex, slide }) => {
  const renderCard = (product, index) => (
    <div key={`${product.productName}-${index}`} className="card">
      <img src={product.imgSrc} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.productDescription}</p>
      <p>{product.price}</p>
    </div>
  );

  return (
    <div className="slider-container">
      <button className="slide-btn prev-btn" onClick={() => slide(-5)}>❮</button>
      <div className="slider" style={{ transform: `translateX(-${slideIndex * 240}px)` }}>
        {products.map((product, index) => renderCard(product, index))}
      </div>
      <button className="slide-btn next-btn" onClick={() => slide(5)}>❯</button>
    </div>
  );
};

export default SliderCard;