import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';



const Jewelery = () =>{

  const url = 'https://fakestoreapi.com/products/category/jewelery';
  const [jeweleryProducts, setJeweleryProducts] = useState([]);

  
  useEffect(()=>{
    fetchJeweleryProducts();
  },[])

  const fetchJeweleryProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJeweleryProducts(data)
  }

  return (
    <div>
    
      {jeweleryProducts.map(jeweleryProduct =>{
        return(
          <Card product={jeweleryProduct} />
        )
      })}
      
    </div>
  )
};

export default Jewelery;