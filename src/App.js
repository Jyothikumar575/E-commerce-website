import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; 
import Login from './pages/Login';
import Navbar from './components/Navbar';
import CategoryProducts from './pages/CategoryProducts';
import CategoryPage from './pages/CategoryPage';



function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
      </Routes>
    </Router>
  );
}
export default App;

