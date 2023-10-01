import Header from "./components/Header";
import Search from "./components/Search";
import ElectronicsPage from "./components/ElectronicsPage";
import Results from "./components/Home";
import { Routes, Route, Link } from 'react-router-dom';
import Jewelery from "./components/Jewelery";
import MensClothing from "./components/MensClothing";
import WomensPage from "./components/Womens";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";



const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const url = 'https://fakestoreapi.com/products?limit=12';
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchAllCategories();
  }, [])

  const fetchAllCategories = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setResults(data);
    
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  }


  return (
    //fetch all categories, set to state, and loop throuhg array of categories and create the links in Header

    <Main className="App">
      {console.log(results)}
      <Header cartcount={cartCount} />
      <main>
        <Routes>
          <Route path='/' element={<Home handleAddToCart={handleAddToCart} results={results} />} />
          <Route path={'/men\'s clothing'} element={<MensClothing />} />
          <Route path={'/jewelery'} element={<Jewelery />} />
          <Route path='/electronics' element={<ElectronicsPage />} />
          <Route path={'/women\'s clothing'} element={<WomensPage />} />
          <Route path={'/:id'} element={<ProductDetails />} />
        </Routes>
      </main>
    </Main>
  );
}

export default App;

const Main = styled.main `
  /* height:1000px; */
  width:100vw;
  overflow-x:hidden;
`





