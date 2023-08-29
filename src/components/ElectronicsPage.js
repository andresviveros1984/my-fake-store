import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';


const ElectronicsPage = () => {
  const url = 'https://fakestoreapi.com/products/category/electronics';
  const [eletroinicsProduct, setElectronicsProduct] = useState([]);

  
  useEffect(()=>{
    fetchElectronics();
  },[])

  const fetchElectronics = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setElectronicsProduct(data)
  }

  return (
    <div>
    
      {eletroinicsProduct.map(eProduct =>{
        return(
          <Card product={eProduct} />
        )
      })}
      
    </div>
  )
} 

export default ElectronicsPage;