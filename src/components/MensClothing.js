import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';


const MensClothing = () => {
  const url = 'https://fakestoreapi.com/products/category/men\'s clothing';
  const [mensProducts, setMensProducts] = useState([]);

  
  useEffect(()=>{
    fetchMensClothing();
  },[])

  const fetchMensClothing = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMensProducts(data);
  }

  return (
    <div>
    
      {mensProducts.map(mensProduct =>{
        return(
          <Card product={mensProduct} />
        )
      })}
      
    </div>
  )
} 

export default MensClothing;