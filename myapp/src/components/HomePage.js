import axios from 'axios'; // Note: axios is imported but not used in the provided code
import React, { useState } from 'react';
import Navbar from './Navbar';
import '../css/HomePage.css';
import '../css/Card.css';
import '../css/Main_Content.css';
import '../css/Navbar.css'
import Footer from './Footer';
import SliderCard from './SliderCard';
import ProductMain from './ProductMain';
import productImage from '../images/img1.jpg'

const HomePage = ({ setAuthenticated  }) => {

  const [slideIndex, setSlideIndex] = useState(0);
  const products = [
    {
      productName: "Laptop X200",
      productDescription: "Sleek laptop with 16GB RAM and 512GB SSD.",
      price: "$1200",
      imgSrc: "path/to/laptop-x200-image.jpg"
    },
    {
      productName: "Smartphone Y11",
      productDescription: "5.8 inch, 64GB storage, 12MP camera.",
      price: "$699",
      imgSrc: productImage
    },
    {
      productName: "Digital Camera Z5",
      productDescription: "24MP, 4K video recording, 3-inch LCD.",
      price: "$500",
      imgSrc: "path/to/camera-z5-image.jpg"
    },
    {
      productName: "Smartwatch W9",
      productDescription: "Fitness tracking, call and text, 3-day battery.",
      price: "$199",
      imgSrc: "path/to/smartwatch-w9-image.jpg"
    },
    {
      productName: "Bluetooth Speaker B3",
      productDescription: "Loud, clear sound with 10-hour playtime.",
      price: "$79",
      imgSrc: "path/to/speaker-b3-image.jpg"
    },
    {
      productName: "Gaming Headset G7",
      productDescription: "Noise-cancelling, surround sound, comfortable fit.",
      price: "$149",
      imgSrc: "path/to/headset-g7-image.jpg"
    },
    {
      productName: "Tablet T10",
      productDescription: "10-inch display, 128GB storage, stylus included.",
      price: "$329",
      imgSrc: "path/to/tablet-t10-image.jpg"
    },
    {
      productName: "E-Reader R4",
      productDescription: "6-inch e-ink display, backlight, long battery life.",
      price: "$120",
      imgSrc: "path/to/ereader-r4-image.jpg"
    },
    {
      productName: "Wireless Mouse M5",
      productDescription: "Ergonomic design, precision tracking, long battery life.",
      price: "$45",
      imgSrc: "path/to/mouse-m5-image.jpg"
    },
    {
      productName: "Portable Charger C2",
      productDescription: "20000mAh, fast charging, dual USB output.",
      price: "$60",
      imgSrc: "path/to/charger-c2-image.jpg"
    },{
      productName: "Gaming Headset G7",
      productDescription: "Noise-cancelling, surround sound, comfortable fit.",
      price: "$149",
      imgSrc: "path/to/headset-g7-image.jpg"
    },
    {
      productName: "Tablet T10",
      productDescription: "10-inch display, 128GB storage, stylus included.",
      price: "$329",
      imgSrc: "path/to/tablet-t10-image.jpg"
    },
    {
      productName: "E-Reader R4",
      productDescription: "6-inch e-ink display, backlight, long battery life.",
      price: "$120",
      imgSrc: "path/to/ereader-r4-image.jpg"
    },
    {
      productName: "Wireless Mouse M5",
      productDescription: "Ergonomic design, precision tracking, long battery life.",
      price: "$45",
      imgSrc: "path/to/mouse-m5-image.jpg"
    },
    {
      productName: "Portable Charger C2",
      productDescription: "20000mAh, fast charging, dual USB output.",
      price: "$60",
      imgSrc: "path/to/charger-c2-image.jpg"
    },
    {
      productName: "Portable Charger C2",
      productDescription: "20000mAh, fast charging, dual USB output.",
      price: "$60",
      imgSrc: "path/to/charger-c2-image.jpg"
    }
];

  const slide = (n) => {
    let newIndex = slideIndex + n;
  
    if (newIndex > products.length - 5) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = products.length - 5;
    }
    
    setSlideIndex(newIndex);
  }

  return (
           <div className='main-background'>
            <Navbar setAuthenticated={setAuthenticated} />
               <div className='content'>
                <h1>Recommend</h1>
                <SliderCard products={products} slideIndex={slideIndex} slide={slide} />
                <ProductMain products={products}/>
              </div>
            </div>
          );
        };

export default HomePage;
