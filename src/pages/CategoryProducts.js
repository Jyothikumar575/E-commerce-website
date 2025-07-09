// src/pages/CategoryProducts.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryProducts.css';

const UNSPLASH_KEY = 'u7_dz5ARqJgyFJSzFaysnHXP4U3Cni6d3i8E-lpUnq0';


const fetchUnsplashImage = async (query) => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${query}&orientation=squarish&client_id=${UNSPLASH_KEY}`
  );
  const data = await res.json();
  return data.urls.small;
};

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [imagesMap, setImagesMap] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then(async (data) => {
        setProducts(data.products);
        for (let p of data.products) {
          const img = await fetchUnsplashImage(p.title.split(' ')[0]);
          setImagesMap((prev) => ({ ...prev, [p.id]: img }));
        }
      })
      .catch((err) => console.error('Category fetch error', err));
  }, [categoryName]);

  return (
    <div className="category-products">
      <h2 className="category-title">{categoryName}</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={imagesMap[p.id] || p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>₹{Math.round(p.price * 83)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
