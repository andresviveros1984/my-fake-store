import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';

const Home = ({handleAddToCart,results}) => {
  //create new variable for new results array
  // loop through results array and place elements at random index

  
  function shuffleresults(results){
    const newResultsArr = [];
  }


  return(
    <ResultsContainer>
      {console.log(results[Math.floor(Math.random()*results.length)])}
        {results.map(result =>{
          return(
            <Card handleAddToCart={handleAddToCart} product={result}/>
            
          )
        })}
    </ResultsContainer>
  )

}

export default Home;

const ResultsContainer = styled.div `
  border:1px solid red;
  height:100%;
  width:100vw;
  display:flex;
  flex-wrap:wrap;
  /* justify-content:center; */
  justify-content:space-around;
`