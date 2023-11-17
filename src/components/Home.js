import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';

const Home = ({handleAddToCart,results}) => {
  //create new variable for new results array
  // loop through results array and place elements at random index

  const [randonResults,setRandomResults] = useState([])

  function ranResults(results){
    const randResults = results[Math.floor(Math.random()*results.length)];
    setRandomResults(randResults)
  }

  // console.log(results[Math.floor(Math.random()*results.length)],"R")
  return(
    <ResultsContainer>
      {/* {console.log(results[0])} */}
      {/* <Card handleAddToCart={handleAddToCart} product={results[0]}/> */}
        {results.map(result =>{
          return(
            <Card handleAddToCart={handleAddToCart} product={result}/>
            // <Card handleAddToCart={handleAddToCart} product={ranResults}/>
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