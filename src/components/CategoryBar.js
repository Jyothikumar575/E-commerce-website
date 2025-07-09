// src/components/CategoryBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CategoryBar.css';

const categories = [
  { name: 'Grocery', image: '/assets/grocery/Grocery image.jpeg', path: '/category/grocery' },
  { name: 'Mobiles', image: '/assets/mobiles/Samsung-galaxy-s23-ultra2.png', path: '/category/mobiles' },
  { name: 'Fashion', image: "/assets/fashionData/Men's Leather Jacket.jpeg", path: '/category/fashion' },
  { name: 'Electronics', image: '/assets/electronics/Apple MacBook Air M2.jpeg', path: '/category/electronics' },
  { name: 'Home & Furniture', image: 'https://img.icons8.com/color/96/sofa.png', path: '/category/home' },
  { name: 'Appliances', image: '/assets/electronics/TP-Link Wi-Fi Router.jpeg', path: '/category/appliances' },
  { name: 'Cycles', image: 'https://img.icons8.com/color/96/bicycle.png', path: '/category/cycles' },
];


const CategoryBar = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="category-bar">
      <Slider {...settings}>
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.path} className="category-item">
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryBar;
