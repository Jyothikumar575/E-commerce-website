// src/pages/Home.js
import React  from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import CategoryBar from '../components/CategoryBar';
import PromoBanner from '../components/PromoBanner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';
import Footer from '../components/Footer';



const UNSPLASH_KEY = 'u7_dz5ARqJgyFJSzFaysnHXP4U3Cni6d3i8E-lpUnq0';

const fetchUnsplashImage = async (query) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&orientation=squarish&client_id=${UNSPLASH_KEY}`
    );
    const data = await res.json();
    return data.urls.small;
  } catch (error) {
    console.error('Error fetching image:', error);
    return '';
  }
};

const dealsUnder499 = [
  { id: 101, title: 'USB Cable', price: 199, image: '/assets/dealsUnder499/USB Cable.jpeg' },
  { id: 102, title: 'Phone Holder', price: 249, image: '/assets/dealsUnder499/Phone Holder.jpeg' },
  { id: 103, title: 'Earphones', price: 399, image: '/assets/dealsUnder499/Earphones.jpeg' },
  { id: 104, title: 'Pop Socket', price: 99, image: '/assets/dealsUnder499/Pop Socket.jpeg' },
  { id: 105, title: 'Mobile Stand', price: 299, image: '/assets/dealsUnder499/Mobile Stand.jpeg' },
  { id: 106, title: 'Screen Guard', price: 150, image: '/assets/dealsUnder499/Screen Guard.jpeg' },
  { id: 107, title: 'Charging Adapter', price: 499, image: '/assets/dealsUnder499/Charging Adapter.jpeg' },
  { id: 108, title: 'SIM Card Holder', price: 120, image: '/assets/dealsUnder499/SIM Card Holder.jpeg' },
  { id: 109, title: 'Mobile Cleaner Kit', price: 349, image: '/assets/dealsUnder499/Mobile Cleaner Kit.jpeg' },
  { id: 110, title: 'Cable Organizer', price: 89, image: '/assets/dealsUnder499/Cable Organizer.jpeg' },
];

const mobileDealsData = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max',
    price: 129999,
    image: '/assets/mobiles/i-phone-14-promax.jpg',
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23 Ultra',
    price: 124999,
    image: '/assets/mobiles/Samsung-galaxy-s23-ultra2.png',
  },
  {
    id: 3,
    title: 'OnePlus 11 5G',
    price: 56999,
    image: '/assets/mobiles/one-plus-11-5G.jpg',
  },
  {
    id: 4,
    title: 'Xiaomi 13 Pro',
    price: 69999,
    image: '/assets/mobiles/i-phone-12-promax.jpg',
  },
  {
    id: 5,
    title: 'Realme Narzo 60 Pro',
    price: 23999,
    image: '/assets/mobiles/realme-narzo-60.jpg',
  },
  {
    id: 6,
    title: 'iQOO Neo 7 Pro',
    price: 34999,
    image: '/assets/mobiles/iq00-neo-10.jpg',
  },
  {
    id: 7,
    title: 'Nothing Phone (2)',
    price: 44999,
    image: '/assets/mobiles/Nothing-phone-2.jpg',
  },
];


const electronicsData = [{ id: 1, title: 'Sony WH-1000XM5 Headphones', price: 29990, image: '/assets/electronics/sony wh-1000xm5.jpeg' },
  { id: 2, title: 'Apple iPad Air', price: 59999, image: '/assets/electronics/Apple 11 ipad.jpeg' },
  { id: 3, title: 'Canon EOS 200D DSLR', price: 45999, image: '/assets/electronics/Canon EOS 200D DSLR.jpeg' },
  { id: 4, title: 'Samsung Smart Monitor', price: 19999, image: '/assets/electronics/Samsung Smart Monitor.jpeg' },
  { id: 5, title: 'GoPro Hero 11', price: 51990, image: 'assets/electronics/GoPro Hero 11.jpeg' },
  { id: 6, title: 'JBL Flip 6 Speaker', price: 8999, image: 'assets/electronics/JBL Flip 6 Speaker.jpeg' },
  { id: 7, title: 'Apple MacBook Air M2', price: 104999, image: 'assets/electronics/Apple MacBook Air M2.jpeg' },
  { id: 8, title: 'Logitech Wireless Mouse', price: 1199, image: '/assets/electronics/Logitech Wireless Mouse.jpeg' },
  { id: 9, title: 'TP-Link Wi-Fi Router', price: 2499, image: '/assets/electronics/TP-Link Wi-Fi Router.jpeg' },
  { id: 10, title: 'Dell External SSD', price: 5999, image: '/assets/electronics/Dell External SSD.jpeg' },
];
const fashionData = [
  { id: 1, title: "Men's Leather Jacket", price: 3999, image: "/assets/fashionData/Men's Leather Jacket.jpeg" },
  { id: 2, title: "Women's Summer Dress", price: 1799, image: "/assets/fashionData/Women's Summer Dress.jpeg" },
  { id: 3, title: 'Sports Shoes', price: 2499, image: "/assets/fashionData/Sports Shoes.jpeg" },
  { id: 4, title: 'Casual T-Shirts Combo', price: 999, image: "/assets/fashionData/Casual T-Shirts Combo.jpeg" },
  { id: 5, title: "Formal Men's Suit", price: 4999, image: "/assets/fashionData/Formal Men's Suit.jpeg" },
  { id: 6, title: "Women's Handbag Combo", price: 2299, image: "/assets/fashionData/Women's Handbag Combo.jpeg" },
  { id: 7, title: 'Designer Sunglasses', price: 1299, image: "/assets/fashionData/Designer Sunglasses.jpeg" },
  { id: 8, title: 'Analog Wrist Watch', price: 1499, image: "/assets/fashionData/Analog Wrist Watch.jpeg" },
  { id: 9, title: 'Party Wear Gown', price: 3499, image: "/assets/fashionData/Party Wear Gown.jpeg" },
  { id: 10, title: 'Leather Belt Combo', price: 799, image: "/assets/fashionData/Leather Belt Combo.jpeg" },
];

const cyclesData = [
  { id: 1, title: 'Hero Sprint Pro MTB', price: 10499, image: '/assets/cyclesData/Hero Sprint Pro MTB.jpeg' },
  { id: 2, title: 'Urban Terrain UT3000', price: 13999, image: '/assets/cyclesData/Urban Terrain UT3000.jpeg' },
  { id: 3, title: 'Firefox Road Runner', price: 11999, image: '/assets/cyclesData/Firefox Road Runner.jpeg' },
  { id: 4, title: 'Btwin Rockrider ST100', price: 14499, image: '/assets/cyclesData/Btwin Rockrider ST100.jpeg' },
  { id: 5, title: 'Leader Xtreme 26T', price: 9999, image: '/assets/cyclesData/Leader Xtreme 26T.jpeg' },
  { id: 6, title: 'Montra Helicon Disc', price: 16999, image: '/assets/cyclesData/Montra Helicon Disc.jpeg' },
  { id: 7, title: 'Vaux Blaze 27.5T', price: 12499, image: '/assets/cyclesData/Vaux Blaze 27.5T.jpeg' },
  { id: 8, title: 'Hercules Top Gear CX70', price: 13499, image: '/assets/cyclesData/Hercules Top Gear CX70.jpeg' },
  { id: 9, title: 'Atlas Targa', price: 9499, image: '/assets/cyclesData/Atlas Targa.jpeg' },
  { id: 10, title: 'Mach City iBike', price: 11499, image: '/assets/cyclesData/Mach City iBike.jpeg' },
];

const recentlyViewed = [
  { id: 1, title: 'Dell XPS Laptop', price: 129999, image: 'assets/electronics/Apple MacBook Air M2.jpeg' },
  { id: 8, title: 'Analog Wrist Watch', price: 1499, image: "/assets/fashionData/Analog Wrist Watch.jpeg" },
  { id: 2, title: 'Noise Smart Watch', price: 3499, image: '/assets/electronics/Samsung Smart Monitor.jpeg' },
  { id: 3, title: 'Nike Running Shoes', price: 5999, image: '/assets/fashionData/Sports Shoes.jpeg' },
  { id: 4, title: 'Amazon Echo Dot', price: 2999, image: '/assets/electronics/JBL Flip 6 Speaker.jpeg' },
];

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  toast.success(`${product.title} added to cart`, {
    position: 'bottom-left',
    autoClose: 2000,
  });
};


  const renderSection = (title, products) => (
  <div className="product-row">
    <div className="section-header">
      <h2>{title}</h2>
      <button className="view-all-btn">View All</button>
    </div>
    <div className="product-scroll">
      {products.map((p) => (
        <div className="product-card-small" key={p.id}>
          <img src={p.image} alt={p.title} />
          <h4>{p.title}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => handleAddToCart(p)}>Add to Cart</button>

        </div>
      ))}
    </div>
  </div>
);

  return (
    <div className="home-container">
      <CategoryBar />
      <PromoBanner />

      {renderSection('Deals Under ₹499 🤑', dealsUnder499)}
      {renderSection('Top Picks in Mobiles 📱', mobileDealsData)}
      {renderSection('Top Picks in Electronics 💻', electronicsData)}
      {renderSection('Top Picks in Fashion 👗', fashionData)}
      {renderSection('Top Picks in Cycles 🚴', cyclesData)}

      <ToastContainer /> 
      <Footer />

    </div>
  );
};

export default Home;