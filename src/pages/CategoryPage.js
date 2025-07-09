// src/pages/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';

const apiMap = {
  grocery: 'https://fakestoreapi.com/products/category/groceries',
  mobiles: 'https://fakestoreapi.com/products/category/electronics',
  fashion: 'https://fakestoreapi.com/products/category/men\'s clothing',
  electronics: 'https://fakestoreapi.com/products/category/electronics',
  home: 'https://fakestoreapi.com/products/category/home',
  appliances: 'https://fakestoreapi.com/products',
};

const productData = {
  mobiles: [
    { id: 1, title: 'iPhone 14', price: 129999, image: '/assets/mobiles/i-phone-14-promax.jpg' },
    { id: 2, title: 'Samsung S23', price: 119999, image: '/assets/mobiles/Samsung-galaxy-s23-ultra2.png' },
    // Add more...
  ],
  fashion: [
    { id: 101, title: 'Summer Dress', price: 999, image: 'https://...' },
    // ...
  ],
  electronics: [
    { id: 201, title: 'Sony Headphones', price: 7999, image: 'https://...' },
    // ...
  ],
  grocery: [
    { id: 301, title: 'Aashirvaad Atta 5kg', price: 239, image: 'https://...' },
    // ...
  ],
  'home-and-furnitures': [
    { id: 401, title: 'Wooden Dining Table', price: 12999, image: 'https://...' },
    // ...
  ],
  appliances: [
    { id: 501, title: 'LG Washing Machine', price: 23999, image: 'https://...' },
    // ...
  ],
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = apiMap[categoryName] || `https://dummyjson.com/products/category/${categoryName}`;

        const res = await fetch(url);

        const data = await res.json();
        setProducts(data.products || data); 
      } catch (err) {
        console.error('Failed to load category:', err);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="category-page">
      <h2>Category: {categoryName}</h2>
      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <h4>{p.title}</h4>
            <p>₹ {Math.round(p.price * 83)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
