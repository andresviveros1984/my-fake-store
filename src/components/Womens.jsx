import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';


const WomensPage = () => {
  const url = 'https://fakestoreapi.com/products/category/women\'s clothing';
  const [womensProduct, setWomensProduct] = useState([]);

  
  useEffect(()=>{
    fetchWomensProducts();
  },[])

  const fetchWomensProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setWomensProduct(data)
  }

  return (
    <div>
    
      {womensProduct.map(wProduct =>{
        return(
          <Card product={wProduct} />
        )
      })}
      
    </div>
  )
} 

export default WomensPage;