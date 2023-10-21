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
      {/* <Card handleAddToCart={handleAddToCart} product={results[0]}/> */}
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
  
  /* height:100%; */
  /* max-width:100vw; */
  /* margin:0 auto; */
  display:flex;
  flex-wrap:wrap;
  /* justify-content:center; */
  /* align-content:center; */
  
  justify-content:space-evenly;
`