import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ product, handleAddToCart }) => {


  return (
    <ProductCardContainer>
      <div class="container">
          <div class="imgBx">
            <img src={product.image} alt={product.category} />
          </div>
          <div class="details">
              <h2>{product.title}<br />
                <span>{product.category.split(' ')[0]}</span>
              </h2>
              <h3>£{product.price}</h3>
              <button onClick={() => handleAddToCart()}>Add to Basket</button>
              <SLink to={`/${product.id}`}>See more details</SLink >
          </div>
      </div>

    </ProductCardContainer>
  )
}

export default Card;

const ProductCardContainer = styled.div`
  /* border:1px solid red; */
  margin:10px;
  /* height:300px; */
  width:300px;
  img{
    height:100px;
    /* width:200px */
  }

  


  //////


  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,800&display=swap');



.container {
    
    /* position: relative; */
    display: flex;
    /* flex-wrap: wrap; */
    
    justify-content: space-between;
    width: 100%;
    height:100%;
    background: #fff;
    margin-bottom: 20px;
    /* padding:10px; */
}

.container .imgBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    /* height: 100%; */
    
    background: #212121;
    transition: .3s linear;
}

.container .imgBx:before {
    content: 'ONLINE STORE';
    position: absolute;
    top: 10px;
    left: 20px;
    /* color: hsl(0, 9.090909090909067%, 97.84313725490196%); */
    color:white;
    opacity: 0.2;
    font-size: 1em;
    font-weight: 800;
}

.container .imgBx img {
    position: relative;
    width: 100px;
    /* height:300px; */
    /* transform: rotate(-30deg); */
    left: 50px;
    transition: .9s linear;
}

 .details {
  border:1px solid red;
    width: 50%;
    /* height: 100%; */
    display:flex;
    /* flex-direction:column; */
    flex-wrap:wrap;
    justify-content:center;
 
}

.container .details h2{
    margin: 0;
    padding: 0;
    font-size: 1em;
    line-height: 1em;
    color: #444;
}

.container .details h2 span {
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #999;
}

.container .details p {
    max-width: 85%;
    margin-left: 15%;
    color: #333;
    font-size: 15px;
    margin-bottom: 36px;
}

.container .details h3 {
    margin: 0;
    padding: 0;
    font-size: 1.5;
    color: #a2a2a2;
    float: left;
}
.container .details button {
    background: #000;
    color: #fff;
    border: none;
    outline: none;
    /* padding: 10px 10px; */
    margin-top: 15px;
    /* font-size: 14px; */
    letter-spacing: 1px;
    /* text-transform: uppercase; */
    font-weight: 600;
    border-radius: 40px;
    float: right;
    cursor: pointer;
}



.content{
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  
  /* height:100%; */
  width:100%; 
}



/* responsive */
@media (max-width: 1080px) {
    .container {
        height: auto;
    }
    .container .imgBx {
        padding: 40px;
        box-sizing: border-box;
        width: 100% !important;
        height: auto;
        text-align: center;
        overflow: hidden;
    }
    .container .imgBx img {
        left: initial;
        max-width: 100%;
        transform: rotate(0deg);
    }
    .details {
        width: 100% !important;
        height: auto;
        padding: 20px;
    }
    .container .details p {
        margin-left: 0;
        max-width: 100%;
    }
}



`
const SLink = styled(Link)`
  /* text-decoration:none; */
  color:black;
  font-weight:200px;
  cursor: pointer;
`