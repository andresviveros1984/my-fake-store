import Header from "./components/Header";
import Search from "./components/Search";
import ElectronicsPage from "./components/ElectronicsPage";
import Results from "./components/Results";
import { Routes, Route, Link } from 'react-router-dom';
import Jewelery from "./components/Jewelery";
import MensClothing from "./components/MensClothing";
import WomensPage from "./components/Womens";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";


const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  }


  return (
    //fetch all caterogores, set to state, and loop throuhg array of categories and create the links in Header

    <div className="App">
      <Header cartcount={cartCount} />
      <Routes>
        <Route path='/' element={<Results handleAddToCart={handleAddToCart} />} />
        <Route path={'/men\'s clothing'} element={<MensClothing />} />
        <Route path={'/jewelery'} element={<Jewelery />} />
        <Route path='/electronics' element={<ElectronicsPage />} />
        <Route path={'/women\'s clothing'} element={<WomensPage />} />
      </Routes>

    </div>
  );
}

export default App;


