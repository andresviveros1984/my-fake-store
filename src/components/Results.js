import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';

const Results = ({handleAddToCart,results}) => {
  // const url = 'https://fakestoreapi.com/products?limit=12';
  // const [results, setResults] = useState([]); //change this to be on app.js, pass thru props

  
      
  // useEffect(()=>{
  //   fetchAllCategories();
  // },[])

  // const fetchAllCategories = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setResults(data);
  // }
  return(
    <ResultsContainer>
        {results.map(result =>{
          return(
            <Card handleAddToCart={handleAddToCart} product={result}/>
            
          )
        })}
    </ResultsContainer>
  )

}

export default Results;

const ResultsContainer = styled.div `
  border:1px solid red;
  /* height:1000px; */
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  justify-content:space-evenly;
`